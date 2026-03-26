import ProductosCliente from '@/components/ProductosCliente'
import CarritoCotizacion from '@/components/CarritoCotizacion'

export const metadata = {
    title: 'Detergentes y Productos de Limpieza | Catálogo Oficial',
    description: 'Elimina la suciedad difícil con Lucerito Clean. Detergentes, limpiatodos y desinfectantes de alta eficiencia en Lima. ¡Brillo real en cada rincón!',
    keywords: ['productos de limpieza hogar', 'detergentes Lima', 'suciedad difícil', 'Lucerito Clean Ate']
}

export default function ProductosPage() {
    return (
        /* px-4 para móvil, p-6 para desktop */
        <div className="relative max-w-7xl mx-auto px-4 md:p-6 min-h-screen font-sans">

            {/* Cabecera del Catálogo */}
            <header className="mb-8 md:mb-12 border-b border-gray-100 pb-8 animate-in fade-in duration-700">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        {/* Texto 4xl en móvil, 5xl en desktop para evitar desbordamiento */}
                        <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter leading-tight">
                            Catálogo <span className="text-cyan-500 underline decoration-yellow-400 decoration-wavy decoration-2 underline-offset-8">Lucerito</span>
                        </h1>
                        <p className="text-cyan-600 font-medium italic mt-3 text-base md:text-lg">
                            Fórmulas potentes contra la suciedad de tu hogar y empresa.
                        </p>
                    </div>

                    {/* Botón de Carrito Flotante (Contenedor alineado) */}
                    <div id="boton-carrito-contenedor" className="w-full md:w-auto flex justify-end"></div>
                </div>
            </header>

            {/* Mantenemos tu componente de lógica intacto */}
            <ProductosCliente />

            {/* Pie de página con espaciado móvil mejorado */}
            <footer className="mt-12 md:mt-16 text-center text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] py-8 border-t border-gray-100">
                📍 Ate, Lima - Perú | Lucerito Clean 2026
            </footer>
        </div>
    )
}