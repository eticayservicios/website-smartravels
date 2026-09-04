# website-smartravels

Infraestructura y contenido de **smartravelevents.com** en S3 + CloudFront.

El sitio se sirve como export estático de WordPress (HTML). PHP, MySQL y el admin quedan fuera de AWS.

## Quick path

1. En GitHub, confirma los secrets `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY` (Settings → Secrets and variables → Actions → Secrets).
2. Haz push a `main` o `prod`, o ejecuta **Actions → Deploy infrastructure → Run workflow**.
3. Revisa los outputs del stack: bucket S3 y dominio CloudFront (`*.cloudfront.net`).
4. El workflow **Deploy site content** sube `site/` (página de bienvenida) al bucket e invalida CloudFront.

## Qué crea el stack

| Recurso | Nombre |
|---|---|
| Stack CloudFormation | `website-smartravels-prod` |
| Bucket S3 | `smartravelevents-com-prod` |
| CloudFront | distribución con OAC |
| Región | `us-east-1` |

```text
Internet → CloudFront (HTTPS) → OAC → S3 privado
```

Sin hosted zone ni certificado configurados, el sitio queda en `https://xxxx.cloudfront.net`. El dominio `smartravelevents.com` se conecta después añadiendo DNS y certificado ACM.

## Secrets de GitHub

Solo necesitas estos dos **repository secrets**:

| Secret | Uso |
|---|---|
| `AWS_ACCESS_KEY_ID` | Credencial IAM |
| `AWS_SECRET_ACCESS_KEY` | Credencial IAM |

En GitHub Actions, Secrets y Variables no son lo mismo:

| Dónde lo guardaste | Cómo lo lee el workflow |
|---|---|
| **Secrets** | `${{ secrets.AWS_ACCESS_KEY_ID }}` (esto es lo que usa el repo) |
| **Variables** | `${{ vars.AWS_ACCESS_KEY_ID }}` |

Si los guardaste dentro de un **Environment** de GitHub (por ejemplo `production`), añade esto al job en `.github/workflows/deploy-infra.yml`:

```yaml
jobs:
  deploy:
    environment: production
```

## Deploy local (opcional)

```bash
sam validate --lint -t templates/template.yaml

sam deploy \
  --template-file templates/template.yaml \
  --stack-name website-smartravels-prod \
  --region us-east-1 \
  --capabilities CAPABILITY_IAM \
  --resolve-s3
```

## Contenido actual

`site/index.html` muestra **Hola, bienvenido a Smart Travel Events**. `site/404.html` cubre rutas inexistentes.

Cuando tengas el export de WordPress, reemplaza el contenido de `site/` y haz push a `main` o `prod`.

## Permisos IAM mínimos

El usuario IAM necesita, como mínimo:

* CloudFormation sobre el stack `website-smartravels-prod`
* S3 (bucket del sitio + bucket temporal de SAM con `--resolve-s3`)
* CloudFront (distribución, OAC, functions)
* IAM (crear roles que pida CloudFormation)
