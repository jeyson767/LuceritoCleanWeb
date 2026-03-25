import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* === LOGO: Aquí lo integramos === */}
                <div className="text-3xl font-extrabold tracking-tighter text-blue-900">
                    <Link href="/inicio" className="group flex items-center gap-3">
                        {/* Llama a la imagen desde la carpeta public */}
                        <img
                            src="/icon.png"
                            alt="Logo de Lucerito Clean"
                            className="h-10 w-auto group-hover:scale-105 transition-transform" // Controla el tamaño y añade animación
                        />
                        {/* Si quieres, puedes mantener el texto o quitarlo. Lo dejaremos por si acaso. */}
                        {/* <span>Lucerito<span className="text-cyan-500">Clean</span></span> */}
                    </Link>
                </div>

                {/* ENLACES: Sin cambios */}
                <div className="hidden md:flex items-center space-x-2 bg-gray-50 p-1.5 rounded-full border border-gray-100">
                    <Link href="/inicio" className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 hover:bg-white hover:text-cyan-600 transition transition-colors transition-shadow transition-transform transition-all duration-300">Inicio</Link>
                    <Link href="/productos" className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 hover:bg-white hover:text-cyan-600 transition transition-colors transition-shadow transition-transform transition-all duration-300">Productos</Link>
                    <Link href="/nosotros" className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 hover:bg-white hover:text-cyan-600 transition transition-colors transition-shadow transition-transform transition-all duration-300">Nosotros</Link>
                    <Link href="/contactanos" className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-700 hover:bg-white hover:text-cyan-600 transition transition-colors transition-shadow transition-transform transition-all duration-300">Contáctanos</Link>
                </div>

                {/* BOTÓN RÁPIDO: Sin cambios */}
                <Link
                    href="https://wa.me/TUNUMERO"
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm hover:from-cyan-500 hover:to-blue-700 transition transition-colors transition-shadow transition-transform transition-all duration-300 shadow-lg shadow-cyan-100 hover:shadow-blue-200"
                >
                    Pedir Ahora
                </Link>
            </div>
        </nav>
    )
}