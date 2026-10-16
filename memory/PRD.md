# Santos Barber — PRD

## Original problem statement
"desenvolva um site para um cabelereiro com a seguinte logo: o site deve seguir a mesma linha da logo, das ruas com efeitos visuais, falando horario, mostrando cortes local. falar pelo wpp"
Extra: "faça o melhor site de todos, com muito efeito visual"
Data: WhatsApp 85 9209-7166 · Rua Monteiro Lobato, 1621 · Seg–Sex 8h–19h · cortes/preços de exemplo · fotos de banco.

## Architecture
Static React landing page (no backend use). framer-motion + lenis. Components in /app/frontend/src/components/site/, content in /app/frontend/src/data.js. Images in /public/img (logo-t.png = transparent logo).

## Implemented (2026-10-16)
- Intro loader with logo blur reveal + curtain wipe
- Hero: 3D-tilt logo, spray-paint cursor trail canvas, spotlight, outline parallax text, masked headline
- Double slanted marquee, bento gallery (grayscale→color), price list w/ cursor image preview (each row opens WhatsApp)
- Hours with live open/closed (America/Fortaleza), map (dark) + directions, final CTA with parallax + magnetic WhatsApp button, floating WhatsApp FAB

## Backlog
- P0: real prices/cuts and owner photos
- P1: Instagram feed, depoimentos
- P2: online scheduling
