'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-[100] border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

                {/* === LOGO === */}
                <div className="flex-shrink-0">
                    <Link href="/inicio" className="group flex items-center gap-3">
                        <img
                            src="/icon.png"
                            alt="Logo de Lucerito Clean"
                            className="h-10 md:h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                </div>

                {/* ENLACES DESKTOP (Ocultos en móvil) */}
                <div className="hidden md:flex items-center space-x-1 bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
                    <Link href="/inicio" className="px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest text-gray-600 hover:bg-white hover:text-cyan-600 hover:shadow-sm transition-all duration-300">Inicio</Link>
                    <Link href="/productos" className="px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest text-gray-600 hover:bg-white hover:text-cyan-600 hover:shadow-sm transition-all duration-300">Productos</Link>
                    <Link href="/nosotros" className="px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest text-gray-600 hover:bg-white hover:text-cyan-600 hover:shadow-sm transition-all duration-300">Nosotros</Link>
                    <Link href="/contactanos" className="px-5 py-2.5 rounded-full text-[13px] font-black uppercase tracking-widest text-gray-600 hover:bg-white hover:text-cyan-600 hover:shadow-sm transition-all duration-300">Contáctanos</Link>
                </div>

                {/* BOTÓN RÁPIDO Y MENÚ HAMBURGUESA */}
                <div className="flex items-center gap-3">
                    <Link
                        href="https://wa.me/977143046"
                        className="hidden sm:flex bg-gradient-to-r from-blue-900 to-blue-700 text-white font-black px-6 py-3 rounded-2xl text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-lg shadow-blue-100"
                    >
                        ¡CONVERSEMOS!
                    </Link>

                    {/* Botón Hamburguesa Móvil */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-xl bg-gray-50 text-blue-950 focus:outline-none"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-end">
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 -rotate-45' : 'w-6'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 rotate-45' : 'w-2'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* === MENÚ DESPLEGABLE MÓVIL === */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-b border-gray-100 ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-8 flex flex-col gap-4">
                    <Link onClick={() => setIsMenuOpen(false)} href="/inicio" className="text-sm font-black uppercase tracking-[0.2em] text-blue-950 border-b border-gray-50 pb-2">Inicio</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/productos" className="text-sm font-black uppercase tracking-[0.2em] text-blue-950 border-b border-gray-50 pb-2">Productos</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/nosotros" className="text-sm font-black uppercase tracking-[0.2em] text-blue-950 border-b border-gray-50 pb-2">Nosotros</Link>
                    <Link onClick={() => setIsMenuOpen(false)} href="/contactanos" className="text-sm font-black uppercase tracking-[0.2em] text-blue-950 border-b border-gray-50 pb-2">Contáctanos</Link>
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        href="https://wa.me/977143046"
                        className="bg-blue-600 text-white text-center font-black py-4 rounded-2xl uppercase text-[10px] tracking-widest mt-2"
                    >
                        CONVERSEMOS 📱
                    </Link>
                </div>
            </div>
        </nav>
    )
}