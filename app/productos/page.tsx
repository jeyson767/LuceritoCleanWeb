import ProductosCliente from '@/components/ProductosCliente'

export const metadata = {
    title: 'Detergentes y Productos de Limpieza | Catálogo Oficial',
    description: 'Elimina la suciedad difícil con Lucerito Clean. Detergentes, limpiatodos y desinfectantes de alta eficiencia en Lima. ¡Brillo real en cada rincón!',
    keywords: ['productos de limpieza hogar', 'detergentes Lima', 'suciedad difícil', 'Lucerito Clean Ate']
}

export default function ProductosPage() {
    return (
        <div className="max-w-7xl mx-auto p-6 min-h-screen">
            <header className="mb-10">
                <h1 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">
                    Catálogo <span className="text-cyan-500">Lucerito</span>
                </h1>
                <p className="text-cyan-600 font-medium italic">Fórmulas potentes contra la suciedad del hogar.</p>
            </header>

            <ProductosCliente />
        </div>
    )
}