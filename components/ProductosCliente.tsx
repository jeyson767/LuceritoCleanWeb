'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'

export default function ProductosCliente() {
    const [todosLosProductos, setTodosLosProductos] = useState<any[]>([])
    const [productosFiltrados, setProductosFiltrados] = useState<any[]>([])
    const [busqueda, setBusqueda] = useState('')
    const [categoriaActiva, setCategoriaActiva] = useState('Todos')

    useEffect(() => {
        const fetchProductos = async () => {
            const { data } = await supabase.from('productos').select('*').eq('habilitado', true)
            if (data) {
                setTodosLosProductos(data)
                setProductosFiltrados(data)
            }
        }
        fetchProductos()
    }, [])

    useEffect(() => {
        let filtrados = todosLosProductos
        if (categoriaActiva !== 'Todos') {
            filtrados = filtrados.filter(p => p.categoria === categoriaActiva)
        }
        if (busqueda !== '') {
            filtrados = filtrados.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        }
        setProductosFiltrados(filtrados)
    }, [busqueda, categoriaActiva, todosLosProductos])

    const categorias = ['Todos', ...new Set(todosLosProductos.map(p => p.categoria))]

    return (
        <>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-12 space-y-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar producto (ej: Detergente)..."
                        className="w-full p-4 pl-12 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-cyan-400 outline-none text-gray-700 font-medium transition-all"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <span className="absolute left-4 top-4 text-xl">🔍</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${categoriaActiva === cat ? 'bg-blue-900 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500 hover:bg-cyan-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productosFiltrados.map((p) => (
                    <ProductCard key={p.id} producto={p} />
                ))}
            </div>

            {productosFiltrados.length === 0 && (
                <div className="text-center py-20 animate-pulse text-gray-400 font-bold uppercase tracking-widest">
                    No se encontraron productos ✨
                </div>
            )}
        </>
    )
}