# Substituir entrevistas pelos três professores reais

## Objetivo
Usar os três entrevistados reais enviados pelo usuário (todos da região do Grajaú) nas entrevistas do blog, preenchendo com repertório fictício os artigos que não têm entrevista real.

## Entrevistados reais
- **Luciano Assis** — Professor de Jiu-Jitsu, faixa preta 6 graus, ~20 anos de prática, 48 anos, professor em escola de artes marciais no Grajaú. Mantém as respostas já publicadas (G13 BJJ).
- **André Alarcon** — Instrutor de Jiu-Jitsu, faixa preta 3 graus, ~17 anos de prática, 46 anos, proprietário e professor de escola no Grajaú. Mantém as respostas já publicadas.
- **Leandro Chuler** — Professor de Jiu-Jitsu, faixa marrom, ~8 anos de prática, 38 anos, instrutor em escola no Grajaú. Nova entrevista a criar no mesmo modelo (3 perguntas e respostas) — sem Q&A enviado, será redigida como repertório e marcada como tal.

## Mudanças

### 1. `src/lib/posts.ts`
- Estender o tipo `Interview` com campos opcionais de ficha: `age`, `practiceTime`, `belt`, `affiliation` (ou um único campo `bio` com a ficha formatada).
- **Artigo "Quem manda no centro do tatame?"**: atualizar a ficha do professor Luciano Assis com os dados completos (função, faixa, tempo de prática, idade, escola no Grajaú). Manter as 3 respostas reais.
- **Artigo "A faixa preta custa mais caro para elas"**: atualizar a ficha do professor André Alarcon com os dados completos. Manter as 3 respostas reais.
- **Artigo "Professora não é auxiliar"**: substituir a entrevista fictícia de Marta Nogueira pela do **professor Leandro Chuler**, com 3 perguntas e respostas no mesmo modelo (diferença de tratamento no ensino, incentivo às mulheres, conselho para jovens), coerentes com o tema do artigo. Marcar como repertório criado para ilustrar o debate, já que o usuário não enviou as respostas dele.
- **Artigos "Um guia prático para academias que querem mudar" e "Bateu na mulherada"**: manter as entrevistas fictícias (Fernanda Lousada e Camila Duarte) como repertório, com o aviso de ficção já existente.

### 2. `src/routes/posts.$slug.tsx`
- Exibir a ficha completa do entrevistado (função/faixa, tempo de prática, idade, escola) abaixo do nome, quando os campos existirem.

## Verificação
- Conferir o build em `/tmp/observability/build-errors.log`.
- Verificar com Playwright (desktop 1280x1800 e mobile 390x844) que as fichas e entrevistas aparecem corretamente nos três artigos.
