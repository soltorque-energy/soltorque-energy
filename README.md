# SolTorque Energy B2B Website V1

Next.js + Tailwind CSS B2B independent site for SolTorque Energy Co., Ltd.

## Local Preview

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open:

```bash
http://localhost:3000
```

## Build Check

```bash
pnpm build
```

## Contact Settings

Update contact details in:

```bash
lib/site.ts
```

Replace `email` and `whatsappUrl` with the final business contact details before publishing.

## Google Analytics 4

Create a GA4 Web data stream, then set this environment variable in Netlify:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Tracked events:

- `page_view`
- `whatsapp_click`
- `catalog_download`

## Downloads

PDF downloads are stored in:

```bash
public/downloads/
```

Current files:

- `soltorque-short-product-range.pdf`
- `soltorque-full-catalog.pdf`

## Product Images

Product images are stored in:

```bash
public/images/products/
```

Images were cropped from the catalog pages where they appeared clean and free of visible supplier names, QR codes, phone numbers or watermarks.

## Deploy To Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Select the default Next.js framework settings.
4. Build command: `pnpm build`
5. Output directory: leave as default.
6. Add the final domain after deployment.

Before deploying, confirm the final WhatsApp URL and email address in `lib/site.ts`.
