## Regras de Criacao de Componentes

Estas regras definem o padrao oficial de componentizacao do projeto (base: secao `hero`).

### 1) Estrutura por secao/feature
- Cada secao deve ter pasta propria em `app/components/sections/<nome>/`.
- `index.tsx` e apenas orquestrador (composicao e wiring de props/estado).
- Partes visuais e comportamentais devem ser separadas em arquivos dedicados.

### 2) Proibicao de componentes/hook inline no arquivo principal
- Nao declarar componentes dentro de outros componentes.
- Nao declarar hooks utilitarios dentro de `index.tsx`.
- Sempre extrair para arquivos proprios:
  - `use-*.ts` para hooks
  - `*.tsx` para componentes visuais
  - `constants.ts` para timings, sequenciamento e configuracoes de comportamento

### 3) Responsabilidade unica
- Um arquivo = uma responsabilidade principal.
- Exemplos:
  - `background-video-layer.tsx` somente midia de fundo
  - `steps-flow.tsx` somente fluxo de cards/conectores
  - `title.tsx` somente titulo/animacao de titulo

### 4) Tipagem e contratos
- Props tipadas explicitamente.
- Tipos de dominio vem de `app/types/landing.ts`.
- Evitar `any`; preferir tipos derivados (`Pick`, `Omit`, `PlatformStep[]`, etc.).

### 5) Animacao e motion
- Timings/easing em `constants.ts` (sem "numeros magicos" espalhados).
- Sequencia de animacao deve ser controlada por estado/sinal claro (ex.: `isVideoRevealed`), nao por duplicacao de logica em multiplos pontos.
- Em animacoes por scroll, definir `viewport` de forma explicita.

### 6) Midia (video/imagem)
- Video de secao deve ter:
  - lazy load
  - `poster` (primeiro frame estatico)
  - `muted`, `playsInline`, `loop`
- Priorizar fallback visual estavel antes do reveal do video.

### 7) Estilo e design system
- Manter direcao visual atual da marca.
- Nao introduzir cores arbitrarias/hardcoded fora de tokens/utilitarios existentes.
- Preservar padroes ja aprovados da secao quando houver ajuste incremental.
- Preferir classes utilitarias do Tailwind diretamente no componente.
- Se precisar abstrair estilo reutilizavel, abstrair combinacoes de utilitarios Tailwind (evitar CSS puro quando houver utilitario equivalente).
- Nao usar constante de string de classes em TS/TSX.
- Todo item clicavel (`a`, `button` e similares) deve incluir `cursor-pointer`.

### 8) Qualidade minima de entrega
- Toda alteracao deve finalizar com `pnpm lint` sem erros.
- Evitar funcoes grandes; preferir extracao para manter legibilidade e manutencao.
- Regra de estilo abstraido deve ser aplicada em todos os componentes existentes e novos.
