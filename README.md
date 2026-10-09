# nando-welcome

Portfólio de Fernando Rodrigues, construído a partir do design **Apple Glass Portfolio** (Google Stitch, design system *Luminescent Glass Studio*).

## Stack

- Next.js 16 (App Router, Cache Components) + React 19 + TypeScript
- Tailwind CSS 3, com os tokens do design system em `tailwind.config.ts`
- Inter via `next/font` e Material Symbols servidos localmente (`src/app/fonts`)

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Estrutura

| Rota           | Tela do design                 |
| -------------- | ------------------------------ |
| `/`            | Portfólio – Início             |
| `/projetos`    | Portfólio – Projetos (com switch claro/escuro) |
| `/habilidades` | Habilidades & Trajetória (`#trajetoria` = linha do tempo) |
| `/contato`     | Contato & Parcerias            |

- `src/content/` – textos dos projetos e da carreira
- `src/components/` – header, footer, navegação mobile, tema, formulário, FAQ
- `src/lib/site.ts` – navegação e links (GitHub, LinkedIn, e-mail)

O tema escuro segue a preferência salva ou a do sistema, e é alternado pelo switch no header.
