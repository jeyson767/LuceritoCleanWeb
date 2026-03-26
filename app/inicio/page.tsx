import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default async function InicioPage() {
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
        <div className="space-y-20 md:space-y-32 pb-20 overflow-x-hidden bg-gray-50">

            {/* 1. HERO BANNER */}
            <section className="relative min-h-[550px] md:h-[700px] flex items-center justify-center bg-blue-900 overflow-hidden rounded-b-[3.5rem] md:rounded-b-[6rem] shadow-2xl px-6 pb-20 md:pb-0">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
                        Lucerito <span className="text-cyan-400 block md:inline-block italic">Clean</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-blue-100 font-medium mb-12 italic max-w-xl mx-auto leading-tight">
                        "Brillo impecable y pureza absoluta en cada rincón de tu hogar."
                    </p>
                    <Link
                        href="/productos"
                        className="inline-block bg-cyan-500 text-white font-black px-12 py-5 rounded-2xl md:rounded-3xl hover:bg-white hover:text-blue-900 transition-all shadow-xl uppercase tracking-widest text-xs md:text-sm active:scale-95"
                    >
                        Ver Catálogo Real
                    </Link>
                </div>
            </section>

            {/* 2. PRODUCTOS DESTACADOS */}
            <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-0">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-blue-900 uppercase tracking-tighter leading-none">
                            Nuestros <br className="md:hidden" /> Favoritos
                        </h2>
                        <div className="h-2 w-24 bg-cyan-500 rounded-full mt-4"></div>
                    </div>
                    <Link href="/productos" className="text-cyan-600 font-black uppercase text-xs tracking-[0.2em] hover:text-blue-900 transition-colors border-b-2 border-cyan-100 pb-1">
                        Ver todo el catálogo →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {productos?.map((p) => (
                        <ProductCard
                            key={p.id}
                            producto={p}
                            /* 
                                ✅ SOLUCIÓN AL ERROR: 
                                Como estamos en Inicio (Server Component), 
                                redirigimos a Productos donde vive el carrito.
                            */
                           
                        />
                    ))}
                </div>
            </section>

            {/* 3. TESTIMONIOS */}
            <section className="bg-white py-24 md:py-32 border-y border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-cyan-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Lo que dicen en Lima</span>
                        <h2 className="text-5xl md:text-7xl font-black text-blue-900 mt-6 tracking-tighter uppercase leading-none">CLIENTES FELICES ✨</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {testimonios.map((t, idx) => (
                            <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] md:rounded-[4rem] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                <div className="text-cyan-400 text-7xl absolute -top-4 left-8 opacity-30 font-serif">“</div>
                                <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed mb-10 relative z-10 pt-4">
                                    {t.text}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center font-black text-white text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">{t.name}</h4>
                                        <span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA BANNER */}
            <section className="max-w-6xl mx-auto px-6 pb-12">
                <div className="bg-blue-900 p-12 md:p-24 rounded-[4rem] md:rounded-[6rem] text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-tight">
                            ¿Listo para que <br /> tu hogar brille?
                        </h2>
                        <Link
                            href="/contactanos"
                            className="inline-block bg-white text-blue-900 font-black px-14 py-6 rounded-2xl hover:bg-cyan-400 hover:text-white transition-all uppercase text-xs tracking-[0.3em] shadow-xl"
                        >
                            Hablemos ahora 📱
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}