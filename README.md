# Norfolk Risk – D&O Proposal App

> Aplicación web profesional para visualizar y exportar propuestas comerciales de
> Responsabilidad Civil para Directores y Gerentes (D&O).

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | React 19 + Vite |
| Estilos | Bootstrap 5 + CSS Modules |
| Routing | React Router DOM v7 |
| Iconos | React Icons |
| PDF | jsPDF + html2canvas |
| Estado global | Context API |

---

## Primeros pasos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo → http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # preview local del build
```

---

## Arquitectura

```
src/
├── assets/           # Imágenes y recursos estáticos
├── components/
│   ├── common/       # Navbar, Sidebar, Breadcrumbs, ScrollTopButton, Spinner
│   └── sections/     # 13 componentes — uno por sección de la propuesta
├── context/          # ProposalContext (estado global + datos de la propuesta)
├── hooks/            # useScrollSpy, useAnimateOnScroll
├── layouts/          # MainLayout (shell: Navbar + Sidebar + contenido)
├── pages/            # ProposalPage (orquesta las 13 secciones)
├── pdf/              # coverPage.js, pageDecorations.js
├── services/         # pdfService.js (generación PDF)
├── styles/           # global.css (variables CSS, animaciones)
└── utils/            # constants.js, formatters.js
```

## Datos de la propuesta

Todos los datos están en `src/context/ProposalContext.jsx → PROPOSAL_DATA`.
Para adaptar a otro cliente, modificar únicamente ese objeto.

## Identidad corporativa

- **Colores**: Navy `#0A1628` · Gold `#C8972A` · Blue `#1A3C6E`
- **Tipografía**: Inter (cuerpo) + Playfair Display (títulos)
- **Variables CSS**: `src/styles/global.css`

---

© 2026 Norfolk Risk Insurance Brokers — Uso interno
