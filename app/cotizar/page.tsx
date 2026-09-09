import type { Metadata } from 'next'
import { QuoteForm } from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Cotiza tu vuelo | Smart Travel Events',
}

export default function CotizarPage() {
  return (
    <section className="container page-hero">
      <h1>Cotiza el vuelo</h1>
      <p>Estamos atentos para responder a la brevedad posible</p>
      <QuoteForm />
    </section>
  )
}
