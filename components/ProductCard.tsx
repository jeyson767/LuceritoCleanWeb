interface ProductProps {
    producto: {
        id: string;
        nombre: string;
        descripcion: string;
        categoria: string;
        imagen_url: string;
        es_oferta?: boolean;
    }
}

export default function ProductCard({ producto }: ProductProps) {
    // 🛡️ Si el producto no carga bien, no rompe la página
    if (!producto) return null;

    return (
        <div className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="aspect-square bg-gray-50 relative flex items-center justify-center overflow-hidden">
                {producto.imagen_url ? (
                    <img
                        src={producto.imagen_url}
                        alt={`${producto.nombre} - Limpieza Lucerito Clean`}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="flex flex-col items-center text-gray-300">
                        <span className="text-5xl">🧴</span>
                        <p className="text-[10px] mt-2 font-black uppercase tracking-widest text-gray-400">Lucerito Clean</p>
                    </div>
                )}

                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-blue-800 text-[10px] font-black px-4 py-1.5 rounded-full shadow-sm uppercase">
                        {producto.categoria}
                    </span>
                </div>

                {producto.es_oferta && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-cyan-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                            OFERTA ✨
                        </span>
                    </div>
                )}
            </div>

            <div className="p-7">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                    {producto.nombre}
                </h2>
                <p className="text-gray-500 text-sm mt-3 line-clamp-2 min-h-[40px] leading-relaxed">
                    {producto.descripcion}
                </p>

                <div className="mt-8">
                    <a
                        href={`https://wa.me/977596410?text=Hola Lucerito Clean, me interesa: ${producto.nombre}`}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full bg-blue-950 text-white font-bold py-4 rounded-2xl hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-blue-100 uppercase text-xs tracking-widest"
                    >
                        <span>Consultar</span>
                    </a>
                </div>
            </div>
        </div>
    )
}