import { redirect } from 'next/navigation'

export default function RootPage() {
  // Cuando alguien entre a http://localhost:3000/ lo manda directo a /inicio
  redirect('/inicio')
}