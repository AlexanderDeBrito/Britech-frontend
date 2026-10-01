# Britech — site

Site da Britech (https://britechsolucoes.com), em React 19 + Vite, publicado como
site estático no Cloudflare Pages.

```bash
pnpm install
pnpm dev      # servidor de desenvolvimento
pnpm build    # build de produção + prerender das rotas
pnpm check    # verificação de tipos
```

## Como o SEO funciona aqui

O site é uma SPA, mas **não é entregue como SPA**: `pnpm build` roda o build normal
do Vite e em seguida `scripts/prerender.mjs`, que renderiza cada rota para HTML
estático. Cada URL responde já com o conteúdo montado, o `<title>`/`description`
corretos e o JSON-LD da página — sem depender de o crawler executar JavaScript.

```
dist/public/
├── index.html                    → /
├── dag/index.html                → /dag/
├── servicos/index.html           → /servicos/   (Consultoria)
├── produtos/index.html           → /produtos/
├── produtos/assistente-de-lancamentos/index.html → /produtos/assistente-de-lancamentos/
├── cases/index.html              → /cases/
├── cases/crm-renke/index.html    → /cases/crm-renke/
├── sobre/index.html              → /sobre/
├── diagnostico/index.html        → /diagnostico/
├── contato/index.html            → /contato/
├── privacidade/index.html        → /privacidade/
├── 404.html              → status 404 real para URLs inexistentes
└── sitemap.xml           → gerado a partir das rotas realmente publicadas
```

### Onde mexer

| Para… | Edite |
| --- | --- |
| Título, descrição, palavras-chave ou JSON-LD de uma página | `client/src/lib/seo.ts` (`PAGES`) |
| Endereço, telefone, redes sociais, coordenadas | `client/src/lib/contact.ts` e `SITE` em `seo.ts` |
| Perguntas do FAQ (home e consultoria; viram `FAQPage`) | `client/src/lib/faq.ts` |
| Produtos (lista, textos, FAQ, capturas e vídeos do Razão) | `client/src/lib/products.ts` (`RAZAO_SHOTS`, `RAZAO_VIDEO` = vídeo principal da página do produto, `RAZAO_TEASER` = teaser do card em /produtos/); imagens em `client/public/images/produtos/`, vídeos e posters em `client/public/videos/`. O `razao-como-funciona.mp4` publicado é uma versão editada do original, sem o aviso de preço da tela Início do protótipo |
| Vídeo explicativo do DAG (seção só aparece quando preenchido) | `DAG_VIDEO` em `client/src/lib/dag.ts` |
| Fluxo, gates e números do DAG / case CRM Renke | `client/src/lib/dag.ts` |
| Cards de cases | `client/src/lib/cases.ts` |
| Tags de `<head>` geradas para todas as páginas | `client/src/lib/seo-head.ts` |
| `robots.txt`, `_headers`, `_redirects`, manifest | `client/public/` |

### URLs com barra final

O Cloudflare Pages serve `sobre/index.html` em `/sobre/` e responde 308 para
`/sobre`. Por isso canonical, `og:url`, breadcrumbs e sitemap usam sempre a barra
final (`absoluteUrl` em `seo.ts`), e os links internos vêm de `ROUTES`
(`lib/contact.ts`).

### Ao adicionar uma rota nova

1. Registre a `<Route>` em `client/src/App.tsx` (e o link em `ROUTES`, `lib/contact.ts`).
2. **Adicione a entrada correspondente em `PAGES` (`client/src/lib/seo.ts`).**

O segundo passo não é opcional: o prerender e o sitemap são gerados a partir de
`PAGES`. Uma rota ausente ali não ganha HTML estático e cai no `404.html`.

### Assets da marca

Favicons, `og-image.png` e as versões WebP das imagens são **versionados**, não
gerados no build — assim o deploy não depende de `sharp` nem de fontes instaladas.
Para regerá-los depois de mudar o logo ou as imagens:

```bash
pnpm add -D sharp
node scripts/generate-assets.mjs   # requer a fonte Plus Jakarta Sans instalada
pnpm remove sharp
```

### Depois de publicar

O código cobre o que é técnico. Para o site aparecer nas buscas ainda é preciso,
uma vez, fora do repositório:

- cadastrar o domínio no [Google Search Console](https://search.google.com/search-console)
  e enviar `https://britechsolucoes.com/sitemap.xml`;
- criar/reivindicar o perfil no **Google Empresas** (Google Business Profile) com o
  mesmo nome, endereço e telefone que aparecem no rodapé — é o que faz a empresa
  aparecer nas buscas locais e no mapa.

## Variáveis de ambiente

| Variável | Efeito |
| --- | --- |
| `VITE_ANALYTICS_ENDPOINT` | Endpoint do Umami. Sem ela o script não é injetado. |
| `VITE_ANALYTICS_WEBSITE_ID` | ID do site no Umami. |
