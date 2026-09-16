# ویژن — سفارش آنلاین غذا

Near-identical recreation of [sib360.com/online](https://sib360.com/online), rebuilt as a **Next.js 15** App Router site. Layout, sections, copy, product catalog, and visual language match the original; **only brand names** were swapped.

## Name replacements

| Original | New |
| --- | --- |
| سیب 360 / سیب۳۶۰ / پیتزا سیب 360 | **ویژن** / پیتزا ویژن |
| Sib360 / Sib 360 / sib360 | Vizhen / ویژن |
| سیب استار | ویژن استار |
| info@sib360.com | info@vizhen.com |
| Copyright © Sib360, Inc. | Copyright © Vizhen, Inc. |

Everything else (menu copy, ingredient lists, prices, category names, footer address/phones) is unchanged. Footer credit is now «ساخته شده توسط گروه طراحی ویژن». Words like **سیب زمینی** and the drink flavor **هی دی سیب** were **not** renamed — they are food names, not the brand.

The original logo is an image (`WebsiteLogo.jpg`). This project uses a **text/SVG placeholder** (`public/logo.svg` + the `Logo` component). Drop the official ویژن artwork in `public/logo.svg` when you have it.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (cart / auth / address)
- `next/image` for product photos (loaded from the original CDN)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The online ordering UI is the homepage and also lives at `/online`.

Optional env (see `.env.example`):

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deploy to Vercel

The app is a standard Next.js project (no custom server).

**CLI**

```bash
npm i -g vercel
vercel
```

**Dashboard:** import the Git repository in Vercel; framework preset is Next.js. `vercel.json` is included but defaults are enough.

Set `NEXT_PUBLIC_SITE_URL` to the production domain for Open Graph URLs.

## Notes / approximations

- Source site is a CMS (Haftsetare / Platform7) with proprietary CSS/JS. This clone reimplements the same screens in React rather than shipping that runtime.
- **Danstevis** display font is proprietary; Vazirmatn (Google Fonts) is used, matching the original body font **Vazir**.
- Live maps, SMS login, and payment gateway are not connected. Address picker, newsletter, login, and checkout POST to App Router handlers and keep state in the browser.
- Product images are remote (`sib360.com`). If that host blocks hotlinking later, download them into `public/products`.
- Branch list is the subset visible on the original directory page (the live map loads more dynamically).

## File tree

```
app/
  layout.tsx          # RTL shell, metadata, header/footer
  page.tsx            # /online clone (homepage)
  online/page.tsx
  branches/page.tsx
  b2b/page.tsx
  franchise/page.tsx
  m/page.tsx          # مشاهده منو
  star/page.tsx       # ویژن استار
  login/page.tsx
  product/[slug]/     # product detail
  api/newsletter|order|auth
components/           # header, cards, cart, address, auth
lib/products.ts       # 126-item catalog scraped from the original menu
public/logo.svg
```
