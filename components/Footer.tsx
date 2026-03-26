import Link from 'next/link'

export default function Footer() {
    const anioActual = new Date().getFullYear()

    return (
        <footer className="bg-white mt-24 border-t border-gray-100 font-sans">
            {/* SECCIÓN SUPERIOR */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-gray-600">

                {/* COLUMNA 1: LOGO */}
                <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <Link href="/inicio" className="flex items-center gap-2 group">
                        <img
                            src="/icon.png"
                            alt="Logo Lucerito Clean"
                            className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed italic max-w-xs">
                        "Brillo impecable y pureza absoluta en cada rincón de tu hogar."
                    </p>
                </div>

                {/* COLUMNA 2: MENÚ RÁPIDO */}
                <div className="space-y-5 text-center sm:text-left">
                    <h4 className="font-black text-blue-900 uppercase tracking-widest text-[10px]">Nuestra Web</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        {[
                            { t: 'Productos', h: '/productos' },
                            { t: 'Nosotros', h: '/nosotros' },
                            { t: 'Contáctanos', h: '/contactanos' },
                        ].map(link => (
                            <li key={link.h}>
                                <Link href={link.h} className="hover:text-cyan-600 hover:translate-x-1 inline-block transition-all">
                                    {link.t}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMNA 3: AYUDA */}
                <div className="space-y-5 text-center sm:text-left">
                    <h4 className="font-black text-blue-900 uppercase tracking-widest text-[10px]">Soporte</h4>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><a href="#" className="hover:text-cyan-600 transition-colors">Preguntas Frecuentes</a></li>
                        <li><a href="#" className="hover:text-cyan-600 transition-colors">Términos de Servicio</a></li>
                        <li><a href="#" className="hover:text-cyan-600 transition-colors">Privacidad</a></li>
                    </ul>
                </div>

                {/* COLUMNA 4: CONTACTO */}
                <div className="space-y-6 text-center sm:text-left">
                    <h4 className="font-black text-blue-900 uppercase tracking-widest text-[10px]">Conecta</h4>
                    <p className="text-sm font-bold">📍 Ate, Lima - Perú</p>

                    <div className="flex gap-4 justify-center sm:justify-start">
                        {[
                            { i: '📱', l: 'https://wa.me/977143046' }, // Tu número correcto
                            { i: '📘', l: '#' },
                            { i: '📸', l: '#' },
                        ].map((red, idx) => (
                            <a
                                key={idx}
                                href={red.l}
                                target="_blank"
                                className="text-xl bg-gray-50 h-12 w-12 flex items-center justify-center rounded-2xl border border-gray-100 shadow-sm hover:bg-blue-50 hover:scale-110 transition-all active:scale-90"
                            >
                                {red.i}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECCIÓN INFERIOR: Copyright */}
            <div className="bg-blue-950 text-white/70 py-8 px-6 sm:rounded-t-[4rem] mt-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] gap-6 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src="/icon.png" alt="Lucerito" className="h-6 w-auto brightness-0 invert opacity-50" />
                        <p className="font-black uppercase tracking-[0.2em]">
                            © {anioActual} Lucerito Clean S.A.C. - Todos los derechos reservados.
                        </p>
                    </div>
                    <p className="font-black uppercase tracking-[0.2em] text-white/40">
                        Hecho por <span className="text-cyan-400">Jeyson Coronado</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}