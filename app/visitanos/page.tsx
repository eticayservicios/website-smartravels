import type { Metadata } from 'next'
import { MAPS_EMBED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Visítanos | Smart Travel Events',
}

export default function VisitanosPage() {
  return (
    <section className="container page-hero">
      <h1>Visítanos con cita previa</h1>
      <p>Para garantizar una mejor atención reserva una hora.</p>
      <div className="map">
        <iframe title="Oficina Smart Travel Events" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}
