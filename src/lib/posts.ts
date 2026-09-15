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
        {
          q: "Algum professor conseguiu fazer diferente?",
          a: "Sim. Um professor passou a montar as duplas por peso e objetivo do treino. Sem discurso, sem favor. Em poucas semanas eu estava treinando com todo mundo e evoluindo muito mais.",
        },
        {
          q: "O que significa ocupar o centro hoje?",
          a: "É poder errar, tentar de novo e ser corrigida como atleta. Não quero um lugar de homenagem. Quero o mesmo espaço de aprendizado.",
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
        {
          q: "A espera afetou sua relação com o judô?",
          a: "Quase parei. Eu treinava mais, competia mais e continuava ouvindo que precisava ter paciência. O pior não era esperar; era não saber o que estavam esperando de mim.",
        },
        {
          q: "Como você avalia suas alunas hoje?",
          a: "Entrego uma lista de critérios no começo do ciclo e faço devolutivas a cada três meses. Ninguém deveria descobrir seu desempenho apenas no dia da troca de faixa.",
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
        {
          q: "Qual trabalho costumava ficar invisível?",
          a: "Eu acompanhava alunas que tinham medo de voltar depois de uma situação ruim, falava com famílias e adaptava treino para lesões. Tudo isso acontecia fora da aula e nunca entrava na conta.",
        },
        {
          q: "O que você faz diferente na sua equipe?",
          a: "Função, horário e pagamento ficam combinados por escrito. E quem criou uma aula ou preparou um atleta recebe crédito público pelo trabalho.",
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
        {
          q: "Como você soube que as medidas funcionaram?",
          a: "Passei a acompanhar permanência, faltas e desistências. Antes eu dizia que as portas estavam abertas; depois comecei a medir quem conseguia ficar.",
        },
        {
          q: "Qual foi o primeiro resultado visível?",
          a: "As alunas começaram a ocupar os horários da noite e a treinar com faixas mais altas. Quando o ambiente ficou previsível, elas pararam de gastar energia tentando se proteger.",
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
        {
          q: "O silêncio foi suficiente?",
          a: "Foi um começo, não o objetivo. Depois precisávamos aprender outras formas de cobrar intensidade. Sem isso, as pessoas só ficam com medo de falar e continuam pensando igual.",
        },
        {
          q: "Que frase você gostaria de ouvir no treino?",
          a: "Quero ouvir o nome do erro e como corrigir. 'Fecha a guarda, gira o quadril, controla a distância'. Técnica é mais útil do que qualquer piada.",
        },
      ],
    },
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
