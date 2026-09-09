import Link from 'next/link'
import { ADDRESS, EMAIL, PHONE, PHONE_HREF } from '@/lib/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src="/images/logo-blanco.png" alt="Smart Travel Events" width={180} />
        </div>
        <div>
          <h3>CONTÁCTANOS</h3>
          <p>{ADDRESS}</p>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            <a href={PHONE_HREF}>{PHONE}</a>
          </p>
        </div>
        <div>
          <h3>CONDICIONES LEGALES</h3>
          <ul>
            <li>
              <Link href="/aviso-legal/">Aviso Legal</Link>
            </li>
            <li>
              <Link href="/terminos-y-condiciones/">Términos y Condiciones</Link>
            </li>
            <li>
              <Link href="/politica-de-privacidad/">Política de Privacidad</Link>
            </li>
            <li>
              <Link href="/politica-de-cookies/">Política de Cookies</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
