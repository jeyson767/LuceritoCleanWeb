'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface CarritoItem {
    nombre: string;
    cantidad: number;
}

interface CarritoProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    carrito: CarritoItem[];
    setCarrito: React.Dispatch<React.SetStateAction<CarritoItem[]>>;
}

export default function CarritoCotizacion({ isOpen, setIsOpen, carrito, setCarrito }: CarritoProps) {
    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const sumar = (index: number) => {
        const nuevo = [...carrito];
        nuevo[index].cantidad += 1;
        setCarrito(nuevo);
    };

    const restar = (index: number) => {
        const nuevo = [...carrito];
        if (nuevo[index].cantidad > 1) {
            nuevo[index].cantidad -= 1;
            setCarrito(nuevo);
        }
    };

    const eliminar = (index: number) => {
        setCarrito(carrito.filter((_, i) => i !== index));
    };

    async function handleEnviar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const nombreCliente = formData.get('nombre');
        const telefonoCliente = formData.get('telefono');
        const dniRuc = formData.get('num_doc');
        const mensajeExtra = formData.get('mensaje') || 'Sin comentarios adicionales';

        // 1. Crear el resumen del pedido para el Excel y para WhatsApp
        const resumenPedido = carrito
            .map(item => `${item.nombre} (${item.cantidad})`)
            .join(', ');

        const datosEnvio = {
            nombre: nombreCliente,
            telefono: telefonoCliente,
            tipo_documento: formData.get('tipo_doc'),
            numero_documento: dniRuc,
            producto: resumenPedido,
            mensaje: mensajeExtra,
            tipo_contacto: 'FORMULARIO',
            fecha: new Date().toISOString()
        };

        // 2. Guardar en Supabase (Excel)
        const { error } = await supabase.from('contactos').insert([datosEnvio]);

        if (error) {
            alert("Error al guardar: " + error.message);
            setLoading(false);
            return;
        }

        // 3. Generar link de WhatsApp
        const numeroWsp = "51977143046";
        const textoWsp = encodeURIComponent(
            `*SOLICITUD DE COTIZACIÓN - LUCERITO CLEAN* ✨\n\n` +
            ` *Cliente:* ${nombreCliente}\n` +
            ` *Celular:* ${telefonoCliente}\n` +
            ` *DNI/RUC:* ${dniRuc}\n\n` +
            ` *PEDIDO:* \n${carrito.map(item => `• ${item.nombre}: ${item.cantidad}`).join('\n')}\n\n` +
            ` *Comentarios:* ${mensajeExtra}\n\n` +
            `_Enviado desde el catálogo web_`
        );

        const wspLink = `https://wa.me/${numeroWsp}?text=${textoWsp}`;

        // 4. Mostrar éxito y redirigir
        setEnviado(true);

        // Abrimos WhatsApp
        window.open(wspLink, '_blank');

        setTimeout(() => {
            setEnviado(false);
            setCarrito([]);
            setIsOpen(false);
        }, 3000);

        setLoading(false);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div
                className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            />

            <div className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">

                <div className="p-5 md:p-6 border-b flex justify-between items-center bg-blue-50/50">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">🛒</span>
                        <h2 className="text-xl font-black text-blue-900 uppercase italic tracking-tighter">Tu Cotización</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-blue-900 font-bold text-xl hover:bg-red-50 hover:text-red-500 transition-all"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 font-sans text-left">
                    {carrito.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4 opacity-20">📦</div>
                            <p className="text-gray-400 font-black uppercase text-xs tracking-[0.2em]">Tu lista está vacía</p>
                        </div>
                    ) : enviado ? (
                        <div className="text-center py-16 animate-in zoom-in duration-500">
                            <div className="text-6xl mb-6">🚀</div>
                            <h3 className="text-3xl font-black text-green-600 uppercase tracking-tighter">¡LISTO!</h3>
                            <p className="text-gray-500 font-medium mt-2 leading-tight">Guardado en el sistema. Te estamos redirigiendo a WhatsApp para finalizar...</p>
                        </div>
                    ) : (
                        <>
                            <div className="space-y-3 text-left">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest ml-2">Productos en lista</p>
                                {carrito.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                                        <div className="flex flex-col text-left">
                                            <span className="font-black text-blue-900 text-sm uppercase tracking-tight">{item.nombre}</span>
                                            <button
                                                onClick={() => eliminar(index)}
                                                className="text-[9px] text-red-500 font-black uppercase mt-1 tracking-widest text-left"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-2 bg-blue-50 p-1 rounded-2xl">
                                            <button onClick={() => restar(index)} className="w-8 h-8 flex items-center justify-center font-black text-blue-600 bg-white rounded-xl shadow-sm active:scale-90">-</button>
                                            <span className="font-black text-blue-950 w-8 text-center text-sm">{item.cantidad}</span>
                                            <button onClick={() => sumar(index)} className="w-8 h-8 flex items-center justify-center font-black text-blue-600 bg-white rounded-xl shadow-sm active:scale-90">+</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleEnviar} className="mt-10 pt-8 border-t border-dashed border-gray-200 space-y-4 pb-10">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest ml-2 italic text-left">Tus Datos</h4>

                                <div className="space-y-4 text-left">
                                    <input name="nombre" required placeholder="Nombre o Razón Social" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-medium transition-all" />
                                    <input name="telefono" required type="tel" placeholder="WhatsApp / Celular" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-medium transition-all" />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <select name="tipo_doc" className="p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-500 outline-none font-black text-gray-500 uppercase text-xs">
                                            <option value="DNI">DNI</option>
                                            <option value="RUC">RUC</option>
                                        </select>
                                        <input name="num_doc" required placeholder="N° Documento" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-medium transition-all" />
                                    </div>

                                    <textarea name="mensaje" rows={2} placeholder="¿Alguna fragancia o detalle extra?" className="w-full p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none font-medium transition-all"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-5 rounded-[2rem] font-black text-white uppercase tracking-[0.2em] text-xs shadow-xl transition-all active:scale-95 ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700 shadow-green-200'}`}
                                >
                                    {loading ? 'SINCRONIZANDO...' : '📱 ENVIAR Y CHATEAR'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}