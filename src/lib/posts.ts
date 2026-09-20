export type Interview = {
  subject: string;
  role: string;
  intro: string;
  qa: { q: string; a: string }[];
  note?: string;
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
    title: "Quem manda no centro do tatame?",
    excerpt:
      "Quem ocupa o centro do dojo, quem carrega o material, quem é corrigido em voz alta. A hierarquia invisível começa muito antes da primeira queda.",
    category: "Ensaio",
    date: "12 de agosto de 2026",
    readingTime: "10 min",
    author: "Redação",
    body: [
      "Existe uma coreografia silenciosa em quase todo dojo. Ela não está escrita no regulamento nem é dita em voz alta pelo professor, mas todo mundo aprende rápido: há um lado do tatame onde se treina forte e outro onde se treina 'com cuidado'.",
      "Essa divisão raramente é justificada por técnica. Ela é justificada por corpo. E é aí que o machismo deixa de ser uma opinião isolada de um aluno mal-educado e passa a ser estrutura: uma forma de organizar quem aprende o quê, com que intensidade e em quanto tempo.",
      "O centro do tatame é também um lugar simbólico. É nele que o professor demonstra golpes, escolhe os parceiros mais experientes e observa quem está pronto para competir. Quando as mulheres são direcionadas para as bordas, recebem menos correções, menos desafios e menos oportunidades de serem vistas.",
      "A desigualdade aparece em tarefas aparentemente pequenas. Alunas recolhem o material, acolhem iniciantes e ajudam nas turmas infantis; alunos são chamados para mostrar técnicas e conduzir o aquecimento. O cuidado vira obrigação feminina, enquanto a autoridade continua associada aos homens.",
      "Também existe o argumento da proteção. Evitar um treino incompatível em peso ou experiência é responsabilidade pedagógica, mas presumir fragilidade apenas pelo gênero não protege: limita. A regra justa deve considerar tamanho, graduação, intensidade e consentimento para qualquer dupla.",
      "Reconhecer isso não enfraquece a arte marcial. Pelo contrário: obriga a academia a explicar suas escolhas pedagógicas em vez de repeti-las por hábito. Um tatame que se explica é um tatame que ensina melhor — para todo mundo.",
      "Mudar essa dinâmica exige observação deliberada. Quem demonstra as técnicas? Quem recebe as correções mais detalhadas? Quem ocupa o centro nas fotos e cerimônias? Contar essas respostas durante um mês pode revelar padrões que a convivência normalizou durante anos.",
      "O centro não precisa ter dono. Quando o acesso ao treino intenso, à atenção do professor e às posições de liderança segue critérios claros, a hierarquia deixa de reproduzir gênero e volta a cumprir sua função: organizar o aprendizado.",
    ],
    interview: {
      subject: "Entrevista com o professor Luciano",
      role: "G13 BJJ — sobre inclusão e respeito nas artes marciais",
      intro:
        "O professor compartilha sua visão sobre o papel das academias no combate ao preconceito e sobre como acolher quem deseja começar a treinar.",
      qa: [
        {
          q: "O que as academias e os professores podem fazer ativamente no dia a dia para combater o machismo e criar um ambiente mais inclusivo e seguro para todos?",
          a: "O que nos cabe é orientar os alunos que venham a agir de forma contrária à filosofia e às diretrizes da academia. Hoje em dia, não cabe mais esse tipo de preconceito, tendo em vista as várias campeãs que temos no nosso esporte.",
        },
        {
          q: "Você já presenciou ou ouviu relatos de situações em que alunas foram subestimadas na capacidade técnica ou na força física em comparação aos homens?",
          a: "Nunca tive o desprazer de presenciar tal preconceito, tendo em vista que nossos mestres da G13 BJJ sempre pregaram que alunos e professores não devem ter esse tipo de preconceito.",
        },
        {
          q: "Qual conselho você daria para uma jovem que tem vontade de começar nas artes marciais, mas tem receio de entrar em um ambiente tradicionalmente dominado por homens?",
          a: "Procure uma boa escola, que tenha uma boa didática e um ambiente acolhedor, e continue evoluindo no esporte.",
        },
      ],
      note: "Entrevista enviada especialmente para esta publicação.",
    },
  },
  {
    slug: "faixa-preta-tempo-desigual",
    title: "A faixa preta custa mais caro para elas",
    excerpt:
      "Relatos de atletas descrevem intervalos maiores entre graduações femininas. Investigamos o que sustenta essa diferença.",
    category: "Reportagem",
    date: "3 de agosto de 2026",
    readingTime: "13 min",
    author: "Redação",
    body: [
      "Graduação é uma decisão humana disfarçada de mérito objetivo. Quando o critério é 'maturidade no tatame', a subjetividade entra pela porta da frente.",
      "Conversamos com atletas de judô, jiu-jitsu e karatê que descreveram o mesmo padrão: mais tempo entre faixas, menos convites para seminários e a exigência recorrente de 'provar de novo' aquilo que já foi provado.",
      "A demora não produz apenas frustração. A faixa determina quem pode competir em certas categorias, assumir turmas e receber por aulas. Adiar uma graduação sem justificativa técnica interfere na renda, na visibilidade e na permanência das atletas no esporte.",
      "Os critérios vagos mudam conforme a pessoa avaliada. A confiança de um homem pode ser lida como liderança; a de uma mulher, como arrogância. A cautela masculina vira disciplina; a feminina, falta de espírito competitivo. Sem parâmetros comuns, preconceitos antigos ganham aparência de avaliação técnica.",
      "Há ainda uma armadilha estatística. Como menos mulheres chegam às faixas avançadas, professores dizem não encontrar parceiras adequadas para avaliá-las. A ausência, criada por anos de evasão e pouca oportunidade, passa então a justificar novas demoras.",
      "A saída não é baixar critério. É tornar o critério público, escrito e auditável — com prazos, requisitos técnicos e registro de avaliações acessível aos alunos.",
      "Uma avaliação mais justa pode reunir domínio técnico, frequência, segurança na execução e desempenho em situações definidas. Se houver uma reprovação, a atleta precisa saber exatamente o que deve desenvolver e quando será reavaliada.",
      "Transparência não transforma faixa em prêmio automático. Ela protege a exigência técnica de preferências pessoais e permite que cada praticante construa um caminho possível até a próxima graduação.",
    ],
    interview: {
      subject: "Entrevista com o professor André",
      role: "Professor de jiu-jitsu — sobre ensino e incentivo às mulheres",
      intro:
        "O professor conta como conduz as aulas sem distinção de gênero e explica como sua academia incentiva as mulheres a seguir até a faixa preta.",
      qa: [
        {
          q: "Existe alguma diferença na forma como você aborda o ensino ou a correção de golpes com alunos do sexo masculino e feminino?",
          a: "Nas minhas aulas, não fazemos distinção de gênero. Ensino todos com igualdade e muito respeito.",
        },
        {
          q: "Na sua modalidade, há incentivo para que mulheres avancem para a faixa preta e se tornem instrutoras?",
          a: "Na minha modalidade, que é o jiu-jitsu, incentivo todas as mulheres a praticarem nosso esporte. Temos mais de 40% de mulheres no nosso tatame, fazemos ações pontuais e temos até um horário específico para elas. Além disso, temos professoras e coaches na nossa grade de professores.",
        },
        {
          q: "Qual conselho você daria para uma jovem que tem vontade de começar nas artes marciais, mas tem receio de entrar em um ambiente tradicionalmente dominado por homens?",
          a: "Sabemos que a nossa arte marcial é predominantemente praticada por homens e temos uma crescente muito significativa de mulheres no tatame. O conselho que dou é que procurem um ambiente que tenha práticas de inclusão e respeito pelas mulheres, profissionais qualificados e com histórico de trabalho com mulheres. Lugar de mulher é no tatame e onde ela quiser estar.",
        },
      ],
      note: "Entrevista enviada especialmente para esta publicação.",
    },
  },
  {
    slug: "professora-nao-e-auxiliar",
    title: "Professora não é auxiliar",
    excerpt:
      "Elas dão aula, montam plano de treino e levam equipe para competição. Nos cartazes, continuam aparecendo em letra menor.",
    category: "Ensaio",
    date: "24 de julho de 2026",
    readingTime: "12 min",
    author: "Redação",
    body: [
      "O cargo existe, o salário às vezes não. Muitas instrutoras acumulam funções administrativas, pedagógicas e de acolhimento sem que isso apareça em contrato.",
      "Quando aparece no material de divulgação da academia, o nome delas costuma vir associado a 'turma feminina' ou 'infantil' — nichos que a estrutura trata como periferia da técnica.",
      "O apagamento acontece mesmo quando a professora planeja o treino principal. Ela prepara a sequência, acompanha a evolução dos atletas e resolve conflitos, mas outro nome aparece como responsável pela equipe. Seu trabalho é tratado como ajuda; o dos homens, como comando.",
      "Essa diferença também chega ao pagamento. Funções de acolhimento são apresentadas como extensão natural da personalidade feminina e, por isso, raramente entram na carga horária. Responder mensagens de alunas, adaptar exercícios e receber denúncias consome tempo e exige competência profissional.",
      "Concentrar professoras apenas em turmas femininas pode parecer inclusão, mas se torna limite quando elas não têm acesso às equipes adultas, competitivas ou avançadas. A especialização deve ser uma escolha da profissional, não o único lugar que a academia aceita oferecer.",
      "Reconhecimento começa pelo nome correto do cargo, por remuneração compatível e por autonomia. Uma professora precisa participar das decisões sobre calendário, graduação, orçamento e estratégia de competição — não apenas executar planos definidos por outros.",
      "Academias podem revisar contratos e materiais de divulgação, registrar quem criou cada programa e estabelecer o mesmo caminho de promoção para toda a equipe. Dar crédito não é gentileza: é tornar visível quem já sustenta o trabalho cotidiano.",
    ],
  },
  {
    slug: "guia-para-academias",
    title: "Um guia prático para academias que querem mudar",
    excerpt:
      "Doze medidas concretas, da política de contato físico à divisão de horários de sparring, que não custam nada além de vontade.",
    category: "Guia",
    date: "15 de julho de 2026",
    readingTime: "10 min",
    author: "Redação",
    body: [
      "Mudança de cultura começa com procedimento. Sem protocolo, tudo depende do humor do professor no dia.",
      "Comece pelo básico: canal de denúncia com responsável nomeado, critério de graduação por escrito, rotação obrigatória de parceiros no sparring e revisão da linguagem usada em aula.",
      "O canal de denúncia precisa explicar quem recebe o relato, em quanto tempo haverá resposta e como a pessoa será protegida de retaliação. Uma caixa de mensagens sem responsável definido apenas transfere o silêncio para outro lugar.",
      "No treino, a rotação de duplas amplia experiências e impede que grupos fechados controlem o acesso aos parceiros mais técnicos. Peso, graduação e objetivo da atividade devem orientar os pares, sempre com o direito de recusar contato sem precisar se justificar diante da turma.",
      "A política de contato físico deve ser apresentada a todas as pessoas na matrícula e retomada periodicamente. Ajustar uniforme, demonstrar uma posição ou imobilizar alguém exige comunicação clara. Consentimento não atrapalha a técnica; ele cria segurança para que ela seja praticada.",
      "Também é importante registrar quem recebe oportunidades. Seminários, bolsas, horários nobres e vagas em campeonatos podem ser acompanhados em uma planilha simples. Os números mostram se a promessa de igualdade aparece nas decisões concretas.",
      "Professores precisam saber interromper comentários sexistas no momento em que acontecem. Rir e conversar depois comunica tolerância ao grupo. Uma correção curta e direta protege quem foi atingida e ensina qual comportamento não faz parte daquele espaço.",
      "Nenhuma dessas medidas exige investimento financeiro. Todas exigem que alguém assuma a responsabilidade de aplicá-las.",
      "A revisão deve acontecer em ciclos. A cada três meses, direção, equipe e alunos podem avaliar denúncias, evasão, participação nas turmas e distribuição de graduações. Política que não é medida corre o risco de virar apenas texto na parede.",
      "Uma academia não muda porque se declara acolhedora. Ela muda quando suas regras funcionam também nos dias difíceis, inclusive quando a denúncia envolve um atleta premiado, um professor antigo ou um cliente importante.",
    ],
  },
  {
    slug: "linguagem-de-corredor",
    title: '"Bateu na mulherada": a linguagem que ensina hierarquia',
    excerpt:
      "As piadas de corredor não são acessórias ao treino. Elas são currículo oculto.",
    category: "Ensaio",
    date: "2 de julho de 2026",
    readingTime: "9 min",
    author: "Redação",
    body: [
      "Toda academia tem seu vocabulário. Nele, 'lutar como menina' segue funcionando como sinônimo de erro técnico.",
      "A linguagem organiza expectativa. Um aluno que ouve isso desde a faixa branca aprende, sem aula formal, quem ele deve levar a sério no tatame.",
      "As frases parecem pequenas porque chegam disfarçadas de motivação. 'Não deixa ela te bater' pode ser gritado para estimular um atleta, mas ensina que perder para uma mulher é uma vergonha particular — maior do que qualquer erro de defesa ou estratégia.",
      "O efeito não termina quando a piada acaba. Mulheres passam a treinar sob uma cobrança dupla: precisam executar a técnica e administrar a reação do parceiro caso tenham sucesso. Algumas reduzem a intensidade para evitar hostilidade; outras abandonam duplas em que deveriam estar aprendendo.",
      "A linguagem também determina quem parece pertencer. Chamar todos os atletas de 'os meninos', elogiar agressividade apenas nos homens e comentar o corpo das mulheres transforma a aula em um lembrete constante de que o padrão esperado não foi construído para elas.",
      "Trocar o vocabulário é barato e desconfortável — combinação que costuma indicar que a mudança é real.",
      "A correção pode ser objetiva. Em vez de usar gênero como medida de competência, o professor nomeia o problema técnico: base alta, guarda aberta, distância errada. A aula fica mais precisa e deixa de depender da humilhação para produzir intensidade.",
      "Não basta proibir uma lista de expressões. A equipe precisa construir repertório para incentivar, corrigir e brincar sem transformar uma identidade em ofensa. O objetivo não é um ginásio silencioso, mas um espaço em que ninguém seja diminuído para que outra pessoa se sinta forte.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
