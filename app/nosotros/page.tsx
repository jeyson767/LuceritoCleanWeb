
export const metadata = {
    title: 'Sobre Lucerito Clean | Fabricación Nacional',
    description: 'Conoce la historia detrás de Lucerito Clean. Empresa peruana dedicada a crear productos que eliminan la suciedad y protegen tu hogar.',
}

export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* SECCIÓN HERO: Identidad Lucerito */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-blue-900">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/bubbles.png')]"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-6xl font-black text-white mb-4 tracking-tighter uppercase">Nuestra Historia</h1>
                    <p className="text-cyan-300 text-2xl font-light italic">"Brillo que transforma hogares"</p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* BLOQUE 1: ¿Quiénes somos? */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-6">
                        <span className="text-blue-600 font-black uppercase tracking-widest text-sm italic">Especialistas en Limpieza</span>
                        <h2 className="text-4xl font-black text-gray-900 leading-tight">
                            En <span className="text-cyan-500 underline decoration-yellow-400 decoration-wavy">Lucerito Clean</span>, la pureza es nuestra pasión.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Nacimos con un objetivo claro: ofrecer productos de limpieza que realmente funcionen, sin complicaciones. No somos solo una marca de químicos; somos aliados de quienes buscan un ambiente impecable y saludable.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed font-medium">
                            Cada fórmula de Lucerito Clean ha sido probada para garantizar que el brillo no sea solo superficial, sino el reflejo de una limpieza profunda.
                        </p>
                    </div>

                    {/* CONTENEDOR DE IMAGEN (Aquí pusimos hombre.png) */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-cyan-100 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-inner"></div>
                        <div className="relative bg-white h-[450px] rounded-[2.5rem] shadow-2xl overflow-hidden border-8 border-white">
                            <img
                                src="/hombre.png"
                                alt="Personal de Lucerito Clean"
                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </section>

                {/* BLOQUE 2: Misión y Visión (Tarjetas Flotantes) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-12 rounded-[3rem] border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-6">🚀</div>
                        <h3 className="text-3xl font-black text-blue-900 mb-4 tracking-tight uppercase">Nuestra Misión</h3>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                            Facilitar la vida de las familias y empresas peruanas mediante productos de limpieza innovadores, potentes y seguros, que devuelvan el brillo a cada superficie de manera inmediata.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-white p-12 rounded-[3rem] border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-6">👁️</div>
                        <h3 className="text-3xl font-black text-cyan-800 mb-4 tracking-tight uppercase">Nuestra Visión</h3>
                        <p className="text-gray-700 leading-relaxed text-lg italic">
                            Convertirnos en la marca referente de limpieza en el país, siendo reconocidos por la transparencia de nuestras fórmulas y el impecable resultado "Lucerito" en cada hogar.
                        </p>
                    </div>
                </section>

                {/* BLOQUE 3: Los 3 Pilares de Brillo */}
                <section className="text-center pt-10">
                    <h2 className="text-3xl font-black text-gray-900 mb-20 uppercase tracking-[0.3em]">¿Por qué elegirnos?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { t: 'Potencia Real', d: 'Eliminamos la suciedad más difícil sin dañar tus manos.', i: '💪' },
                            { t: 'Brillo Duradero', d: 'Nuestros productos crean una capa protectora que mantiene la limpieza.', i: '✨' },
                            { t: 'Compromiso Local', d: 'Orgullosamente fabricados pensando en las necesidades de nuestra gente.', i: '🇵🇪' },
                        ].map((item, idx) => (
                            <div key={idx} className="group cursor-default">
                                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">{item.i}</div>
                                <h4 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tighter">{item.t}</h4>
                                <p className="text-gray-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}