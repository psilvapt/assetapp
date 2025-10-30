# AssetApp – React + Firebase + Capacitor

Aplicação para registo e gestão de ativos, construída com:
- React (JavaScript)
- Firebase (autenticação e base de dados)
- CapacitorJS (para Android/iOS)
- Tailwind CSS (UI responsivo, sem Shadcn)

## Requisitos principais

- Menus básicos com navegação responsiva
- Botão de scan (QRCode/NFC) para identificar equipamentos
- Informação detalhada do ativo (descrição, manual, garantia, histórico de manutenção, previsões, manutenções ativas)
- Sugeridos: Anexos de documentos, fotos do equipamento, logs de movimentação, notificações de manutenção

## Getting Started
1. Instalar dependências: `npm install`
2. Configurar valores do Firebase (ver `.env.example`)
3. `npm start` para dev / Deploy recomendado: Vercel/Netlify/Firebase Hosting
4. Para builds móveis: `npx cap add android` ou `npx cap add ios`

---
Este projeto está em desenvolvimento.
