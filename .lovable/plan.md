## Changes

1. **WhatsApp number** — In `src/routes/index.tsx`, update the `WHATSAPP_NUMBER` constant (and any hardcoded links) so every WhatsApp CTA (header, hero, floating button, pricing cards, how-it-works, final CTA, footer) points to:
   `https://wa.me/94711899833?text=Hi%20Paywiz%20Global%2C%20I%27m%20interested%20in%20your%20services`

2. **Footer Contact section** (in `src/routes/index.tsx`):
   - WhatsApp displayed as `+94 71 189 9833`
   - Email changed to `contact@paywiz.work`
   - Remove the "Colombo, Sri Lanka" address row entirely and tighten spacing so the section stays balanced.

3. **Favicon** — Download the provided image to `public/favicon.png`, delete the old `public/favicon.ico`, and update the `links` array in `src/routes/__root.tsx` to reference `/favicon.png` with `type: "image/png"`. Also mirror as `apple-touch-icon`.

## Verification

- Grep the repo for any remaining `94770000000` / old wa.me links to ensure all are replaced.
- Confirm build passes.
