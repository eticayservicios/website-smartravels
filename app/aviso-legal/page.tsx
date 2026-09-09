import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Aviso Legal | Smart Travel Events' }

export default function Page() {
  return (
    <section className="container legal">
      <h1>Aviso Legal</h1>
      <p>
        Smart Travel Events es una agencia de viajes, turismo y eventos con domicilio en Calle Campezo 3, Local
        5, 28022 Madrid, España.
      </p>
      <p>
        El contenido de este sitio tiene carácter informativo. Los precios y disponibilidad se confirman en el
        momento de la cotización.
      </p>
    </section>
  )
}
