/** @type {import('next').Config} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://tftugliipzurpcspxokw.supabase.co', // Reemplaza con tu URL de Supabase
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig