---
name: Igor P. Ribeiro — Portfolio
description: Uma vitrine iluminada numa rua escura — painéis de vidro, ar generoso, e o trabalho mobile atrás do vidro como única fonte de luz.
colors:
  signal-red: "hsl(0 90% 58%)"
  void: "hsl(240 10% 3.9%)"
  graphite: "hsl(240 3.7% 15.9%)"
  bone: "hsl(0 0% 98%)"
  ash: "hsl(240 5% 64.9%)"
  steel: "hsl(240 4.9% 83.9%)"
  ember-deep: "hsl(0 62.8% 30.6%)"
  legacy-pink: "#e91e63"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 110"
  fine:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  display-sub:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 105"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 105"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.006em"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 100"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
  4xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "hsl(0 90% 58% / 0.9)"
    textColor: "{colors.bone}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
  button-icon:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.md}"
    height: "44px"
    width: "44px"
  pane:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
    rounded: "{rounded.lg}"
    padding: "32px"
  project-pane:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
    rounded: "{rounded.lg}"
    padding: "24px"
  tech-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ash}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
    typography: "{typography.label}"
  input-field:
    backgroundColor: "{colors.void}"
    textColor: "{colors.bone}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "48px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.bone}"
---

# Design System: Igor P. Ribeiro — Portfolio

> **Este documento descreve o sistema como construído.** As quatro decisões que o Igor tomou em 16/08/2026 — Signal Red como acento canônico, Archivo no lugar de Inter, profundidade de luz sobre vidro, e layout desktop-first em painéis — estão implementadas em toda a página, incluindo a rota 404. O que ainda **não** existe no código e é registrado aqui como sistema, não como descrição: o componente de campo de formulário (não há formulário na página), o sangramento de painel até a borda da casca, e o download do currículo em PDF, que depende de um arquivo que o Igor precisa fornecer. Onde documento e código divergirem, **o documento manda** e o arquivo tocado é migrado.

## Overview

**Creative North Star: "Vitrine Noturna"**

O site é uma vitrine acesa numa rua escura. Não uma interface sobre fundo escuro — uma vitrine: a rua é preta, a calçada é larga, e o que existe de luz no quarteirão inteiro vem de dentro do vidro. O visitante chega de fora, à noite, andando. Ele não navega um app; ele passa em frente e olha para dentro.

Isso decide a composição antes de qualquer token. A página é uma sequência de painéis de vidro, e **um painel de cada vez** ocupa o campo de visão. Cada painel é uma montagem terminada — não uma pilha de blocos empilhados até a página acabar. Entre eles há rua: 128px de respiro de cada lado no desktop, 256px somados entre dois vizinhos. Não é desperdício — é o escuro que faz o próximo painel acender. A calçada (a margem lateral) é larga de propósito: uma vitrine espremida contra o meio-fio não é uma vitrine, é um mostruário de balcão. O que está atrás do vidro são as telas dos aplicativos entregues — Loja Conceito, ICoop, Plamont, LeCard. Elas são os únicos objetos saturados de toda a composição, e é para elas que a luz aponta.

O vermelho é o letreiro. Um único tom de sinal, aceso em poucos lugares: o filete sob o título da vitrine, a aresta viva do retrato, o botão que chama para o contato. Vitrine com dois letreiros brigando não convida ninguém a entrar. A tipografia é **Archivo** e faz dois papéis com o mesmo desenho: em largura expandida e corpo grande, é a letra pintada no vidro; em largura normal e 17px, é a etiqueta ao lado do objeto. O sistema é composto em 1440px e **reduzido** para baixo — a intenção nasce no desktop, e o mobile é a mesma vitrine vista de perto, uma coluna, mesma ordem, nada escondido.

Recusas confirmadas: nada de tema claro (`:root` já é o escuro, não existe escopo `.dark`); e vitrine aqui é **vidro transparente, não glassmorphism** — sem desfoque decorativo, sem painel leitoso, sem gradiente de brilho falso. A única transparência com desfoque do sistema é funcional, no cabeçalho fixo.

**Key Characteristics:**
- Composição desktop-first em 1440px, reduzida com fidelidade — nunca redesenhada no mobile.
- Um painel por campo de visão, com 128px de respiro de cada lado no desktop — 256px de rua entre dois vizinhos.
- Calçada larga: margem lateral de até 96px, tratada como parte do design e não como sobra.
- Uma família (Archivo) em duas larguras: expandida no letreiro, normal na etiqueta.
- Um único acento vermelho, aceso em no máximo três pontos por painel.
- As capturas dos apps são o único elemento saturado da página.
- Vidro é clareza: aresta de 1px iluminada, zero desfoque decorativo.

## Colors

Rua preta, vidro grafite, letra de osso — e um único vermelho de letreiro que carrega toda a carga de atenção do site.

### Primary
- **Signal Red** (`hsl(0 90% 58%)` — #f43434): o letreiro. Vive em três lugares e nenhum a mais: o filete sob o título de cada painel, a aresta do retrato e o botão de contato. Uma quarta aparição também é permanente mas transitória — a linha de razão que acende sob uma linha de lista no hover. É o token `--primary` de [src/index.css](src/index.css).

### Secondary
- **Legacy Pink** (#e91e63): **retirado**. Era o token `highlight` do scaffold e não é mais renderizado em lugar nenhum — `highlight` sobrevive apenas como alias de `primary` em [tailwind.config.ts](tailwind.config.ts), para que nenhuma referência esquecida volte a pintar rosa. Nenhum código novo pode usá-lo.

### Neutral
- **Void** (`hsl(240 10% 3.9%)` — #09090b): a rua. Fundo de tudo, e também de `card` e `popover` — diálogos e menus flutuam sobre o preto e se separam por aresta, nunca por tom.
- **Graphite** (`hsl(240 3.7% 15.9%)` — #27272a): o vidro. Um valor faz seis trabalhos — `secondary`, `muted`, `accent`, `border`, `input` e a superfície de todo painel. É a única elevação tonal do sistema.
- **Bone** (`hsl(0 0% 98%)` — #fafafa): todo texto de primeira ordem. Nunca branco puro.
- **Ash** (`hsl(240 5% 64.9%)` — #a1a1aa): as etiquetas. Subtítulo do letreiro, descrições, rótulos de campo, navegação em repouso. 7,7:1 sobre Void; seguro em qualquer tamanho.
- **Steel** (`hsl(240 4.9% 83.9%)` — #d4d4d8): exclusivamente o anel de foco (`--ring`). É como o teclado se anuncia.
- **Ember Deep** (`hsl(0 62.8% 30.6%)` — #7f1d1d): estados destrutivos. Sem uso implementado; reservado.

### Named Rules

**The One Signal Rule.** Signal Red acende em no máximo três pontos por painel e nunca ultrapassa 10% de qualquer viewport. Duas peças vermelhas disputando a mesma atenção significam que uma delas está errada — a escassez é o mecanismo.

**The 4.5 Floor Rule.** Signal Red sobre Void mede 5,1:1 e serve para texto. Sobre Graphite cai para 3,9:1 e **deixa de servir**: dentro de um painel, texto vermelho abaixo de 18px é proibido — use Bone ou Ash no texto e reserve o vermelho para aresta, filete ou linha de razão, onde 3:1 basta. É por essa regra que o rótulo de empresa dentro de um painel de projeto é Ash e não vermelho.

**The Migration Rule.** Todo arquivo tocado por qualquer tarefa converte seus `text-highlight` / `bg-highlight` / `border-highlight` para os tokens `primary`. Não existe refatoração de cor separada: a migração acontece por contato.

## Typography

**Display Font:** Archivo, eixo de largura em 110 (fallback `sans-serif`)
**Body Font:** Archivo, largura normal (fallback `sans-serif`)
**Label/Mono Font:** nenhuma família distinta — Archivo em caixa alta e espacejamento aberto faz o papel de etiqueta.

**Character:** Archivo é uma grotesca desenhada para sinalização e display de alta performance, e é escolhida exatamente por isso: em `wdth 110` e corpo grande ela tem o peso e a presença da letra pintada no vidro de uma vitrine; em largura normal e 17px ela vira a etiqueta discreta ao lado do objeto. Uma família, duas vozes, nenhuma segunda fonte. Carregar como fonte variável (eixos `wght` 400–700 e `wdth` 100–115, subconjuntos latin e latin-ext — o `latin-ext` não é opcional, o português depende dele). O Google Fonts expõe o eixo de largura como `font-stretch`, então a largura se declara em porcentagem (`font-stretch: 110%`) e não por `font-variation-settings`.

### Hierarchy
- **Display** (700, `wdth 110`, `clamp(2.75rem, 6vw, 5.5rem)`, entrelinha 0.95, tracking −0.02em): o letreiro. Só o nome no topo da página. Entrelinha abaixo de 1 é obrigatória nesse tamanho — em 5,5rem, entrelinha 1 abre um buraco entre as linhas.
- **Display-sub** (500, `wdth 105`, `clamp(1.5rem, 2.6vw, 2.25rem)`): o degrau grande que não é letreiro. Três usos e só esses: a segunda linha do Display (em Ash, no mesmo bloco), o título de um diálogo de projeto, e os itens do menu de tela cheia. Todos são o mesmo momento — presença sem virar manchete.
- **Headline** (600, `wdth 105`, `clamp(2rem, 3.5vw, 3rem)`, tracking −0.015em): o título de cada painel, sempre com o filete vermelho de 64×4px abaixo.
- **Title** (600, 1,375rem): título de projeto e de serviço dentro de um painel.
- **Body** (400, 1,0625rem, entrelinha 1,7, tracking 0.006em): texto corrido. 17px e não 16px porque a leitura acontece em desktop, à distância de vitrine. O tracking positivo mínimo não é enfeite: texto claro sobre preto fecha visualmente, e esse toque devolve o ar que o negativo come. Medida limitada pelo token `measure` (60ch ≈ 70 caracteres reais — a unidade `ch` mede o zero, mais largo que a média das letras, então 68ch já estourava a faixa confortável).
- **Label** (500, 0,8125rem, tracking 0.08em, **caixa alta**): etiquetas — navegação, nome de empresa, rótulos de campo, chips de tecnologia, texto de botão. A caixa alta com espacejamento aberto é o que dá à vitrine seu tom de sinalização, e é o detalhe que mais diferencia este sistema de um portfólio padrão.
- **Fine** (400, 0,8125rem, caixa baixa, tracking normal): letra miúda. Existe para um caso só — a linha legal do rodapé — e existe porque uma frase inteira em caixa alta com tracking aberto não se lê.

### Named Rules

**The Two Widths Rule.** Archivo aparece em exatamente duas larguras: expandida (105–110) em Display e Headline, normal (100) em todo o resto. Nenhuma terceira largura, nenhuma segunda família — se um bloco parece precisar de outra voz, ele precisa de outro tamanho.

**The Label-Caps Rule.** Todo texto funcional com 0,8125rem ou menos vai em caixa alta com tracking 0.08em. A exceção é uma só e tem nome: `fine`, a letra miúda legal, que fica em caixa baixa porque uma frase inteira em caps não se lê. Fora dela, texto pequeno em caixa baixa não existe neste sistema — ou é corpo de leitura em 17px, ou é etiqueta em caixa alta.

**The Balanced Line Rule.** Todo papel de título (`display`, `display-sub`, `headline`, `title`) quebra com `text-wrap: balance`, e o corpo com `text-wrap: pretty`. É o mecanismo que faz a Bilingual Fit Rule funcionar sem ajuste manual: quando o texto em português cresce sobre o inglês, o navegador redistribui as linhas em vez de largar uma palavra órfã na última.

**The Second Line Rule.** Todo Display carrega uma segunda linha imediatamente abaixo, em Ash e um degrau menor, dentro do mesmo bloco. Nome e especialidade chegam juntos, numa leitura só.

**The Bilingual Fit Rule.** Nenhum título é dimensionado pelo inglês. O português é 15–30% mais longo; toda linha de Display e Headline precisa sobreviver à versão PT sem órfã de uma palavra e sem estourar para três linhas no mobile. `wdth 110` custa largura — teste sempre com o texto PT mais longo.

## Layout

**Este sistema é composto em 1440px e reduzido.** A intenção nasce no desktop; o mobile é a mesma vitrine vista de perto. Nada é reordenado, nada é escondido, nada ganha uma composição própria — a redução é fiel.

A página é uma pilha de painéis de largura total sobre a rua preta. Dentro de cada faixa há uma casca de no máximo 1440px, e dentro dela uma calçada: margem lateral de `clamp(20px, 5vw, 96px)`. O conteúdo se organiza numa grade de 12 colunas com calhas de 32px. Texto corrido nunca ultrapassa 68 caracteres, o que no desktop significa 6 a 7 colunas — o vazio ao lado do parágrafo é parte da composição, não sobra.

O ritmo vertical é o da rua: **128px de respiro acima e abaixo de cada painel no desktop, 80px no mobile**, e exatos 64px entre o título de um painel e seu primeiro conteúdo. O respiro é por painel, não por intervalo — entre dois painéis vizinhos a rua **soma 256px** no desktop, e é essa soma que garante que dois títulos nunca dividam a mesma tela. O cabeçalho é fixo (72px, Void a 90% com desfoque funcional de 4px e fio de 1px em Graphite), e o primeiro painel compensa com 160px de topo no desktop.

Os painéis podem sangrar até a borda da casca de 1440px quando contêm imagem — é o momento de vidro de ponta a ponta. Painéis de texto respeitam a grade. Grades internas observadas: habilidades em 4 colunas no desktop → 3 → 2; projetos em 3 → 2 → 1; serviços em 3 → 1; contato em 3 → 1.

Dois cortes importam de verdade: **1024px**, onde a grade de 12 vira coluna única, os painéis perdem o sangramento lateral e a navegação vira menu de tela cheia; e **640px**, onde o alinhamento de texto migra para o centro. Entre eles não há terceira composição.

A navegação colapsa em 1024px e não em 640px por medição, não por gosto: os cinco rótulos em caixa alta com tracking 0.08em somam ~630px em português, e abaixo de 1024px eles não convivem com o nome e o seletor de idioma na mesma barra. É a Bilingual Fit Rule decidindo um breakpoint.

### Named Rules

**The Sidewalk Rule.** A margem lateral nunca é menor que 20px nem maior que 96px, e é a mesma em todos os painéis da página. Conteúdo encostado na borda da janela quebra a vitrine.

**The One Pane Rule.** Um painel por campo de visão. Se dois assuntos diferentes aparecem juntos na tela sem os 256px de rua entre eles, eles são o mesmo painel — e então precisam de uma única montagem, não de dois títulos.

**The 64 Rule.** Título de painel → primeiro conteúdo: 64px. Sem exceção, em qualquer breakpoint.

**The Faithful Reduction Rule.** O mobile mostra os mesmos elementos, na mesma ordem, com o mesmo texto. Esconder uma seção, reordenar blocos ou inventar um componente exclusivo de mobile é quebra de sistema — o que não couber precisa encolher, não sumir.

## Elevation & Depth

Vidro e luz, não sombra empilhada. Em repouso, todo painel é Graphite chapado sobre Void, separado por uma **aresta de luz**: um fio de 1px branco a 6% na borda superior, como a quina de uma placa de vidro pegando o brilho da rua. É a única profundidade permanente do sistema, e ela é material, não projetada.

O resto é comportamento. Quando o ponteiro chega num painel interativo, ele sobe 5px em 300ms com easing de saída e ganha uma sombra ambiente que o descola do preto — a vitrine se inclinando para a calçada. Elemento não interativo não sobe e não sombreia, nunca. A única elevação permanente além da aresta é o cabeçalho fixo, resolvido por material (translúcido + desfoque + fio), não por sombra.

### Shadow Vocabulary
- **pane-edge** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06)`): a aresta de luz na borda superior de todo painel. Permanente, e o único efeito que existe em repouso.
- **surface-lift** (`box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.7)`): acompanha o `translateY(-5px)` de painéis interativos no hover. Preto puro e difuso — sobre um fundo quase preto, só a ausência de luz lê como distância.
- **accent-bloom** (`box-shadow: 0 8px 28px -6px hsl(0 90% 58% / 0.30)`): o halo do letreiro, sob elementos que já são vermelhos em repouso — botão primário e retrato. Só no hover, só neles.
- **overlay-drop** (`box-shadow: 0 24px 64px -12px rgba(0, 0, 0, 0.85)`): o diálogo de projeto sobre a cortina preta a 80%. Substitui o `shadow-lg` do shadcn, fraco demais contra Void.
- **focus-ring** (`box-shadow: 0 0 0 2px hsl(240 10% 3.9%), 0 0 0 4px hsl(240 4.9% 83.9%)`): única indicação de foco de teclado. Não pode ser removida de nenhum controle.

### Named Rules

**The Rest-Flat Rule.** Superfície em repouso é chapada, com uma única exceção nomeada: a `pane-edge`. Toda outra sombra é resposta a estado — hover, foco ou sobreposição. Sombra sem interação é decoração e não entra.

**The Red Bloom Rule.** O `accent-bloom` só toca elementos que já são vermelhos em repouso. Painel cinza nunca ganha halo vermelho — isso transformaria o letreiro em enfeite.

**The One Choreography Rule.** A página tem uma única coreografia, e ela é **a vitrine acendendo**: quando o painel de portfólio entra em cena, cada tela de aplicativo sai de `brightness(0.28) saturate(0.3) blur(10px)` em escala 1.03 para a luz plena, em 900ms com `cubic-bezier(0.16, 1, 0.3, 1)` e 140ms de intervalo entre elas. É o único lugar da página onde a luz literalmente acende, porque é o único lugar onde a luz existe. Nenhuma outra seção ganha entrada coreografada. O apoio permitido é de três tipos e só esses: o filete do título traçado da esquerda (600ms), a lista de habilidades escalonada como lista (60ms por item, teto de 7), e o estado de hover de qualquer controle. Reinterpretar toda seção rolada como uma lista escalonada é quebra de sistema.

**The Clear Glass Rule.** Vidro neste sistema significa clareza: aresta iluminada, superfície opaca, zero desfoque. `backdrop-filter` existe em exatamente um lugar — o cabeçalho fixo — e por razão funcional. Painel leitoso, brilho diagonal falso e gradiente de vidro são proibidos.

## Shapes

Retângulos calmos. Painéis, imagens e diálogos usam 8px; controles (botões, campos, botões de ícone) usam 6px; imagens dentro de texto usam 4px. Círculo completo é reservado a três papéis: o retrato (com aresta Signal Red de 4px), os poços de ícone, e os chips de tecnologia.

A exceção deliberada é o filete de 64×4px sob cada título de painel: raio zero. É o único canto vivo do sistema, e por isso ele lê como marcação e não como interface.

Bordas são sempre 1px em Graphite e existem para separar planos da mesma cor. Nenhuma borda colorida além da aresta do retrato.

### Named Rules

**The Three-Radius Rule.** 8px para painel, 6px para controle, 4px para imagem em texto, `9999px` para os três papéis circulares. Qualquer outro valor é erro — inclusive canto vivo, cuja única exceção é o filete de título.

## Components

### Buttons
- **Shape:** 6px, altura de 48px na variante padrão (a vitrine pede alvos maiores que os 40px do shadcn), 44px no botão de ícone.
- **Primary:** fundo Signal Red, texto Bone em **caixa alta** 0,8125rem com tracking 0.08em, padding 14px×28px. É o botão de contato — no máximo um por painel.
- **Hover / Focus:** fundo a 90% em 200ms com `accent-bloom`; foco de teclado sempre pelo anel Steel com offset de 2px.
- **Outline:** fundo transparente com borda de 1px em Graphite, texto Bone; no hover o fundo vira Graphite. É a variante dos links sociais (em pílula, com ícone de 16px à esquerda) e do seletor de idioma.
- **Ghost:** sem borda nem fundo em repouso, fundo Graphite no hover. Reservado ao botão de menu do mobile.

### Chips
- **Style:** pílula de contorno — 1px em Graphite sobre fundo transparente, texto Ash em caixa alta 0,8125rem, padding 6px×14px. O contorno em vez do preenchimento evita um terceiro plano cinza dentro de um painel que já é cinza.
- **State:** puramente informativo (as tecnologias de um projeto). Não são filtros, não têm estado selecionado, não são clicáveis.

### Cards / Containers
São **painéis**. O termo importa: um painel é uma montagem terminada, não um contêiner genérico.
- **Corner Style:** 8px.
- **Background:** Graphite chapado sobre Void, com `pane-edge` permanente.
- **Shadow Strategy:** nenhuma além da aresta em repouso; `surface-lift` + `translateY(-5px)` em 300ms no hover, apenas se for interativo.
- **Border:** 1px Graphite quando o painel encosta em outro painel; ausente quando há rua suficiente ao redor.
- **Internal Padding:** 32px em painéis de conteúdo, 24px no rodapé de um painel de projeto — cujo topo é a captura do app sangrando de ponta a ponta em 240px de altura, cortada em `cover`.

### Inputs / Fields
- **Style:** altura de 48px, fundo Void, borda de 1px Graphite, raio de 6px, texto 1,0625rem, placeholder em Ash.
- **Label:** acima do campo, caixa alta 0,8125rem em Ash, 8px de distância. Nunca placeholder no lugar de rótulo.
- **Focus:** anel Steel de 2px com offset de 2px sobre Void; a borda não muda de cor.
- **Error / Disabled:** desabilitado a 50% com cursor bloqueado. Erro (ainda não implementado) usa borda Ember Deep e mensagem em Bone — nunca texto vermelho em corpo pequeno (ver The 4.5 Floor Rule).

### Navigation
- **Style:** cabeçalho fixo de 72px, Void a 90% com desfoque funcional de 4px e fio inferior de 1px em Graphite. À esquerda, retrato circular de 40px e o nome em Title; à direita, cinco links em Label (caixa alta, 0,8125rem, tracking 0.08em) com 32px de calha, seguidos do seletor de idioma.
- **States:** link em **Ash** em repouso e **Bone** no hover, com transição de 150ms. A navegação é etiqueta de vitrine: ela recua para que o vermelho fique reservado ao letreiro. Não há indicador de seção ativa.
- **Mobile:** abaixo de 1024px os links viram menu de tela cheia (Void sólido a partir dos 72px do cabeçalho), itens empilhados e centralizados em Title, entrando com fade de 500ms. O seletor de idioma permanece na barra, ao lado do botão de menu, e a rolagem da página trava enquanto o menu está aberto.

### Pane Title
O componente de assinatura. Headline em `wdth 105`, `inline-block` para que o filete acompanhe a largura do texto, com um retângulo de 64×4px em Signal Red posicionado 10px abaixo do bloco. Abre todo painel. Nunca centralizado no desktop, nunca sem o filete, nunca com o filete em outra cor.

## Do's and Don'ts

### Do:
- **Do** compor em 1440px primeiro e reduzir; a versão mobile mostra os mesmos elementos, na mesma ordem.
- **Do** manter 128px de respiro acima e abaixo de cada painel no desktop e 80px no mobile.
- **Do** usar `primary` / Signal Red como único acento, convertendo qualquer `highlight` no arquivo que estiver editando.
- **Do** carregar Archivo variável com `latin-ext`; sem ele o português quebra em acentos.
- **Do** escrever todo texto funcional de 0,8125rem em caixa alta com tracking 0.08em.
- **Do** limitar texto corrido a 68 caracteres, mesmo quando o painel é largo.
- **Do** dar `pane-edge` a todo painel e `surface-lift` apenas aos que são clicáveis.
- **Do** dimensionar cada bloco pela versão em português, que é a mais longa.
- **Do** manter o anel de foco Steel em todo controle interativo, inclusive nos que são `<div>` estilizados.
- **Do** deixar as capturas dos apps serem o único ponto saturado da composição.

### Don't:
- **Don't** introduzir um segundo acento cromático nem um segundo letreiro no mesmo painel.
- **Don't** usar texto vermelho abaixo de 18px sobre Graphite — 3,9:1 reprova em AA.
- **Don't** usar glassmorphism: painel leitoso, desfoque decorativo, brilho diagonal ou gradiente de vidro. O único `backdrop-filter` do sistema é o do cabeçalho.
- **Don't** construir tema claro nem reintroduzir a alternância `.dark`; `:root` é o tema.
- **Don't** adicionar uma segunda família tipográfica, nem uma terceira largura de Archivo.
- **Don't** esticar parágrafo até a largura do painel só porque há espaço.
- **Don't** aplicar sombra a superfície em repouso (exceto `pane-edge`), nem halo vermelho a elemento que não é vermelho.
- **Don't** usar raio fora de 4 / 6 / 8 / `full`, e não arredondar o filete de título.
- **Don't** esconder, reordenar ou substituir conteúdo no mobile.
- **Don't** animar sem respeitar `prefers-reduced-motion`: o movimento de 5px, o fade do menu e o `animate-bounce` do topo precisam ter desligamento.
