import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Política de Privacidad | Smart Travel Events' }

export default function Page() {
  return (
    <section className="container legal">
      <h1>Política de Privacidad</h1>
      <p>
        Los datos que nos envíe a través de formularios o WhatsApp se usan únicamente para atender su
        cotización, reserva o consulta.
      </p>
      <p>
        Responsable: Smart Travel Events — Calle Campezo 3, Local 5, 28022 Madrid — info@smartravelevents.com
      </p>
    </section>
  )
}
