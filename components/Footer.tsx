import Link from 'next/link'

export default function Footer() {
    const anioActual = new Date().getFullYear()

    return (
        <footer className="bg-white mt-24 border-t border-gray-100">
            {/* SECCIÓN SUPERIOR: Contenido y Logo */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-600">

                {/* COLUMNA 1: LOGO Y FRASE */}
                <div className="md:col-span-1 space-y-4">
                    <Link href="/inicio" className="flex items-center gap-2 group">
                        {/* Aquí reutilizamos tu logo icon.png */}
                        <img
                            src="/icon.png"
                            alt="Logo Lucerito Clean"
                            className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed italic">
                        "Brillo impecable y pureza absoluta en cada rincón de tu hogar."
                    </p>
                </div>

                {/* COLUMNA 2: MENÚ RÁPIDO */}
                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Nuestra Web</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            { t: 'Productos', h: '/productos' },
                            { t: 'Nosotros', h: '/nosotros' },
                            { t: 'Contáctanos', h: '/contactanos' },
                        ].map(link => (
                            <li key={link.h}>
                                <Link href={link.h} className="hover:text-cyan-600 hover:pl-1 transition-all">
                                    {link.t}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMNA 3: SOPORTE (Opcional, pero profesional) */}
                <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Ayuda</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-cyan-600">Preguntas Frecuentes</a></li>
                        <li><a href="#" className="hover:text-cyan-600">Términos de Servicio</a></li>
                        <li><a href="#" className="hover:text-cyan-600">Política de Privacidad</a></li>
                    </ul>
                </div>

                {/* COLUMNA 4: CONTACTO RÁPIDO Y REDES */}
                <div className="space-y-5">
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs">Conecta</h4>
                    <p className="text-sm">📍 Ate, Lima - Perú</p>

                    {/* ICONOS DE REDES SOCIALES (¡Bonitos!) */}
                    <div className="flex gap-4 items-center">
                        {[
                            { i: '📱', l: 'https://wa.me/977596410' }, // WhatsApp
                            { i: '📘', l: '#' }, // Facebook (Pon tu link)
                            { i: '📸', l: '#' }, // Instagram (Pon tu link)
                        ].map((red, idx) => (
                            <a
                                key={idx}
                                href={red.l}
                                target="_blank"
                                className="text-2xl bg-gray-50 h-12 w-12 flex items-center justify-center rounded-full border border-gray-100 shadow-inner hover:bg-cyan-100 hover:scale-110 transition-all"
                            >
                                {red.i}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECCIÓN INFERIOR: Copyright (La Barra Azul Bonita) */}
            <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white/80 py-6 px-6 rounded-t-[3rem] shadow-inner mt-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-4">

                    <div className="flex items-center gap-3">
                        {/* Logo muy pequeño para el copyright, se ve muy premium */}
                        <img src="/icon.png" alt="Icono Lucerito" className="h-5 w-auto brightness-0 invert" />
                        <p>
                            © {anioActual} Lucerito Clean S.A.C. - Todos los derechos reservados.
                        </p>
                    </div>

                    <p className="font-medium">
                        Sitio Web hecho por <span className="text-cyan-300 font-bold uppercase tracking-wider">Jeyson Coronado</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}