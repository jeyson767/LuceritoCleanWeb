import './globals.css'
import Navbar from '@/components/Navbar' // Importas
import Footer from '@/components/Footer' // Importas

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    default: 'Lucerito Clean | Productos de Limpieza para Hogar y Empresa en Lima',
    template: '%s | Lucerito Clean'
  },
  description: 'Elimina la suciedad más difícil con Lucerito Clean. Venta de detergentes, limpiatodos y desinfectantes de alta eficiencia para el hogar e industrias en Ate y todo Lima. ¡Brillo real en cada rincón!',
  keywords: [
    'productos de limpieza hogar',
    'detergentes industriales',
    'limpiatodo para casa',
    'quitar suciedad difícil',
    'desinfectantes para pisos',
    'limpieza de cocina y baño',
    'insumos de limpieza por mayor',
    'Lucerito Clean Ate',
    'limpieza profunda hogar'
  ],
  authors: [{ name: 'Jeyson Coronado' }],
  alternates: {
    canonical: 'https://luceritoclean.vercel.app', // Cambia por tu dominio real cuando lo tengas
  },
  openGraph: {
    title: 'Lucerito Clean - Expertos en combatir la suciedad',
    description: 'Fórmulas potentes para que tu casa brille como nunca. Calidad garantizada.',
    url: 'https://luceritoclean.vercel.app',
    siteName: 'Lucerito Clean',
    images: [
      {
        url: '/LogoLuceritoClean.png',
        width: 1200,
        height: 630,
        alt: 'Productos de limpieza Lucerito Clean',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
}