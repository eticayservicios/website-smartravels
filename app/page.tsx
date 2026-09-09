import Link from 'next/link'
import { Destinations } from '@/components/Destinations'
import { HeroCarousel } from '@/components/HeroCarousel'
import { INSTAGRAM, WHATSAPP } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      <section className="container hero">
        <div>
          <h1>Reserva tu vuelo con todas las facilidades y visita a tu familia</h1>
          <p>
            Amplía oferta de vuelos con salidas desde los principales aeropuertos de Europa con destino a
            Latinoamérica (y viceversa) a lo largo de todo el año.
          </p>
          <a className="btn btn-sky" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Quiero llamar
          </a>
        </div>
        <HeroCarousel />
      </section>

      <section className="container quick-actions">
        <a className="btn btn-navy" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          Contacta a un asesor
        </a>
        <Link className="btn btn-navy" href="/visitanos/">
          Visítanos
        </Link>
        <Link className="btn btn-navy" href="/cotizar/">
          Cotiza un vuelo
        </Link>
      </section>

      <section className="container section">
        <h2 className="section-title">
          Financiación del 100% hasta 12 meses, viaje ahora y pague más tarde en cómodos plazos
        </h2>
        <p className="section-sub">Plan de viaje a medida sin compromiso</p>
        <Destinations />
      </section>

      <section className="container section">
        <p className="intro">
          Somos una agencia de viajes, turismo y eventos especializada en vuelos transatlánticos desde la
          mayoría de aeropuertos europeos a cualquier destino de Latinoamérica y viceversa.
        </p>
        <div className="features">
          <article className="feature">
            <div className="icon">☎</div>
            <h4>Seguimiento Telefónico</h4>
            <p>
              En horario comercial amplio y por escrito por correo electrónico o WhatsApp ya sea para una
              atención rutinaria o de emergencia
            </p>
            <a className="btn btn-navy" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </article>
          <article className="feature">
            <div className="icon">✈</div>
            <h4>Gestión de Reservas</h4>
            <p>
              De estancias turísticas y de trabajo desde un fin de semana hasta todo un año en alojamientos
              adaptados
            </p>
            <Link className="btn btn-navy" href="/cotizar/">
              Reservar
            </Link>
          </article>
          <article className="feature">
            <div className="icon">♥</div>
            <h4>Somos su Agencia de Viajes de Confianza</h4>
            <p>Atención personalizada cuidando cada detalle y respetando la privacidad de sus datos</p>
            <a className="btn btn-navy" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              Contactar Asesor
            </a>
          </article>
          <article className="feature">
            <div className="icon">⌂</div>
            <h4>Hablemos Personalmente</h4>
            <p>
              Puede visitarnos en nuestra oficina donde lo atenderemos personalmente, con cita previa, las
              veces que necesite
            </p>
            <Link className="btn btn-navy" href="/visitanos/">
              Agendar Visita
            </Link>
          </article>
        </div>
        <p className="quote">
          Nos esforzamos para que en nuestras redes sociales y página web estén actualizados todos nuestros
          servicios, diferentes ofertas de turismo y cualquier información relevante que precises.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a className="btn btn-navy" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ width: 'auto', paddingInline: '2rem' }}>
            Síguenos
          </a>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Equipo Smart Travel And Events</h2>
        <p className="section-sub">Ayúdanos a mejorar y a crecer juntos, envíanos tu sugerencia u observación.</p>
        <div style={{ textAlign: 'center' }}>
          <Link className="btn btn-navy" href="/sugerencia/" style={{ width: 'auto', paddingInline: '2rem' }}>
            Enviar sugerencia
          </Link>
        </div>
      </section>

      <section className="cta-band">
        <h2>Organizamos tu viaje</h2>
        <p>Si eres un viajero individual o un grupo de hasta 100 personas</p>
        <Link className="btn btn-sky" href="/cotizar/">
          Cotizar plan de viaje
        </Link>
      </section>

      <section className="container disclaimer">
        <h2>Precios finales: tasas, gastos de gestión y cargos del operador incluidos</h2>
        <p>
          Los precios mostrados corresponden a búsquedas de vuelos realizadas recientemente por clientes. Estos
          precios pueden cambiar según la disponibilidad de plazas, posibles variaciones de tarifas, tasas y
          otros suplementos en el momento de realizar la consulta.
        </p>
      </section>
    </>
  )
}
