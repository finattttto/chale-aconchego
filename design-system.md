# Design System — Chalé Aconchego / Chalé Araucária

> **Nomenclatura:** neste documento "Recanto" designa o site e o conjunto de componentes do
> **Chalé Araucária** (`/chale-araucaria`, `src/components/recanto-aconchego/`). O nome veio da marca
> anterior; hoje "Recanto Aconchego" é só a área externa/de festas ao redor do chalé.

Documento levantado a partir do código real: `src/app/globals.css`, `tailwind.config.ts`,
`src/app/layout.tsx` e os 25 componentes em `src/components/`. Todos os valores abaixo foram
extraídos do código (não são recomendações), exceto a seção
[7. Inconsistências](#7-inconsistências-encontradas-e-padrão-sugerido) em diante.

> **Ponto de partida importante:** o projeto tem **dois sistemas de cor paralelos e independentes**.
> O **Chalé** (`/chale-aconchego`) usa tokens semânticos via CSS variables. O **Recanto** (`/chale-araucaria`)
> não usa nenhum token — são **93 ocorrências de hex literal** em 12 arquivos, escritas como
> valores arbitrários do Tailwind (`bg-[#f5f2ed]`). Estrutura, tipografia e espaçamento são
> idênticos entre os dois; só a cor divergiu.

---

## 1. Paleta de cores

### 1.1 Chalé Aconchego — tokens (tema claro, `:root` em `globals.css`)

Definidos em HSL sem a função `hsl()` e consumidos pelo Tailwind como `hsl(var(--token))`.
O hex é o valor convertido.

| Token | HSL | Hex | Onde é aplicado |
|---|---|---|---|
| `--background` | `40 33% 97%` | `#faf8f5` | `body`; fundo das seções *Sobre*, *Diferenciais* e *FAQ*; cards de experiência e depoimento; fundo do navbar quando rolado (`/95`) e do menu mobile |
| `--foreground` | `30 10% 12%` | `#221f1c` | Todo texto de leitura sobre fundo claro: títulos `h2`/`h3`, perguntas do FAQ, nome no depoimento, label das comodidades, texto do botão claro |
| `--card` | `40 25% 95%` | `#f5f3ef` | Fundo das seções *Experiências* e *Depoimentos*; chip de ícone dos diferenciais; card de comodidade; gradientes de fade laterais do carrossel |
| `--primary` | `30 15% 22%` | `#413830` | Fundo do footer; CTA "Reserve Agora" do navbar rolado e do menu mobile; gradientes de escurecimento sobre o vídeo (`/90`, `/40`, `/20`) |
| `--primary-foreground` | `40 33% 97%` | `#faf8f5` | Texto e bordas sobre fundo escuro (hero, footer, vídeo, CTA); fundo do botão primário no hero e na seção de CTA; variações de opacidade `/70 /60 /50 /40 /30 /20 /10 /5` |
| `--accent` | `28 40% 40%` | `#8f633d` | Único uso: ícones `lucide` em *Sobre* e *Diferenciais* (`text-accent`) e as estrelas dos depoimentos (`fill-accent text-accent`). Também é o `--ring` |
| `--muted-foreground` | `30 8% 45%` | `#7c736a` | Texto secundário: parágrafos de apoio, respostas do FAQ, descrições, localização do hóspede, eyebrow das seções (`text-xs uppercase`) |
| `--border` / `--input` | `30 15% 88%` | `#e5e0dc` | Todas as divisórias: borda do card de comodidade e de depoimento, régua de estatísticas, linhas do acordeão do FAQ, borda inferior do navbar |
| `--ring` | `28 40% 40%` | `#8f633d` | Declarado; só chega à tela via `focus-visible` dos componentes de `ui/` (não usados) |
| `--secondary` | `35 20% 90%` | `#ebe6e0` | **Sem uso em componentes** |
| `--muted` | `35 15% 93%` | `#f0eeea` | **Sem uso em componentes** (só `--muted-foreground` é usado) |
| `--popover` | `40 33% 97%` | `#faf8f5` | **Sem uso em componentes** |
| `--destructive` | `0 84.2% 60.2%` | `#ef4444` | **Sem uso em componentes** |
| `--chart-1` … `--chart-5` | — | `#cc7a33`, `#478566`, `#413830`, `#c2a770`, `#c67953` | **Sem uso algum** (não há gráficos no projeto) |
| `--radius` | `0.5rem` | — | Base de `rounded-lg/md/sm` no Tailwind |

**Tema escuro (`.dark` em `globals.css`)** — 24 variáveis declaradas
(`--background: #161412`, `--foreground: #efece7`, `--accent: #b37c4d`, …) e **completamente
inativas**: `tailwind.config.ts` não define `darkMode`, nenhum elemento recebe a classe `.dark`
e não existe toggle de tema. O site é light-only.

### 1.2 Recanto Aconchego — hex literais

Nenhum destes valores existe como token. A contagem é de ocorrências no código.

| Hex | Papel de fato | Ocor. | Onde é aplicado |
|---|---|---|---|
| `#2d3a2e` verde-escuro | Texto principal **e** superfície escura | 42 | Texto de leitura sobre fundo claro; fundo do footer; CTA do navbar rolado e mobile; overlay do hero (`/50 /30 /60`) e da seção de CTA (`/60`); gradiente sobre o vídeo (`/50`); moldura do vídeo (`/10`); texto com opacidade `/70` e `/60` na seção de vídeo; `themeColor` da página |
| `#f5f2ed` bege-claro | Superfície base | 12 | Fundo do wrapper da página e das seções *Sobre*, *Atividades*, *Diferenciais*, *Vídeo* e *FAQ*; navbar rolado (`/95`) e menu mobile; cards da galeria; chip de ícone dentro dos cards de atividade; fade do parallax |
| `#6b7c6b` verde-acinzentado | Texto secundário | 17 | Eyebrow das seções, parágrafos de apoio, descrições, respostas do FAQ, chevron do acordeão |
| `#4a6741` verde-médio | Accent / ícones | 9 | Ícones `lucide` em *Sobre*, *Atividades* e *Diferenciais*; eyebrow e bullets da seção de vídeo; molduras decorativas de canto (`/30`) |
| `#eae6df` bege-médio | Superfície elevada | 4 | Card de comodidade (*Sobre*), card de atividade, chip de ícone dos diferenciais **e** fundo da seção *Galeria* inteira |
| `#d4cfc5` bege-borda | Divisórias | 6 | Borda do card de comodidade e de atividade, linhas do acordeão do FAQ, borda inferior do navbar |
| `#3a4a3b` verde hover | Hover do CTA | 2 | Exclusivo do `hover:` do botão "Reserve Agora" (navbar rolado e mobile) |
| `#e2ded7` bege hover | Hover do card | 1 | Exclusivo do `hover:` do card de atividade |

### 1.3 Neutros e overlays puros

| Valor | Onde |
|---|---|
| `white` (`#ffffff`) | Apenas no Recanto: texto sobre fundo escuro (`text-white` + `/80 /70 /60 /50 /40 /30`), botão primário do hero e da seção de CTA (`bg-white`), botão de play do vídeo (`bg-white/90`), botão de mute (`bg-white/20`), CTA translúcido do navbar (`bg-white/10`), bordas (`border-white/30 /20 /10`) |
| `black` | Apenas no Chalé: overlay do hero (`from-black/40 via-black/30 to-black/60`) e da seção de CTA (`bg-black/50`) |

### 1.4 `themeColor` (barra do navegador mobile)

| Página | Valor | Arquivo |
|---|---|---|
| Tela de escolha (`/`) | `#3d3528` | `src/app/layout.tsx:43` — valor padrão do layout raiz; igual ao do Chalé, cujo painel fica no topo no celular |
| Chalé | `#3d3528` | `src/app/chale-aconchego/page.tsx:37` — **não existe na paleta** (ver inconsistência #5) |
| Recanto (Chalé Araucária) | `#2d3a2e` | `src/app/chale-araucaria/page.tsx:40` — bate com o verde-escuro |

---

## 2. Tipografia

### Famílias

Carregadas via `next/font/google` em `src/app/layout.tsx` e expostas como CSS variables mapeadas
no `tailwind.config.ts`:

| Família | Variable | Classe | Uso |
|---|---|---|---|
| **Inter** | `--font-inter` | `font-sans` (padrão no `body`) | Todo o corpo de texto, labels, botões, navegação |
| **Playfair Display** | `--font-playfair` | `font-serif` | Todos os títulos (`h1`, `h2`, `h3`), números das estatísticas, wordmark do navbar, links do menu mobile. 32 ocorrências |

Ambas com `display: "swap"` e `subsets: ["latin"]`.

### Pesos

Só **dois** pesos em uso, em todo o projeto:

| Classe | Peso | Uso |
|---|---|---|
| `font-medium` | 500 | 53 ocorrências — títulos, botões, labels, perguntas do FAQ, nome do hóspede |
| `font-semibold` | 600 | 2 ocorrências — apenas o wordmark "Chalé Aconchego" / "Chalé Araucária" no navbar |

Não há `font-bold` (o `<strong>` das listas do FAQ recebe só cor, não peso extra) nem
`font-light`. O corpo de texto fica no `normal` (400) herdado.

### Escala

| Papel | Classes | Tamanho final | Detalhes |
|---|---|---|---|
| **Display / h1 (hero)** | `text-5xl md:text-7xl lg:text-8xl` | 48 → 72 → 96px | `font-serif font-medium leading-tight tracking-tight text-balance` |
| **Título de seção / h2** | `text-4xl md:text-5xl` | 36 → 48px | `font-serif font-medium tracking-tight text-balance` + `mt-3` após o eyebrow. Padrão em 10 seções |
| **h2 do parallax** | `text-4xl md:text-5xl lg:text-6xl` | 36 → 48 → 60px | Único caso com 3 níveis |
| **h2 da seção de vídeo (Recanto)** | `text-3xl md:text-4xl lg:text-5xl` | 30 → 36 → 48px | Divergente do padrão (ver inconsistência #11) |
| **Wordmark / footer h3** | `text-lg` (navbar) / `text-2xl` (footer) | 18 / 24px | `font-serif` |
| **Números de estatística** | `text-3xl` | 30px | `font-serif font-medium` |
| **h3 de card** | `text-lg` (galeria, atividades) ou `text-base` (diferenciais) | 18 / 16px | `font-serif` na galeria e atividades; **sem** `font-serif` nos diferenciais |
| **Pergunta do FAQ** | `text-base md:text-lg` | 16 → 18px | `font-medium` |
| **Corpo grande** | `text-lg` | 18px | `leading-relaxed` — parágrafos da seção *Sobre* |
| **Corpo padrão** | `text-base md:text-lg` ou `text-base` | 16 → 18px | Subtítulo do hero, texto do CTA |
| **Corpo pequeno** | `text-sm` | 14px | 55 ocorrências — o tamanho mais usado do projeto: botões, navegação, descrições de card, footer, respostas do FAQ |
| **Eyebrow / rótulo** | `text-xs uppercase tracking-[0.3em]` | 12px | 21 ocorrências. Abre quase toda seção. Variante `tracking-[0.2em]` nos títulos de coluna do footer, `tracking-[0.4em]` na seção de vídeo do Chalé |
| **Nota de rodapé** | `text-xs` | 12px | Copyright, asteriscos de cobrança adicional |

### Tracking e leading

| Classe | Ocor. | Uso |
|---|---|---|
| `tracking-tight` | 19 | Todos os títulos serif |
| `tracking-[0.3em]` | 16 | Eyebrows de seção |
| `tracking-wide` | 12 | Botões e itens de navegação |
| `tracking-[0.2em]` | 4 | Títulos de coluna do footer |
| `tracking-widest` | 2 | Rótulo "Explore" do indicador de scroll |
| `tracking-[0.4em]` | 1 | Eyebrow da seção de vídeo do Chalé |
| `leading-relaxed` | 25 | Todo parágrafo |
| `leading-tight` | 3 | `h1` do hero e do parallax |

`text-balance` (utilitário custom em `globals.css`, via `text-wrap: balance`) é aplicado em
praticamente todo `h1`/`h2`.

---

## 3. Espaçamento e layout

### Ritmo vertical de seção

| Padrão | Ocor. | Onde |
|---|---|---|
| `py-24 md:py-32` (96 → 128px) | 12 | **Padrão de seção.** Todas as seções de conteúdo dos dois sites |
| `py-20 md:py-28` (80 → 112px) | 1 | Só a seção de vídeo do Recanto |
| `py-20` (80px) | 2 | Corpo dos dois footers |
| `min-h-screen` | 2 | Hero (Chalé e Recanto) |
| `h-screen` | 1 | Seção de vídeo do Chalé (vídeo fullscreen) |
| `h-[80vh] min-h-[600px]` | 1 | Parallax do Recanto |

### Container

```
<div className="mx-auto max-w-7xl px-6 lg:px-8">   ← padrão (15 ocorrências)
```

| Largura | Uso |
|---|---|
| `max-w-7xl` (1280px) | Container padrão de seção, navbar e footer |
| `max-w-4xl` (896px) | Conteúdo do hero |
| `max-w-3xl` (768px) | Coluna do FAQ, conteúdo da seção de CTA, texto do parallax |
| `max-w-md` (448px) | Parágrafo de apoio sob o título de seção |
| `max-w-lg` (512px) | Subtítulo do hero |
| `max-w-xs` (320px) | Descrição da marca no footer |
| `max-w-[700px]` | Iframe do calendário no FAQ do Chalé |

Gutter horizontal: sempre `px-6` (24px), subindo a `lg:px-8` (32px). 24 e 19 ocorrências.

### Escala de espaçamento interno

O projeto usa um subconjunto pequeno e consistente da escala do Tailwind:

| Espaço | Papel |
|---|---|
| `mb-16` (64px) | Do cabeçalho de seção (eyebrow + título) para o conteúdo — 8 ocorrências |
| `mt-10` (40px) | Bloco de comodidades, régua de estatísticas, lista de diferenciais, linha de botões |
| `mt-6` (24px) | Subtítulo após título grande |
| `mt-4` (16px) | Parágrafo seguinte, conteúdo do card — 17 ocorrências |
| `mt-3` (12px) | Eyebrow → título — 14 ocorrências |
| `mt-1` / `mt-2` | Título de card → descrição |
| `gap-16` | Colunas do grid de 2 (imagem + conteúdo) |
| `gap-12` | Colunas do footer; régua de estatísticas; grid da seção de atividades |
| `gap-8` | Itens do menu desktop; lista de diferenciais (`space-y-8`) |
| `gap-6` | Grid de cards (galeria/experiências); comodidades |
| `gap-4` | Ícone + texto dos diferenciais; cards de atividade |
| `gap-3` | Imagem colada do collage; ícone + label |
| `p-6` | Card de depoimento e de atividade |
| `p-5` | Corpo do card da galeria/experiências |
| `py-5` | Linha do acordeão do FAQ (e barra de copyright do footer) |

### Grids

- **2 colunas assimétricas:** `grid items-center gap-16 lg:grid-cols-2` — *Sobre* e *Diferenciais*
- **3 colunas de cards:** `grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3` — galeria/experiências
- **5/12 colunas:** `lg:grid-cols-5` com `lg:col-span-2` (imagem) + `lg:col-span-3` (cards) — atividades do Recanto
- **Footer:** `grid gap-12 md:grid-cols-2 lg:grid-cols-3`, com o mapa em `md:col-span-2 lg:col-span-1`
- **Comodidades/atividades:** `grid grid-cols-2`

### Proporções de imagem

| Classe | Uso |
|---|---|
| `aspect-[3/4]` | Foto menor sobreposta dos diferenciais (Chalé e Recanto), imagem grande de atividades, container de vídeo do Recanto em `md:` |
| `aspect-[4/5]` | Imagem da seção *Sobre* (vira `lg:aspect-[3/4]`), container de vídeo do Recanto no mobile |
| `aspect-[4/3]` | Thumbnail dos cards de galeria/experiências |

Imagens de fundo usam `fill` + `object-cover` + `sizes` explícito + `quality` (80 no hero, 75 nas
imagens de seção, 70 nos cards).

---

## 4. Bordas, raios e sombras

### Raio

| Classe | Valor | Ocor. | Uso |
|---|---|---|---|
| `rounded-sm` | `calc(0.5rem - 4px)` = **4px** | 30 | **Raio padrão de tudo**: botões, cards, chips de ícone, containers de imagem, iframes |
| `rounded-full` | — | 9 | Botão de play e de mute do vídeo, bullets decorativos, indicador de scroll |
| `rounded-md` | `calc(0.5rem - 2px)` = 6px | 5 | Apenas em `src/components/ui/*` (não usados) |

`--radius: 0.5rem` existe, mas `rounded-lg` (8px) nunca é usado — a linguagem visual é
deliberadamente de cantos quase retos.

### Bordas

- Espessura **sempre 1px** (`border`), exceto as molduras decorativas de canto na seção de vídeo do
  Recanto (`border-t-2 border-r-2 border-b-2 border-l-2` em `border-[#4a6741]/30`) e os iframes
  (`border-0` / `style={{ border: 0 }}`).
- Divisórias: `border-t` para abrir listas (topo do acordeão, régua de estatísticas, barra de
  copyright), `border-b` para separar itens (linhas do acordeão, base do navbar rolado).
- Cor: `border-border` (`#e5e0dc`) no Chalé, `border-[#d4cfc5]` no Recanto, `border-white/10`
  e `border-primary-foreground/10` nas barras de copyright.

### Sombras

Praticamente inexistentes: **2 ocorrências de `shadow-sm`**, ambas no navbar em estado rolado
(`navbar.tsx:46` nos dois sites). Nenhum card, botão ou modal tem sombra — a separação é feita por
cor de superfície e borda de 1px.

### Blur

`backdrop-blur-md` no navbar rolado (2×) e `backdrop-blur-sm` nos controles sobre mídia e no CTA
translúcido do navbar no topo (6×).

---

## 5. Padrões de componente

### 5.1 Botões

Não existe componente de botão em uso — são `<a>` e `<button>` com classes inline. Há **4 variantes
de fato**, cada uma repetida literalmente nos dois sites:

| Variante | Classes (Chalé) | Equivalente Recanto | Onde |
|---|---|---|---|
| **Primário sobre escuro** | `inline-flex items-center rounded-sm bg-primary-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all hover:bg-primary-foreground/90` | `bg-white … text-[#2d3a2e] hover:bg-white/90` | Hero, seção de CTA |
| **Fantasma sobre escuro** | `inline-flex items-center rounded-sm border border-primary-foreground/30 px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10` | `border-white/30 … text-white hover:bg-white/10` | Segundo botão do hero ("Conheça o chalé") |
| **CTA do navbar** (2 estados) | topo: `bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20` · rolado: `bg-primary text-primary-foreground hover:bg-primary/90`. Base: `inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300` | topo: `bg-white/10 text-white border-white/20` · rolado: `bg-[#2d3a2e] text-white hover:bg-[#3a4a3b]` | Navbar desktop |
| **Primário sólido** | `mt-4 inline-flex items-center rounded-sm bg-primary px-8 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90` | `bg-[#2d3a2e] text-white hover:bg-[#3a4a3b]` | CTA do menu mobile |

**Padrão comum:** `inline-flex items-center` · `rounded-sm` · `text-sm font-medium tracking-wide` ·
hover só por cor/opacidade, nunca por escala ou sombra.
**Padding:** `px-8 py-3.5` (CTA de conteúdo), `px-8 py-3` (CTA mobile), `px-5 py-2.5` (navbar).

Botões de mídia são circulares: `h-24 w-24 md:h-32 md:w-32 rounded-full border
border-primary-foreground/30 bg-primary-foreground/5 backdrop-blur-sm hover:scale-110` (play
fullscreen do Chalé) e `rounded-full bg-white/90 px-5 py-3` (play do Recanto) / `h-10 w-10
rounded-full bg-white/20` (mute) / `h-12 w-12 rounded-full` (mute do Chalé).

### 5.2 Cards

Há **4 formatos**, todos `rounded-sm`, todos sem sombra:

| Tipo | Anatomia |
|---|---|
| **Card de mídia** (galeria / experiências) | `article.group overflow-hidden rounded-sm bg-background` (Recanto: `bg-[#f5f2ed]`) → imagem `aspect-[4/3]` com `object-cover transition-transform duration-700 group-hover:scale-105` → corpo `p-5` com `h3.font-serif.text-lg` + `p.mt-2.text-sm.leading-relaxed` + nota opcional `mt-2 text-xs text-muted-foreground/70`. **Sem borda** |
| **Card de comodidade** (*Sobre*) | `flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3.5` + ícone `h-5 w-5 flex-shrink-0 text-accent` + `span.text-sm.font-medium`. Grid `grid-cols-2 gap-6` |
| **Card de atividade** (só Recanto) | `flex flex-col items-start rounded-sm border border-[#d4cfc5] bg-[#eae6df] p-6 transition-colors hover:bg-[#e2ded7]` → chip `h-11 w-11 rounded-sm bg-[#f5f2ed]` com ícone `h-5 w-5 text-[#4a6741]` → `h3.mt-4.font-serif.text-lg` → `p.mt-1.text-sm` |
| **Card de depoimento** (só Chalé) | `blockquote.flex h-full w-80 flex-shrink-0 flex-col rounded-sm border border-border bg-background p-6 md:w-96` → 5 estrelas `h-4 w-4 fill-accent text-accent` em `flex gap-0.5` → citação `mt-4 flex-1 text-sm` → `footer.mt-4.border-t.border-border.pt-4` com `cite` + localização `text-xs` |

**Item de destaque** (lista de diferenciais) não é card: `flex gap-4` + chip
`h-10 w-10 flex-shrink-0 rounded-sm bg-card` (Recanto: `bg-[#eae6df]`) com ícone
`h-5 w-5 text-accent` (Recanto: `text-[#4a6741]`), empilhados com `space-y-8`.

### 5.3 Seções

Esqueleto reutilizado em 10 das 11 seções de conteúdo:

```tsx
<section id="..." className="bg-background py-24 md:py-32">      {/* alterna bg-background / bg-card */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-16 text-center">                          {/* cabeçalho centralizado */}
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Eyebrow</p>
      <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl text-balance">
        Título
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        Apoio opcional
      </p>
    </div>
    {/* conteúdo */}
  </div>
</section>
```

Nas seções de 2 colunas (*Diferenciais*, seção de vídeo do Recanto) o cabeçalho **não** é
centralizado: eyebrow e `h2` ficam alinhados à esquerda dentro da coluna de texto, sem o `mb-16`.

**Alternância de fundo** dá o ritmo da página:
Chalé — `background` → `background` → `card` → imagem → `card` → imagem → `background`.
Recanto — `#f5f2ed` em quase tudo, com `#eae6df` na *Galeria* e imagem no parallax/CTA.

**Composição sobreposta** (seção de diferenciais, `highlights.tsx` nos dois sites): foto principal
`aspect-[4/5]` com `w-[80%]` + moldura decorativa deslocada (`absolute -left-4 -top-4 h-full w-full
border`, em `border-accent/30` no Chalé e `border-[#4a6741]/30` no Recanto — o mesmo vocabulário das
molduras de canto da seção de vídeo) + foto menor `aspect-[3/4] w-[46%]` ancorada em
`bottom-0 right-0`, com borda `border-[6px]` na cor do fundo (`border-background` / `#f5f2ed`) para
destacá-la sem sombra. Recorte ajustado por foto com `object-[x_y]`. O contêiner reserva o espaço com `pb-16 sm:pb-20 pl-4 pt-4`.

**Seções sobre imagem** (hero, CTA): `relative overflow-hidden` + `<Image fill>` + overlay
absoluto + conteúdo em `relative z-10`. O overlay é gradiente no hero
(`bg-gradient-to-b from-black/40 via-black/30 to-black/60` no Chalé;
`from-[#2d3a2e]/50 via-[#2d3a2e]/30 to-[#2d3a2e]/60` no Recanto) e plano no CTA
(`bg-black/50` / `bg-[#2d3a2e]/60`).

### 5.4 Navbar

`fixed top-0 z-50 transition-all duration-500` com 3 estados: transparente no topo, `bg-*/95
backdrop-blur-md border-b shadow-sm` rolado (`window.scrollY > 40`), sólido com o menu aberto.
Nav em `mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8`.
Menu mobile: overlay `fixed inset-0 z-[55]` sólido, links `font-serif text-2xl`, centralizados com
`gap-8`; botão hambúrguer `z-[60] h-10 w-10` com 3 barras `h-0.5 w-6` que rotacionam 45°.
Todo texto e barra alterna entre a cor escura (rolado) e branco/`primary-foreground` (topo).

### 5.5 Acordeão do FAQ

Implementação própria (não usa Radix), idêntica nos dois sites:
`div.border-b` → `button.flex w-full items-center justify-between py-5 text-left hover:opacity-70`
com `aria-expanded` → `ChevronDown h-5 w-5` girando com `rotate-180 duration-300` →
conteúdo animado por **grid**: `grid transition-all duration-300` alternando
`grid-rows-[1fr] pb-5` e `grid-rows-[0fr]`, com filho `overflow-hidden`.
Um item aberto por vez (`openIndex`, começa em `0`). A lista toda recebe `border-t` no container e
vive em `max-w-3xl`.

### 5.6 Footer

`bg-primary text-primary-foreground` (Recanto: `bg-[#2d3a2e] text-white`), corpo
`max-w-7xl px-6 py-20 lg:px-8`, grid de 3 colunas (marca / contato / mapa).
Títulos de coluna: `text-sm font-medium uppercase tracking-[0.2em]` em `/50` (Chalé) ou `/40`
(Recanto). Links de contato: `flex items-center gap-3 text-sm` + ícone `h-4 w-4`, opacidade `/70`
(Chalé) ou `/60` (Recanto) → sólido no hover. Mapa: iframe do Google Maps `height="200"` dentro de
`overflow-hidden rounded-sm`. Barra inferior: `border-t border-*/10` + `py-5` +
`text-xs text-*/40` (Chalé) ou `/30` (Recanto).

### 5.7 Mídia

`<video>` nativo com `loop muted playsInline preload="metadata" poster="…"` e `<source>` mp4;
`className="absolute inset-0 h-full w-full object-cover"`. Controles de play/mute por
`useRef` + `useState`, com textos e overlays desaparecendo por `opacity` + `translate-y` durante a
reprodução. O parallax usa `backgroundAttachment: "fixed"` inline (não `next/image`).

---

### 5.8 Tela de escolha (`/`)

Dois layouts no mesmo componente: `MobileChooser` (abaixo de `md`) e `DesktopChooser` (`md` em
diante). As fotos usam o mesmo `src` e o mesmo `sizes` (`IMAGE_SIZES`) nos dois, então o navegador
baixa cada foto uma vez só; as do celular ficam `lazy` e não são baixadas no desktop.

**Celular — toque para expandir:** `h-[100dvh] overflow-hidden`, sem rolagem em nenhum estado
(testado em 390×844, 375×667 e 360×640). Cabeçalho compacto no fluxo (eyebrow `text-[11px]`, `h1`
serif `text-2xl`, dica "Toque em um chalé para ver mais") e as duas metades em `flex-col`.
No estado inicial as duas são `flex-1`, com foto limpa, `tagline` e nome serif `text-[1.75rem]`
alinhados à esquerda na base. Tocar em uma a leva a `flex-[2.3]` (~70%) com
`transition-[flex-grow] duration-700`, e revela descrição, até 3 selos (`tags`, `rounded-sm
border-white/20 bg-white/10`) e o botão primário da marca (grid `0fr → 1fr` com `delay-200`); a outra
recebe o mesmo desfoque/escurecimento do desktop e o texto "Toque para ver". Cada metade tem um único
alvo de toque em `absolute inset-0`: um `<button>` que expande quando fechada, e um `<Link>` para a
página quando aberta. Recorte por foto em `mobileImagePosition`.

**Desktop — tela dividida:**

`src/components/home/property-chooser.tsx` (client). Única tela que mostra as duas marcas juntas,
então **cada painel usa a paleta da sua própria marca** e nada é compartilhado entre eles.

- **Estrutura:** `main.relative flex min-h-[100dvh] flex-col md:flex-row bg-[#221f1c]` (o fundo é o
  hex de `--foreground` do Chalé, só aparece durante o carregamento das imagens). Dois `<Link>`
  `flex-1`, um por hospedagem: **Chalé primeiro** (esquerda no desktop, topo no celular), Recanto
  em seguida. O painel inteiro é clicável; o "botão" dentro dele é um `span`.
- **Cabeçalho:** `absolute inset-x-0 top-0 z-20 pointer-events-none` com véu
  `bg-gradient-to-b from-black/60 via-black/25 to-transparent`. Eyebrow padrão → `h1` serif
  `text-2xl md:text-4xl lg:text-5xl` → apoio `text-sm md:text-base`, oculto abaixo de `sm`.
- **Painel:** imagem `fill` (Chalé Aconchego `chale-frente.jpg`, Chalé Araucária `recanto/chale-araucaria-escolha.jpg`) + overlay de
  marca (`from-black/80 via-black/30 to-black/30` / `from-[#2d3a2e]/90 via-[#2d3a2e]/40
  to-[#2d3a2e]/30`) + conteúdo centralizado e alinhado à base (`justify-end`), `h2` serif
  `text-3xl md:text-5xl lg:text-6xl`. Botão primário sobre escuro de cada marca (seção 5.1), com
  seta `ArrowRight` que desliza `translate-x-1` no hover. Divisória `md:border-l
  md:border-white/10` no segundo painel.
- **Foco (só `md:`):** estado `active` em `useState`, disparado por `onMouseEnter` e `onFocus`
  (teclado também ativa). Painel ativo: `md:flex-[1.3]` (cresce ~57/43) e imagem `md:scale-105`.
  Painel inativo: imagem `md:scale-110 md:blur-[6px] md:grayscale-[40%]` (o `scale-110` esconde a
  borda transparente do blur), véu `bg-black` a `md:opacity-40` e conteúdo a `md:opacity-50`.
  No celular não há efeito — o toque já navega.
- **Foco de teclado:** `focus-visible:outline-2 outline-white/70` com `outline-offset: -12px`
  (contorno desenhado dentro do painel).

## 6. Movimento

| Duração | Ocor. | Uso |
|---|---|---|
| `duration-300` | 14 | Hovers, chevron do acordeão, barras do hambúrguer, CTA do navbar |
| `duration-500` | 7 | Troca de estado do navbar e do menu mobile |
| `duration-700` | 5 | Zoom da imagem no card (`group-hover:scale-105`), fades do player de vídeo |

Propriedades: `transition-all` (25), `transition-colors` (16), `transition-transform` (4),
`transition-opacity` (4). Não há `ease-*` custom nem `delay-*`.

Exceção: a tela de escolha (5.8) usa `duration-700 ease-out` em tudo que muda com o foco
(`transition-[flex-grow]`, filtro, escala e opacidade) e é o único lugar com
`motion-reduce:transition-none`.

`tailwind.config.ts` declara as animações `accordion-down`, `accordion-up` e `fade-in` —
**nenhuma é usada**. A única animação aplicada no projeto é a utilitária `animate-bounce`
(indicador de scroll da seção de vídeo do Chalé).

`globals.css` também esconde a barra de rolagem globalmente
(`overflow-y: scroll` + `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`).

---

## 7. Inconsistências encontradas e padrão sugerido

Ordenadas por impacto. As três primeiras são as que realmente custam manutenção.

### #1 — Dois sistemas de cor paralelos (crítico)

**O que é:** o Chalé usa tokens semânticos; o Recanto tem 93 hex literais espalhados em 12
arquivos. Trocar o verde do Recanto hoje significa um find-and-replace em 12 arquivos, sem
garantia de cobertura (há variações com opacidade: `#2d3a2e/50`, `/60`, `/70`, `/10`).

**Padrão sugerido:** promover a paleta do Recanto a tokens e manter o Chalé como está. Como as duas
páginas nunca coexistem na tela, o caminho mais simples é escopar as variáveis por classe de tema —
ver o [snippet da seção 8](#8-proposta-de-tokens-para-o-recanto). Depois disso, `bg-[#f5f2ed]`
vira `bg-background` e os dois sites passam a usar exatamente as mesmas classes, com só um bloco
de variáveis diferindo.

### #2 — Quatro beges quase idênticos, dois deles em sistemas diferentes

| Valor | Sistema | Papel |
|---|---|---|
| `#faf8f5` | Chalé `--background` | Superfície base |
| `#f5f3ef` | Chalé `--card` | Superfície elevada |
| `#f0eeea` | Chalé `--muted` | **sem uso** |
| `#ebe6e0` | Chalé `--secondary` | **sem uso** |
| `#f5f2ed` | Recanto literal | Superfície base |
| `#eae6df` | Recanto literal | Superfície elevada **e** fundo de seção |
| `#e2ded7` | Recanto literal | Hover de card (1 uso) |

`#f5f3ef` (card do Chalé) e `#f5f2ed` (base do Recanto) diferem em 2 pontos de um canal — são
visualmente o mesmo bege em dois sistemas distintos.

**Padrão sugerido:** três níveis de superfície por tema, nada além — `base` / `elevada` /
`hover`. Concretamente: manter `--background` e `--card`, **apagar `--muted` e `--secondary`**
(zero uso), e no Recanto fixar `#f5f2ed` (base) / `#eae6df` (elevada) / `#e2ded7` (hover).
E resolver o duplo papel de `#eae6df`: hoje ele é fundo da seção *Galeria* **e** fundo de card em
outras seções, então na *Galeria* os cards tiveram que inverter para `#f5f2ed`. Escolha um: ou a
*Galeria* passa a `#f5f2ed` como as outras seções (e os cards voltam a `#eae6df`), ou `#eae6df`
fica reservado para seção e os cards ganham a superfície base. A primeira opção mantém a
alternância de ritmo mais previsível.

### #3 — Quatro verdes com papéis pouco definidos no Recanto

| Valor | Ocor. | Papel atual |
|---|---|---|
| `#2d3a2e` | 42 | Texto principal **e** superfície escura **e** overlay |
| `#6b7c6b` | 17 | Texto secundário |
| `#4a6741` | 9 | Ícones, eyebrow da seção de vídeo, bullets, moldura decorativa |
| `#3a4a3b` | 2 | Só hover do CTA sólido |

`#4a6741` e `#6b7c6b` são ambos "verde médio" e competem: em *Atividades* o eyebrow é `#6b7c6b`,
mas na seção de vídeo o eyebrow equivalente é `#4a6741`. Não há regra.

**Padrão sugerido:** quatro papéis nomeados e exclusivos — `foreground` (`#2d3a2e`, texto e
superfície escura), `muted-foreground` (texto secundário), `accent` (`#4a6741`, **só** ícones e
elementos gráficos) e `primary-hover` (`#3a4a3b`). E padronizar o eyebrow em
`muted-foreground` nas duas seções — é o que 5 das 6 seções já fazem. Isso espelha exatamente os
papéis que o Chalé já tem (`--foreground` / `--muted-foreground` / `--accent`).

### #4 — Branco puro vs. bege base no Recanto

O botão primário do hero e do CTA do Recanto é `bg-white` (`#ffffff`), e todo o texto sobre
escuro é `text-white`. Mas a superfície base do site é `#f5f2ed`. O Chalé não tem esse problema:
usa `bg-primary-foreground` (`#faf8f5`), que é a mesma cor da superfície base — por isso o botão
"parece" do sistema.

**Padrão sugerido:** trocar `bg-white` por `bg-[#f5f2ed]` (ou, com tokens,
`bg-primary-foreground`) nos botões primários sobre escuro, e substituir `text-white` por um token
`recanto-on-dark` = `#f5f2ed`. Assim o branco puro deixa de existir na paleta e o bege passa a ser
a cor clara única. (Os overlays `white/10`, `white/20` podem continuar em branco puro — são véus,
não superfícies.)

### #5 — `themeColor` do Chalé não existe na paleta

`chale-aconchego/page.tsx:37` usa `#3d3528`, que não corresponde a nenhum token. O mais próximo é
`--primary` = `#413830`. O Recanto acertou (`#2d3a2e` é exatamente o verde-escuro).

**Padrão sugerido:** `themeColor: "#413830"`.

### #6 — Tema escuro declarado e inativo

24 variáveis no bloco `.dark` de `globals.css`, sem `darkMode` no `tailwind.config.ts`, sem
`.dark` em nenhum elemento e sem toggle. Elas dão a impressão de que dark mode funciona.

**Padrão sugerido:** remover o bloco `.dark`. Um site de hospedagem com fotografia de natureza em
paleta terrosa clara não ganha nada com tema escuro, e o Recanto (hex literais) não seguiria o
tema de qualquer forma — implementar de verdade exigiria resolver o #1 primeiro.

### #7 — Tokens declarados sem uso

`--chart-1` a `--chart-5` (zero uso, não há gráficos), `--muted`, `--secondary`, `--popover`,
`--destructive` e seus `-foreground` só aparecem nos componentes de `ui/` que nenhuma página
importa. São ~16 das 24 variáveis do `:root` sem efeito na tela.

**Padrão sugerido:** enxugar o `:root` para o que é usado — `background`, `foreground`, `card`,
`primary` (+ `-foreground`), `accent`, `muted-foreground`, `border`, `radius`. Se um dia entrar um
componente shadcn que precise de `--secondary`, ele volta junto.

### #8 — `ui/button.tsx` contradiz o botão real do projeto

`buttonVariants` produz `rounded-md h-10 px-4 py-2 text-sm font-medium` — enquanto todo botão real
do site é `rounded-sm px-8 py-3.5 tracking-wide`. Nenhuma página importa `ui/`, então hoje é
inofensivo; no dia em que alguém usar `<Button>`, o botão vai sair com raio e altura fora da
linguagem visual.

**Padrão sugerido:** ou alinhar `buttonVariants` ao padrão real (`rounded-sm`, `tracking-wide`,
size `default: "px-8 py-3.5"`), ou remover `src/components/ui/` inteiro — são 5 arquivos não
usados e 4 dependências Radix (`react-collapsible`, `react-label`, `react-slot`, `react-icons`)
que existem só por causa deles. Alinhar é preferível se houver intenção de usar shadcn adiante.

### #9 — Keyframes sem uso no `tailwind.config.ts`

`accordion-down`, `accordion-up` e `fade-in` estão definidos; nenhum é referenciado. O acordeão do
FAQ é animado por `grid-rows-[0fr] → [1fr]`, não pelos keyframes.

**Padrão sugerido:** remover `accordion-*` (dependem de `--radix-accordion-content-height`, que só
existe com o Radix Accordion — que o projeto não usa). O `fade-in` é útil: se a intenção era
revelar seções ao rolar, vale aplicar; senão, remover.

### #10 — Escala de `h2` divergente em duas seções

O padrão é `text-4xl md:text-5xl` (10 seções). Mas a seção de vídeo do Recanto usa
`text-3xl md:text-4xl lg:text-5xl` e o parallax usa `text-4xl md:text-5xl lg:text-6xl`.

**Padrão sugerido:** dois tamanhos só — **display** (`text-5xl md:text-7xl lg:text-8xl`, exclusivo
do hero) e **seção** (`text-4xl md:text-5xl`, todo o resto). O parallax pode manter o `lg:text-6xl`
como variante deliberada de seção-imersiva, mas a seção de vídeo deveria subir para o padrão.

### #11 — Padding de seção divergente

`py-24 md:py-32` em 12 seções; `py-20 md:py-28` só na seção de vídeo do Recanto.

**Padrão sugerido:** `py-24 md:py-32` em toda seção de conteúdo. `py-20` fica reservado ao corpo
do footer (onde já é consistente entre os dois sites).

### #12 — Falhas de contraste (WCAG AA exige 4.5:1 para texto abaixo de 18px)

Calculado sobre os valores reais:

| Par | Contraste | Situação |
|---|---|---|
| `#6b7c6b` sobre `#eae6df` (texto secundário na *Galeria* e nos cards de atividade, `text-sm`) | **3.58:1** | ✗ falha AA |
| `#6b7c6b` sobre `#f5f2ed` (texto secundário padrão do Recanto, `text-sm`) | **3.98:1** | ✗ falha AA |
| `text-[#2d3a2e]/60` sobre `#f5f2ed` (lista da seção de vídeo, `text-sm`) | **3.45:1** | ✗ falha AA |
| `text-white/40` sobre `#2d3a2e` (títulos de coluna do footer do Recanto) | **3.32:1** | ✗ falha AA |
| `text-white/30` sobre `#2d3a2e` (copyright do Recanto) | **2.51:1** | ✗ falha |
| `text-primary-foreground/40` sobre `#413830` (copyright do Chalé) | **3.14:1** | ✗ falha |
| `#7c736a` sobre `#faf8f5` (texto secundário do Chalé) | 4.39:1 | ✗ no limite |
| `#7c736a` sobre `#f5f3ef` (texto secundário sobre card) | 4.19:1 | ✗ falha AA |
| `#4a6741` sobre `#f5f2ed` | 5.69:1 | ✓ |
| `#2d3a2e` sobre `#f5f2ed` | 10.71:1 | ✓ |
| `#221f1c` sobre `#faf8f5` | 15.47:1 | ✓ |
| `#8f633d` (accent) sobre `#faf8f5` | 4.93:1 | ✓ (e 4.71:1 sobre card) |

**Padrão sugerido**, mantendo o tom da paleta:

- Recanto, texto secundário: `#6b7c6b` → **`#566656`** (5.48:1 sobre `#f5f2ed`, 4.92:1 sobre
  `#eae6df`, 4.57:1 sobre `#e2ded7` — passa AA nas três superfícies).
- Chalé, `--muted-foreground`: `30 8% 45%` → **`30 8% 42%`** (`#746b63`; 4.92:1 sobre background,
  4.71:1 sobre card).
- Opacidades mínimas para texto sobre escuro: **`/60`** no verde-escuro do Recanto (5.43:1) e
  **`/70`** no marrom do Chalé (6.22:1). Ou seja: títulos de coluna e copyright sobem de `/40` e
  `/30` para `/60`–`/70`. Como não há `/50` abaixo do necessário, a regra prática é **nunca usar
  opacidade de texto abaixo de `/60`**.
- Substituir `text-[#2d3a2e]/60` da seção de vídeo pelo token de texto secundário.

### #13 — Recanto sem logo no navbar *(resolvido)*

> Resolvido: o navbar do Recanto (Chalé Araucária) passou a usar o mesmo `logo-chale.png` 32×32 do
> Chalé, com o mesmo espaçamento. O texto abaixo fica como registro.

O Chalé tem `logo-chale.png` 32×32 ao lado do wordmark; o Recanto tem só o wordmark. Os dois
navbars são idênticos em todo o resto.

**Padrão sugerido:** um dos dois — adicionar uma marca própria ao Recanto, ou remover a imagem do
Chalé e deixar os dois só com wordmark serif. Enquanto não houver logo do Recanto, a segunda opção
é a mais coerente (e economiza uma requisição no LCP do Chalé).

---

## 8. Proposta de tokens para o Recanto

Resolve as inconsistências #1, #3, #4 e #12 sem tocar no Chalé. Em `globals.css`:

```css
@layer base {
  /* Recanto Aconchego — aplicado via <div class="theme-recanto"> na página */
  .theme-recanto {
    --background: 37 28.6% 94.5%;      /* #f5f2ed  superfície base */
    --card: 38 20.8% 89.6%;            /* #eae6df  superfície elevada */
    --card-hover: 38 15.9% 86.5%;      /* #e2ded7  hover de card */
    --foreground: 125 12.6% 20.2%;     /* #2d3a2e  texto e superfície escura */
    --muted-foreground: 120 8.5% 36.9%;/* #566656  texto secundário (AA em todas as superfícies) */
    --accent: 106 22.6% 32.9%;         /* #4a6741  apenas ícones e elementos gráficos */
    --primary: 125 12.6% 20.2%;        /* #2d3a2e  CTA sólido */
    --primary-hover: 124 12.1% 25.9%;  /* #3a4a3b  hover do CTA */
    --primary-foreground: 37 28.6% 94.5%; /* #f5f2ed  texto/botão sobre escuro (substitui o branco puro) */
    --border: 40 14.9% 80.2%;          /* #d4cfc5  divisórias */
  }
}
```

Registrar `cardHover` e `primaryHover` no `tailwind.config.ts` (os demais já existem), trocar o
wrapper em `src/app/recanto-aconchego/page.tsx` de
`bg-[#f5f2ed] text-[#2d3a2e]` para `theme-recanto bg-background text-foreground`, e então
substituir nos 12 arquivos:

| De | Para |
|---|---|
| `bg-[#f5f2ed]` | `bg-background` |
| `bg-[#eae6df]` | `bg-card` |
| `hover:bg-[#e2ded7]` | `hover:bg-card-hover` |
| `text-[#2d3a2e]` / `bg-[#2d3a2e]` | `text-foreground` / `bg-primary` |
| `text-[#6b7c6b]` | `text-muted-foreground` |
| `text-[#4a6741]` | `text-accent` |
| `border-[#d4cfc5]` | `border-border` |
| `hover:bg-[#3a4a3b]` | `hover:bg-primary-hover` |
| `text-white` / `bg-white` (superfícies) | `text-primary-foreground` / `bg-primary-foreground` |
| `bg-white/10`, `border-white/20` (véus) | manter |

Resultado: os componentes dos dois sites ficam com classes **idênticas**, e a diferença de marca
passa a viver num único bloco de 10 variáveis. Isso torna a duplicação de componentes entre
`chale-aconchego/` e `recanto-aconchego/` — hoje deliberada — barata de manter ou, se houver
interesse, de unificar depois.

---

## 9. Checklist para uma seção nova

1. `<section>` com `py-24 md:py-32` e fundo alternando em relação à seção anterior.
2. Container `mx-auto max-w-7xl px-6 lg:px-8`.
3. Cabeçalho: eyebrow `text-xs uppercase tracking-[0.3em]` em `muted-foreground` → `h2` com
   `mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl text-balance` → apoio opcional
   `mx-auto mt-4 max-w-md text-base leading-relaxed`. Fecha com `mb-16` (centralizado) ou alinhado à
   esquerda em layout de 2 colunas.
4. Cor: só tokens (Chalé) ou os 8 hex catalogados na seção 1.2 (Recanto). Nada de tom novo.
5. `rounded-sm` para tudo; `rounded-full` só para controles de mídia e bullets.
6. Borda de 1px na cor de borda do tema; sem sombra.
7. Corpo de texto em `text-sm leading-relaxed` (ou `text-lg` em parágrafo de destaque), com
   opacidade nunca abaixo de `/60`.
8. Imagem via `next/image` com `fill`, `object-cover`, `sizes` explícito e `quality` 70–80.
9. Transições em `duration-300` (hover) ou `duration-700` (zoom de imagem); hover só por cor.
10. Se a seção tiver âncora, o `id` precisa entrar em `NAV_ITEMS` do navbar daquele site.
```
