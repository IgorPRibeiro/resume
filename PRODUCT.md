# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Público primário: recrutadores, hiring managers e tech leads de empresas estrangeiras avaliando o Igor para posições remotas internacionais. Chegam pelo LinkedIn ou por um link enviado durante um processo seletivo, avaliam rapidamente e em inglês, e não têm contexto sobre o mercado brasileiro, sobre a Globalsys ou sobre as cooperativas clientes dos projetos.

Público secundário confirmado pelo bilinguismo: recrutadores e gestores brasileiros, que chegam ao mesmo site em português.

## Product Purpose

Site pessoal de portfólio de Igor P. Ribeiro. Existe para converter uma visita fria de recrutador em contato — apresentar quem ele é, o que já entregou em produção e como falar com ele. Sucesso é o visitante internacional entender a especialidade em poucos segundos, encontrar prova real de trabalho entregue e sair com o currículo baixado ou uma mensagem enviada.

## Positioning

Especialista em mobile React Native com base full-stack. A prova não é a lista de tecnologias: são quatro aplicativos de negócio em produção, com regras reais e resolvidas em campo — cálculo de juros por condição de pagamento e pagamento via PIX (Loja Conceito), SuperApp com login social, assinatura de contratos e cotação de café (ICoop), inspeções e relatórios de segurança offline-first com sincronização posterior (Plamont), consulta de saldo e extrato de cartão estudantil (LeCard Estudante). Um portfólio vizinho de "desenvolvedor full-stack" não consegue copiar essa combinação de domínio financeiro/cooperativista e entrega mobile multiplataforma.

Full-stack (Node.js, Go, Java, Next.js) sustenta a posição como capacidade de entregar ponta a ponta, não como manchete.

## Operating Context

- O visitante avalia em minutos, quase sempre no desktop durante triagem e no celular quando o link chega por mensagem.
- Arquitetura aprovada em 19/10/2026: home editorial e páginas /work, /work/:slug, /about, /services, /process e /contact; ferramentas em /ferramentas. A entrada com celular foi removida.
- Idioma inicial é detectado pelo navegador (`pt` → português, qualquer outro → inglês) e pode ser trocado manualmente no cabeçalho.
- O portfólio mostra trabalho feito como colaborador da Globalsys Soluções em T.I., não projetos autorais — o enquadramento precisa deixar isso claro sem parecer que os apps são produtos próprios.
- Deploy atual em Vercel: https://igpr-resume.vercel.app/

## Capabilities and Constraints

**Fatos pessoais publicados hoje:** Igor P. Ribeiro; Vila Velha / Espírito Santo, Brasil; formação na Multivix; empregado na Globalsys Soluções em T.I.

**Tempo de experiência:** o texto atual afirma "mais de 4 anos" desde a criação do repositório (2025). Fato desatualizado por definição — precisa de confirmação do Igor antes de ser reescrito; trabalho futuro não deve estimar o número sozinho.

**Habilidades declaradas:** React Native + Expo, Android, iOS, Next.js, Node.js, TypeScript, Java, Go.

**Serviços declarados:** Frontend (React, Vue, Angular), Backend (Node.js, Express, bancos de dados), Mobile multiplataforma (React Native e tecnologias nativas).

**Requisitos permanentes:**
- Bilíngue EN/PT obrigatório: nenhuma tela, seção ou string pode existir em apenas um idioma. Todo texto novo passa por `src/context/LanguageContext.tsx`.
- Os quatro projetos da Globalsys permanecem publicados no formato atual, com nome de cliente e descrição.
- Os contatos atuais permanecem publicados: iguprcarrer@gmail.com, +55 27 99516-2238, LinkedIn (igorpr1202), GitHub (IgorPRibeiro).

**A construir:** currículo em PDF para download — não existe hoje no repositório. O arquivo é fornecido pelo Igor; o site precisa do ponto de download e do rótulo bilíngue.

**Dívidas factuais no código atual (verdade do produto, não estética):**
- Links sociais do rodapé apontam para `href="#"` — nenhum leva a lugar algum.
- Existem chaves de tradução para um formulário de contato (`contact.form.*`) sem formulário renderizado; não há backend de envio de mensagem.
- `index.html` tem `og:image` com `require()` (não funciona em Vite), `twitter:site` como `@lovable_dev` e `twitter:image` apontando para o domínio lovable.dev — metadados de compartilhamento estão quebrados/errados para um site que será enviado por link a recrutadores.
- O `<html lang="en">` é fixo e não acompanha a troca de idioma.

**Restrição técnica:** stack existente é Vite + React 18 + TypeScript + Tailwind + shadcn/ui (Radix), react-router-dom, sem backend próprio. O `index.html` carrega `cdn.gpteng.co/gptengineer.js` e o build usa `lovable-tagger` — resíduos do scaffold original, sem função no produto.

## Brand Commitments

Nome publicado: **Igor P. Ribeiro**. A direção anterior CROX, laranja e blueprint foi retirada por solicitação do Igor. Nova direção: neutros confortáveis, preto absoluto, texto claro e vermelho puro, sem tonalidades rosas, com Floema como referência e acentos inspirados na foto pessoal; apresentação direta com conteúdo substancial na home. Resumo, projetos, tecnologias de trabalho, experiência e formação ficam na página inicial. Ferramentas utilitárias continuam pelo cabeçalho. Animações entre seções são discretas e não bloqueiam a rolagem.

## Evidence on Hand

**Real e disponível no repositório:**
- Foto pessoal: `src/assets/images/i.png`
- Sem capturas de tela de produtos de clientes: a seção de projetos descreve tipos de sistema, sem marca, nome de cliente ou print (sigilo contratual).
- Captura do próprio site: `src/assets/images/site.png`
- Ícones de tecnologia: `src/assets/icons/` (React Native, Node, Android, iOS, Next, TypeScript, Java, Go)
- Descrições técnicas detalhadas dos quatro projetos, em EN e PT, em `src/context/LanguageContext.tsx`
- GitHub público com repositórios: https://github.com/IgorPRibeiro

**Ausências que o trabalho futuro não pode preencher inventando:** não há depoimentos, recomendações, métricas de impacto (usuários, volume transacionado, avaliações de loja), links públicos para os apps nas lojas, estudos de caso, prêmios, certificações nem currículo em PDF. Se algum desses for necessário para uma seção, o material tem que ser pedido ao Igor.

## Product Principles

1. **Prova antes de adjetivo.** O visitante estrangeiro decide pelo que foi entregue em produção, não por autodescrição. Todo espaço nobre pertence a trabalho real.
2. **Legível sem contexto brasileiro.** Cooperativa, PIX, cartão estudantil e Globalsys precisam de uma frase de contexto — o recrutador de fora não conhece nenhum dos quatro.
3. **Paridade bilíngue absoluta.** Nada entra no site sem existir em EN e PT; o inglês é a versão de maior consequência.
4. **Nunca fabricar credencial.** Números, depoimentos, clientes e prazos só entram vindos do Igor.
5. **Uma visita é curta.** Especialidade, prova e caminho de contato precisam estar acessíveis sem exigir leitura completa da página.

## Atualização de capacidades (confirmada pelo Igor)

Interface: React Native, Tailwind CSS, StyleSheet, styled-components. Integrações nativas: Android, iOS, Java, Kotlin, Swift. Estado e dados offline: Redux, MobX, Zustand, SQLite, Async Storage. Entrega: lojas de aplicativos e Expo. Backend: Node.js e Java. Infraestrutura: Oracle Cloud Infrastructure (OCI). Ferramentas acessíveis apenas pelo cabeçalho, sem cena própria na home.

## Desktop e web — atualização confirmada pelo Igor

Satro é um projeto da Globalsys com desenvolvimento desktop em Electron. O portfólio pode publicar esse nome e a tecnologia; não foram fornecidos detalhes de funcionalidades ou métricas. React também faz parte da atuação web. São cinco projetos publicados: os quatro relatos mobile e Satro.
