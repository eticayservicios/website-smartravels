import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Términos y Condiciones | Smart Travel Events' }

export default function Page() {
  return (
    <section className="container legal">
      <h1>Términos y Condiciones</h1>
      <p>
        Las cotizaciones y reservas están sujetas a disponibilidad de plazas, tarifas aéreas, tasas y
        condiciones de las compañías operadoras.
      </p>
      <p>Para confirmar un viaje, un asesor de Smart Travel Events le enviará las condiciones específicas.</p>
    </section>
  )
}
