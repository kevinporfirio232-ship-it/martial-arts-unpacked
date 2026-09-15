export type Interview = {
  subject: string;
  role: string;
  intro: string;
  qa: { q: string; a: string }[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  body: string[];
  interview?: Interview;
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
    ],
    interview: {
      subject: "Dandara Vieira, 34",
      role: "faixa marrom de jiu-jitsu, Recife (PE)",
      intro:
        "Dandara treina há onze anos e diz ter passado os cinco primeiros convencida de que o problema era ela.",
      qa: [
        {
          q: "Quando você percebeu que o tatame tinha lados diferentes?",
          a: "No dia em que pedi para treinar com um cara do meu peso e o professor disse 'vai ali com a menina nova, pega leve'. Eu não tinha pedido leve. Eu tinha pedido treino.",
        },
        {
          q: "Isso muda o que você aprende?",
          a: "Muda tudo. Técnica você só entende sob pressão. Se ninguém nunca te pressiona, você chega na competição descobrindo o básico na hora errada.",
        },
        {
          q: "O que você diria para uma faixa branca hoje?",
          a: "Que exija o rolinho duro. E que anote quantas vezes precisou pedir. Esse número diz mais sobre a academia do que qualquer mural de campeões.",
        },
      ],
    },
  },
  {
    slug: "faixa-preta-tempo-desigual",
    title: "A faixa preta custa mais caro para elas",
    excerpt:
      "Relatos de atletas descrevem intervalos maiores entre graduações femininas. Investigamos o que sustenta essa diferença.",
    category: "Entrevista",
    date: "3 de agosto de 2026",
    readingTime: "11 min",
    author: "Redação",
    body: [
      "Graduação é uma decisão humana disfarçada de mérito objetivo. Quando o critério é 'maturidade no tatame', a subjetividade entra pela porta da frente.",
      "Conversamos com atletas de judô, jiu-jitsu e karatê que descreveram o mesmo padrão: mais tempo entre faixas, menos convites para seminários e a exigência recorrente de 'provar de novo' aquilo que já foi provado.",
      "A saída não é baixar critério. É tornar o critério público, escrito e auditável — com prazos, requisitos técnicos e registro de avaliações acessível aos alunos.",
    ],
    interview: {
      subject: "Suellen Kawamoto, 41",
      role: "faixa preta de judô, Londrina (PR)",
      intro:
        "Suellen levou sete anos para sair da marrom. Dois colegas da mesma turma levaram três.",
      qa: [
        {
          q: "Você chegou a perguntar o porquê?",
          a: "Perguntei três vezes. A resposta foi sempre uma variação de 'você ainda não está madura'. Ninguém soube me dizer o que faltava em técnica.",
        },
        {
          q: "E quando finalmente veio a faixa?",
          a: "Veio depois que duas alunas minhas pegaram medalha estadual. Ou seja: eu fui graduada pelo resultado das outras, não pelo meu.",
        },
        {
          q: "O que resolveria isso?",
          a: "Critério escrito na parede. Data, requisito, avaliador. Quando está no papel, a desculpa não cabe.",
        },
      ],
    },
  },
  {
    slug: "professora-nao-e-auxiliar",
    title: "Professora não é auxiliar",
    excerpt:
      "Elas dão aula, montam plano de treino e levam equipe para competição. Nos cartazes, continuam aparecendo em letra menor.",
    category: "Entrevista",
    date: "24 de julho de 2026",
    readingTime: "9 min",
    author: "Redação",
    body: [
      "O cargo existe, o salário às vezes não. Muitas instrutoras acumulam funções administrativas, pedagógicas e de acolhimento sem que isso apareça em contrato.",
      "Quando aparece no material de divulgação da academia, o nome delas costuma vir associado a 'turma feminina' ou 'infantil' — nichos que a estrutura trata como periferia da técnica.",
    ],
    interview: {
      subject: "Rita Boaventura, 38",
      role: "instrutora de muay thai, Belo Horizonte (MG)",
      intro:
        "Rita comanda quatro turmas por dia e descobriu num cartaz que era 'apoio pedagógico'.",
      qa: [
        {
          q: "Como foi ver o cartaz?",
          a: "Eu ri, depois fiquei com raiva. Eu tinha montado o plano de treino da equipe inteira que estava naquela foto.",
        },
        {
          q: "Você reclamou?",
          a: "Reclamei. Trocaram para 'professora assistente'. Assistente de quem, até hoje ninguém explicou.",
        },
        {
          q: "O que mudou depois?",
          a: "Abri minha própria academia com uma regra: todo nome no cartaz vem com a função real e o mesmo tamanho de letra.",
        },
      ],
    },
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
    interview: {
      subject: "Neide Barroso, 52",
      role: "dona de academia de karatê, Santos (SP)",
      intro:
        "Neide aplicou nove das doze medidas em um ano e diz que perdeu dois alunos e ganhou trinta.",
      qa: [
        {
          q: "Qual medida gerou mais resistência?",
          a: "A rotação de parceiros. Os veteranos adoravam escolher com quem treinavam. Escolher parceiro é escolher não perder.",
        },
        {
          q: "Valeu a pena?",
          a: "As duas pessoas que saíram eram exatamente as que faziam as alunas desistirem. Foi o melhor prejuízo da minha vida.",
        },
      ],
    },
  },
  {
    slug: "linguagem-de-corredor",
    title: '"Bateu na mulherada": a linguagem que ensina hierarquia',
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
    interview: {
      subject: "Joana Ferreyra, 27",
      role: "atleta de boxe, Porto Alegre (RS)",
      intro: "Joana começou a anotar num caderno as frases que ouvia no ginásio.",
      qa: [
        {
          q: "Por que anotar?",
          a: "Porque isoladamente cada frase é 'só brincadeira'. Juntas, viram um manual de como não me levar a sério.",
        },
        {
          q: "Você mostrou para alguém?",
          a: "Mostrei para o técnico. Ele leu quieto e no treino seguinte falou com o grupo. Não virou paraíso, mas o corredor ficou mais silencioso.",
        },
      ],
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
