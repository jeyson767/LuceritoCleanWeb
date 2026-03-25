import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default async function InicioPage() {
    // Traemos los primeros 3 productos habilitados para mostrar algo en el inicio
    const { data: productos } = await supabase
        .from('productos')
        .select('*')
        .eq('habilitado', true)
        .limit(3)

    const testimonios = [
        { name: "María Rosales", text: "El limpiatodo de Lucerito dejó mi piso como nuevo y el aroma dura horas. ¡Recomendadísimo!", role: "Hogar" },
        { name: "Juan Carlos", text: "Compré al por mayor para mi oficina y la calidad es industrial de verdad. Ahorro total.", role: "Empresa" },
        { name: "Lucía Méndez", text: "Me encanta que no daña las manos. Se nota que usan buenos insumos. ✨", role: "Cliente Fiel" }
    ]

    return (
        <div className="space-y-24 pb-20">

            {/* 1. HERO BANNER */}
            <section className="relative h-[550px] flex items-center justify-center bg-blue-900 overflow-hidden rounded-b-[4rem] shadow-2xl">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                        Lucerito <span className="text-cyan-400 block">Clean</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-light mb-10 italic max-w-xl mx-auto">
                        "Brillo impecable y pureza absoluta en cada rincón de tu hogar."
                    </p>
                    <Link
                        href="/productos"
                        className="bg-cyan-500 text-white font-black px-12 py-5 rounded-3xl hover:bg-white hover:text-blue-900 transition-all shadow-xl uppercase tracking-widest text-sm"
                    >
                        Ver Catálogo Real
                    </Link>
                </div>
            </section>

            {/* 2. SECCIÓN PRODUCTOS DESTACADOS */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter">Nuestros Favoritos</h2>
                    <Link href="/productos" className="text-cyan-600 font-bold hover:underline">Ver todo →</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {productos?.map((p) => (
                        <ProductCard key={p.id} producto={p} />
                    ))}
                </div>
            </section>

            {/* 3. SECCIÓN DE TESTIMONIOS (Innovadora) */}
            <section className="bg-blue-50 py-24 border-y border-blue-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-xs">Lo que dicen de nosotros</span>
                    <h2 className="text-5xl font-black text-blue-900 mt-4 mb-16 tracking-tighter">CLIENTES FELICES ✨</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonios.map((t, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-blue-100 relative group hover:shadow-xl transition-all duration-500">
                                <div className="text-cyan-400 text-5xl absolute -top-6 left-10">“</div>
                                <p className="text-gray-600 italic text-lg leading-relaxed mb-8 relative z-10">
                                    {t.text}
                                </p>
                                <div className="border-t border-gray-50 pt-6">
                                    <h4 className="font-black text-blue-900 uppercase text-sm tracking-widest">{t.name}</h4>
                                    <span className="text-xs text-cyan-500 font-bold">{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BANNER DE CIERRE (CTA) */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="bg-gradient-to-r from-blue-900 to-cyan-600 p-12 rounded-[4rem] text-center shadow-2xl">
                    <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">¿Listo para que tu negocio brille?</h2>
                    <p className="text-blue-100 mb-10 text-lg">Contáctanos hoy mismo para pedidos por mayor con precios especiales.</p>
                    <Link
                        href="/contactanos"
                        className="bg-white text-blue-900 font-black px-10 py-4 rounded-2xl hover:bg-yellow-400 transition-all uppercase text-sm tracking-widest shadow-lg"
                    >
                        Hablemos ahora
                    </Link>
                </div>
            </section>

        </div>
    )
}