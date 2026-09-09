import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Política de Cookies | Smart Travel Events' }

export default function Page() {
  return (
    <section className="container legal">
      <h1>Política de Cookies</h1>
      <p>
        Este sitio estático no utiliza cookies de seguimiento. Si su navegador almacena datos locales, puede
        borrarlos desde la configuración del propio navegador.
      </p>
    </section>
  )
}
