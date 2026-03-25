export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Cabecera con Brillo */}
                <header className="text-center mb-20">
                    <span className="text-cyan-600 font-black uppercase tracking-[0.3em] text-sm">Atención Inmediata</span>
                    <h1 className="text-5xl font-black text-blue-900 mt-4 tracking-tighter uppercase">
                        ¿Cómo podemos <span className="text-cyan-500 underline decoration-yellow-400 decoration-wavy">ayudarte?</span>
                    </h1>
                    <p className="text-gray-500 mt-6 text-xl max-w-2xl mx-auto">
                        En Lucerito Clean estamos listos para atender tus pedidos por mayor o consultas específicas.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* TARJETAS DE CANALES DIRECTOS (Columna 1) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition">
                            <div className="text-3xl mb-4">📱</div>
                            <h3 className="font-black text-blue-900 text-xl uppercase tracking-tighter">WhatsApp Directo</h3>
                            <p className="text-gray-500 text-sm mt-2 mb-6">Consultas rápidas y pedidos inmediatos.</p>
                            <a
                                href="https://wa.me/977143046"
                                className="inline-block w-full text-center bg-green-500 text-white font-bold py-4 rounded-2xl hover:bg-green-600 transition shadow-lg shadow-green-100"
                            >
                                Chatea con nosotros
                            </a>
                        </div>

                        <div className="bg-blue-900 p-8 rounded-[2rem] text-white shadow-xl">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="font-black text-cyan-400 text-xl uppercase tracking-tighter">Correo Corporativo</h3>
                            <p className="text-blue-200 text-sm mt-2 mb-2">Para cotizaciones industriales:</p>
                            <span className="font-bold text-lg break-all">ventas@luceritoclean.com</span>
                        </div>
                    </div>

                    {/* FORMULARIO DE MENSAJE (Columna 2 y 3) */}
                    <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-gray-50">
                        <h2 className="text-3xl font-black text-gray-800 mb-8 tracking-tight">Déjanos tus datos ✨</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-blue-900 uppercase ml-2">Tu Nombre</label>
                                    <input type="text" placeholder="Ej. Jeyson..." className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-cyan-100 transition-all outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-blue-900 uppercase ml-2">Tu Teléfono</label>
                                    <input type="tel" placeholder="987 654 321" className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-cyan-100 transition-all outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-blue-900 uppercase ml-2">¿En qué producto estás interesado?</label>
                                <select className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-cyan-100 transition-all outline-none text-gray-500">
                                    <option>Limpiatodo Multiuso</option>
                                    <option>Desinfectante Industrial</option>
                                    <option>Detergente Lucerito</option>
                                    <option>Otros</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-blue-900 uppercase ml-2">Mensaje o Pedido</label>
                                <textarea rows={4} placeholder="Cuéntanos cuántas unidades necesitas o tus dudas..." className="w-full p-4 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-cyan-100 transition-all outline-none"></textarea>
                            </div>

                            <button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-black py-5 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest text-sm">
                                Enviar Mensaje Brillante
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer de Ubicación Sutil */}
                <div className="mt-16 text-center text-gray-400 text-xs font-bold uppercase tracking-[0.5em]">
                    📍 Ate, Lima - Perú | Lucerito Clean 2026
                </div>
            </div>
        </main>
    )
}