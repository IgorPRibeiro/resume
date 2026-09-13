# Plano de implementação — apresentação e portfólio

## Direção aprovada
Evoluir a Vitrine Noturna existente: Archivo, fundo escuro e vermelho pontual. A primeira tela apresenta Igor P. Ribeiro e sua especialidade mobile com base full-stack. O artefato é uma composição interativa de interface, armazenamento e entrega; diagramas ilustrativos, sem telas ou marcas de clientes.

## Fluxo visual
Nome e especialidade → explorar as camadas do trabalho mobile → abrir entrega relacionada → percorrer os quatro sistemas → experiência → competências → sobre → contato. Projetos abertos e serviços existentes continuam acessíveis. Ferramentas e laboratório não são desenvolvidos nesta etapa.

## Implementação
1. Hero: substituir painéis auxiliares e estatísticas por composição mobile com três seleções explícitas, perspectiva controlada pelo ponteiro e abertura vinculada ao scroll.
2. Portfólio: trazer a seção imediatamente após o hero; apresentação editorial com seleção de sistema e aprofundamento do texto existente. Sem métricas ou credenciais novas.
3. Navegação: projetos primeiro; reduzir a prioridade visual de ferramentas.
4. Movimento: entrada breve, transformação de camadas, linha de continuidade até os projetos. Sem scroll artificial, canvas ou bibliotecas adicionais.
5. Acesso: controles nativos, feedback de seleção, teclado, toque, foco visível, conteúdo em EN/PT e alternativa sem deslocamentos para movimento reduzido.
6. Verificação: build, TypeScript, lint dos arquivos alterados, navegação e controles em desktop/mobile, ausência de overflow e revisão visual independente.

## Limites
Manter fatos e descrições dos quatro sistemas sob sigilo. Não criar demonstrações de produtos reais, números de impacto ou PDF inexistente. Publicação em produção não faz parte desta aplicação local.

## Contrato visual
Primeiro viewport: nome em duas linhas à esquerda; especialidade e ações imediatamente abaixo. À direita, um dispositivo esquemático claro sobre planos escuros em perspectiva. O vermelho marca a camada selecionada e o caminho até o portfólio. O celular mantém a composição em escala legível e controles de toque abaixo dela. A seleção altera a composição e o texto explicativo; a rolagem abre os planos sem ocultar o conteúdo.

## Verificação realizada
- Build Vite e TypeScript passaram.
- Lint dos arquivos alterados sem erros; aviso preexistente de Fast Refresh no contexto de idioma.
- Controles de camadas, links para sistemas, expansão de decisões técnicas, seleção por Enter e fechamento do menu por Escape verificados no navegador.
- Movimento reduzido: variáveis de perspectiva zeradas e transições desativadas.
- Capturas em 1440px e 390px; checks de largura em 320px e 1024px. Cabeçalho compacto ajustado para 320px.
- Revisão visual independente solicitou três correções: tela ilustrativa sem corte inferior, legenda fora da composição e escopo abaixo dos títulos de projetos. Correções aplicadas e recapturadas.
