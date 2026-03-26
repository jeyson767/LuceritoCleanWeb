'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import ProductCard from '@/components/ProductCard'
import CarritoCotizacion from '@/components/CarritoCotizacion'

export default function ProductosCliente() {
    const [todosLosProductos, setTodosLosProductos] = useState<any[]>([])
    const [productosFiltrados, setProductosFiltrados] = useState<any[]>([])
    const [busqueda, setBusqueda] = useState('')
    const [categoriaActiva, setCategoriaActiva] = useState('Todos')

    // ESTADOS DEL CARRITO
    const [carrito, setCarrito] = useState<{ nombre: string, cantidad: number }[]>([])
    const [isCarritoOpen, setIsCarritoOpen] = useState(false)

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

    // LÓGICA PARA AÑADIR AL CARRITO
    const añadirAlCarrito = (nombre: string) => {
        setCarrito(prev => {
            const existe = prev.find(item => item.nombre === nombre);
            if (existe) {
                setIsCarritoOpen(true);
                return prev;
            }
            return [...prev, { nombre, cantidad: 1 }];
        });
        setIsCarritoOpen(true);
    };

    const categorias = ['Todos', ...new Set(todosLosProductos.map(p => p.categoria))]

    return (
        <div className="relative">
            {/* BOTÓN FLOTANTE DIDÁCTICO */}
            {carrito.length > 0 && (
                <button
                    onClick={() => setIsCarritoOpen(true)}
                    className="fixed bottom-8 right-8 z-[90] bg-blue-600 text-white p-4 rounded-full shadow-2xl animate-in fade-in zoom-in duration-300 flex items-center gap-3 hover:bg-blue-700 hover:scale-110 transition-all border-4 border-white"
                >
                    <span className="text-2xl">🛒</span>
                    <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-black shadow-sm">
                        {carrito.length}
                    </span>
                </button>
            )}

            {/* BUSCADOR Y CATEGORÍAS */}
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100 mb-12 space-y-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar producto (ej: Detergente)..."
                        className="w-full p-5 pl-14 rounded-2xl bg-gray-50 border-none focus:ring-4 focus:ring-cyan-100 outline-none text-gray-700 font-medium transition-all"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <span className="absolute left-5 top-5 text-xl opacity-50">🔍</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategoriaActiva(cat)}
                            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${categoriaActiva === cat
                                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-200 scale-105'
                                    : 'bg-gray-100 text-gray-400 hover:bg-cyan-50 hover:text-cyan-600'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* GRILLA DE PRODUCTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productosFiltrados.map((p) => (
                    <ProductCard
                        key={p.id}
                        producto={p}
                        onConsultar={() => añadirAlCarrito(p.nombre)}
                    />
                ))}
            </div>

            {/* ESTADO VACÍO */}
            {productosFiltrados.length === 0 && (
                <div className="text-center py-32 animate-pulse text-gray-300 font-black uppercase tracking-[0.5em] text-xs">
                    No se encontraron productos ✨
                </div>
            )}

            {/* COMPONENTE CARRITO */}
            <CarritoCotizacion
                isOpen={isCarritoOpen}
                setIsOpen={setIsCarritoOpen}
                carrito={carrito}
                setCarrito={setCarrito}
            />
        </div>
    )
}