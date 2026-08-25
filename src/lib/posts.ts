export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "o-tatame-nao-e-neutro",
    title: "O tatame não é neutro",
    excerpt:
      "Quem ocupa o centro do dojo, quem carrega o material, quem é corrigido em voz alta. A hierarquia invisível começa muito antes da primeira queda.",
    category: "Ensaio",
    date: "12 de agosto de 2026",
    readingTime: "7 min",
    author: "Redação",
    body: [
      "Existe uma coreografia silenciosa em quase todo dojo. Ela não está escrita no regulamento nem é dita em voz alta pelo professor, mas todo mundo aprende rápido: há um lado do tatame onde se treina forte e outro onde se treina 'com cuidado'.",
      "Essa divisão raramente é justificada por técnica. Ela é justificada por corpo. E é aí que o machismo deixa de ser uma opinião isolada de um aluno mal-educado e passa a ser estrutura: uma forma de organizar quem aprende o quê, com que intensidade e em quanto tempo.",
      "Reconhecer isso não enfraquece a arte marcial. Pelo contrário: obriga a academia a explicar suas escolhas pedagógicas em vez de repeti-las por hábito. Um tatame que se explica é um tatame que ensina melhor — para todo mundo.",
      "Nas próximas semanas, este blog vai destrinchar essas engrenagens uma a uma: graduação, arbitragem, cobertura esportiva, linguagem de corredor e o famoso 'aqui nunca teve problema disso'.",
    ],
  },
  {
    slug: "faixa-preta-tempo-desigual",
    title: "A faixa preta custa mais caro para elas",
    excerpt:
      "Dados de federações mostram intervalos maiores entre graduações femininas. Investigamos o que sustenta essa diferença.",
    category: "Investigação",
    date: "3 de agosto de 2026",
    readingTime: "11 min",
    author: "Redação",
    body: [
      "Graduação é uma decisão humana disfarçada de mérito objetivo. Quando o critério é 'maturidade no tatame', a subjetividade entra pela porta da frente.",
      "Conversamos com atletas de judô, jiu-jitsu e karatê que descreveram o mesmo padrão: mais tempo entre faixas, menos convites para seminários e a exigência recorrente de 'provar de novo' aquilo que já foi provado.",
      "A saída não é baixar critério. É tornar o critério público, escrito e auditável — com prazos, requisitos técnicos e registro de avaliações acessível aos alunos.",
    ],
  },
  {
    slug: "professora-nao-e-auxiliar",
    title: "Professora não é auxiliar",
    excerpt:
      "Elas dão aula, montam plano de treino e levam equipe para competição. Nos cartazes, continuam aparecendo em letra menor.",
    category: "Reportagem",
    date: "24 de julho de 2026",
    readingTime: "9 min",
    author: "Redação",
    body: [
      "O cargo existe, o salário às vezes não. Muitas instrutoras acumulam funções administrativas, pedagógicas e de acolhimento sem que isso apareça em contrato.",
      "Quando aparece no material de divulgação da academia, o nome delas costuma vir associado a 'turma feminina' ou 'infantil' — nichos que a estrutura trata como periferia da técnica.",
      "Ouvimos sete professoras de cinco estados. O relato comum: reconhecimento chega depois do resultado das alunas, nunca antes.",
    ],
  },
  {
    slug: "guia-para-academias",
    title: "Um guia prático para academias que querem mudar",
    excerpt:
      "Doze medidas concretas, da política de contato físico à divisão de horários de sparring, que não custam nada além de vontade.",
    category: "Guia",
    date: "15 de julho de 2026",
    readingTime: "6 min",
    author: "Redação",
    body: [
      "Mudança de cultura começa com procedimento. Sem protocolo, tudo depende do humor do professor no dia.",
      "Comece pelo básico: canal de denúncia com responsável nomeado, critério de graduação por escrito, rotação obrigatória de parceiros no sparring e revisão da linguagem usada em aula.",
      "Nenhuma dessas medidas exige investimento financeiro. Todas exigem que alguém assuma a responsabilidade de aplicá-las.",
    ],
  },
  {
    slug: "linguagem-de-corredor",
    title: "\"Bateu na mulherada\": a linguagem que ensina hierarquia",
    excerpt:
      "As piadas de corredor não são acessórias ao treino. Elas são currículo oculto.",
    category: "Ensaio",
    date: "2 de julho de 2026",
    readingTime: "5 min",
    author: "Redação",
    body: [
      "Toda academia tem seu vocabulário. Nele, 'lutar como menina' segue funcionando como sinônimo de erro técnico.",
      "A linguagem organiza expectativa. Um aluno que ouve isso desde a faixa branca aprende, sem aula formal, quem ele deve levar a sério no tatame.",
      "Trocar o vocabulário é barato e desconfortável — combinação que costuma indicar que a mudança é real.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
