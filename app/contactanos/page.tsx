'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactoPage() {
    const [loading, setLoading] = useState(false)
    const [enviado, setEnviado] = useState(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)

        const datosForm = {
            nombre: formData.get('nombre'),
            telefono: formData.get('telefono'),
            tipo_documento: formData.get('tipo_doc'),
            numero_documento: formData.get('num_doc'),
            producto: formData.get('producto'),
            mensaje: formData.get('mensaje'),
            tipo_contacto: 'FORMULARIO',
            fecha: new Date().toISOString()
        }

        const { error } = await supabase
            .from('contactos')
            .insert([datosForm])

        if (error) {
            console.error('Error Supabase:', error)
            alert('Hubo un problema al enviar tu mensaje. Por favor, intenta por WhatsApp.')
        } else {
            setEnviado(true)
        }
        setLoading(false)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 md:px-6 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Cabecera con Brillo Animado */}
                <header className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 shadow-sm">
                        Atención Inmediata
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-blue-900 tracking-tighter uppercase leading-tight">
                        ¿Cómo podemos <span className="text-cyan-500 underline decoration-yellow-400 decoration-wavy decoration-2 underline-offset-8">ayudarte?</span>
                    </h1>
                    <p className="text-gray-500 mt-8 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        En Lucerito Clean estamos listos para atender tus pedidos por mayor o consultas industriales.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* COLUMNA 1: CANALES DIRECTOS (Didácticos) */}
                    <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
                        <div className="group bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 hover:border-green-400 transition-all duration-300">
                            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📱</div>
                            <h3 className="font-black text-blue-900 text-2xl uppercase tracking-tighter">WhatsApp Directo</h3>
                            <p className="text-gray-500 text-sm mt-2 mb-6 leading-relaxed">Pedidos inmediatos para <span className="font-bold text-blue-900">Lima y Ate.</span></p>
                            <a
                                href="https://wa.me/977143046"
                                className="inline-block w-full text-center bg-green-500 text-white font-black py-4 rounded-2xl hover:bg-green-600 transition shadow-lg shadow-green-200 uppercase text-xs tracking-widest"
                            >
                                Chatea con nosotros
                            </a>
                        </div>

                        <div className="bg-blue-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-cyan-500/40 transition-colors"></div>
                            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6">📧</div>
                            <h3 className="font-black text-cyan-400 text-2xl uppercase tracking-tighter">Cotizaciones</h3>
                            <p className="text-blue-100 text-sm mt-2 mb-4">Para pedidos de gran volumen:</p>
                            <span className="font-black text-lg break-all border-b-2 border-cyan-500 pb-1">luceritoclean@gmail.com</span>
                        </div>
                    </div>

                    {/* COLUMNA 2-3: FORMULARIO CONECTADO */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-14 rounded-[3.5rem] shadow-[0_20px_50px_rgba(30,58,138,0.1)] border border-gray-50 order-1 lg:order-2">
                        {enviado ? (
                            <div className="text-center py-20 animate-in zoom-in duration-500">
                                <div className="text-7xl mb-8">✨</div>
                                <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tighter italic">¡PEDIDO RECIBIDO!</h2>
                                <p className="text-gray-500 text-lg font-medium">Tu solicitud ya está en nuestro sistema central.</p>
                                <button
                                    onClick={() => setEnviado(false)}
                                    className="mt-12 text-cyan-600 font-black uppercase tracking-widest text-xs border-b-2 border-cyan-600 pb-1 hover:text-blue-900 hover:border-blue-900 transition-all"
                                >
                                    Realizar otra consulta
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <h2 className="text-3xl font-black text-blue-950 mb-10 tracking-tight flex items-center">
                                    Déjanos tus datos <span className="ml-3 text-cyan-500 text-4xl">✨</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest ml-1">Tu Nombre</label>
                                        <input name="nombre" required type="text" placeholder="Ingresa tu nombre" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-cyan-400 focus:bg-white transition-all outline-none font-medium shadow-inner" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest ml-1">Tu Teléfono</label>
                                        <input name="telefono" required type="tel" placeholder="ingrese numero cel" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-cyan-400 focus:bg-white transition-all outline-none font-medium shadow-inner" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest ml-1">Tipo de Doc.</label>
                                        <select name="tipo_doc" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-cyan-400 focus:bg-white outline-none font-bold text-gray-500 cursor-pointer shadow-inner">
                                            <option value="DNI">DNI (Persona)</option>
                                            <option value="RUC">RUC (Empresa)</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest ml-1">Número de Doc.</label>
                                        <input name="num_doc" required type="text" placeholder="DNI o RUC..." className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-cyan-400 focus:bg-white transition-all outline-none font-medium shadow-inner" />
                                    </div>
                                </div>

                                

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-blue-900 uppercase tracking-widest ml-1">Mensaje o Pedido</label>
                                    <textarea name="mensaje" required rows={4} placeholder="Cuéntanos... ¿que necesitas?" className="w-full p-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-cyan-400 focus:bg-white transition-all outline-none font-medium shadow-inner"></textarea>
                                </div>

                                <button
                                    disabled={loading}
                                    className={`w-full text-white font-black py-6 rounded-[2rem] transition-all uppercase tracking-[0.2em] text-xs shadow-2xl ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-950 via-blue-800 to-blue-900 hover:scale-[1.02] hover:shadow-blue-200 active:scale-95 shadow-blue-900/10'}`}
                                >
                                    {loading ? 'Procesando Brillo...' : '🚀 Enviar Mensaje Brillante'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <footer className="mt-20 text-center">
                    <div className="h-1 w-24 bg-cyan-200 mx-auto rounded-full mb-8"></div>
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.5em]">
                        📍 Ate, Lima - Perú | Lucerito Clean 2026
                    </div>
                </footer>
            </div>
        </main>
    )
}