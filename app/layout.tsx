import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-gray-50 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://luceritoclean.com'), // Agrega esto
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
  
  openGraph: {
    title: 'Lucerito Clean - Expertos en combatir la suciedad',
    description: 'Fórmulas potentes para que tu casa brille como nunca. Calidad garantizada.',
    url: 'https://luceritoclean.com',
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
  // AQUÍ ESTÁ EL CAMBIO IMPORTANTE:
  verification: {
    google: '9O2ZSlYnHOi3VXGvXKSWNdiaQs3WbK_ADvjMJHFjh4k',
  },
    alternates: {
    canonical: 'https://luceritoclean.com',
  },
}