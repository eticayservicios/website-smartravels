# website-smartravels

Sitio estático Next.js de Smart Travel Events, servido en S3 + CloudFront.

El dominio de CloudFront es **smartravelevents.smartravelevents.com**. El WordPress de `www.smartravelevents.com` no se toca.

## Quick path

1. Confirma en GitHub los secrets `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`.
2. Opcional: secrets `CERTIFICATE_ARN` y `HOSTED_ZONE_ID`. Si no están, el workflow busca el certificado ACM y la hosted zone `smartravelevents.com`.
3. Push a `prod` o ejecuta **Actions → Deploy infrastructure**.
4. El stack crea en Route 53 el alias `smartravelevents.smartravelevents.com` → CloudFront (equivalente al CNAME).
5. Ejecuta **Deploy site content** para publicar el export de Next.js.

## Qué crea el stack

| Recurso | Nombre |
|---|---|
| Stack | `website-smartravels-prod` |
| Bucket S3 | `smartravelevents-com-prod` |
| Alias CloudFront | `smartravelevents.smartravelevents.com` |
| Región | `us-east-1` |

```text
Internet → CloudFront (HTTPS + certificado ACM) → OAC → S3 privado
```

## DNS (Route 53)

El deploy busca la hosted zone `smartravelevents.com` y crea un **alias A/AAAA** hacia CloudFront. En Route 53 ese es el equivalente correcto a un CNAME para CloudFront.

| Registro | Tipo | Destino |
|---|---|---|
| `smartravelevents.smartravelevents.com` | A + AAAA (alias) | distribución CloudFront |

Hace falta que esa hosted zone exista en la misma cuenta AWS. El certificado ACM debe estar **emitido en us-east-1** e incluir ese hostname o `*.smartravelevents.com`.

## Sitio Next.js

```bash
npm install
npm run dev
npm run build   # genera out/ para S3
```

Rutas: `/`, `/cotizar/`, `/visitanos/`, `/sugerencia/` y páginas legales. Los formularios abren el correo hacia `info@smartravelevents.com` (el sitio es estático, sin PHP).
