# website-smartravels

Sitio estático Next.js de Smart Travel Events, servido en S3 + CloudFront.

El dominio de CloudFront es **smartravelevents.smartravelevents.com**. El WordPress de `www.smartravelevents.com` no se toca.

## Quick path

1. Confirma en GitHub los secrets `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`.
2. Opcional: secrets `CERTIFICATE_ARN` y `HOSTED_ZONE_ID`. Si no hay certificado, el stack **crea** uno en ACM (`us-east-1`) para `smartravelevents.smartravelevents.com` y `www.smartravelevents.smartravelevents.com`, validado por DNS en Route 53.
3. Push a `prod` o ejecuta **Actions → Deploy infrastructure**.
4. El stack crea en Route 53 los alias de ambos hostnames hacia CloudFront.
5. Ejecuta **Deploy site content** para publicar el export de Next.js.

## Qué crea el stack

| Recurso | Nombre |
|---|---|
| Stack | `website-smartravels-prod` |
| Bucket S3 | `smartravelevents-com-prod` |
| Alias CloudFront | `smartravelevents.smartravelevents.com` y `www.smartravelevents.smartravelevents.com` |
| Región | `us-east-1` |

```text
Internet → CloudFront (HTTPS + certificado ACM) → OAC → S3 privado
```

## DNS (Route 53)

El deploy busca la hosted zone `smartravelevents.com`. Si no existe un certificado ACM, CloudFormation crea uno y Route 53 valida el DNS.

| Registro | Tipo | Destino |
|---|---|---|
| `smartravelevents.smartravelevents.com` | A + AAAA (alias) | CloudFront |
| `www.smartravelevents.smartravelevents.com` | A + AAAA (alias) | CloudFront |

El certificado cubre ambos nombres. CloudFront redirige `www` al hostname sin www.

## Sitio Next.js

```bash
npm install
npm run dev
npm run build   # genera out/ para S3
```

Rutas: `/`, `/cotizar/`, `/visitanos/`, `/sugerencia/` y páginas legales. Los formularios abren el correo hacia `info@smartravelevents.com` (el sitio es estático, sin PHP).
