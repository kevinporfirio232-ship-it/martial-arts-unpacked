import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { posts } from "@/lib/posts";
import heroImg from "@/assets/hero-dojo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guarda Aberta — o machismo que ninguém marca no tatame" },
      {
        name: "description",
        content:
          "Ensaios, entrevistas e guias sobre machismo no judô, jiu-jitsu, karatê e muay thai. Jornalismo independente sobre gênero e poder no tatame.",
      },
      { property: "og:title", content: "Guarda Aberta — o machismo que ninguém marca no tatame" },

      {
        property: "og:description",
        content:
          "Ensaios, reportagens e guias sobre gênero, poder e hierarquia dentro das artes marciais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const referenceGroups = [
  {
    title: "Autores brasileiros especializados",
    items: [
      {
        href: "https://seer.ufrgs.br/Movimento/article/view/2925",
        title: "Marco Antônio Ferretti e Jorge Dorfman Knijnik — Mulheres podem praticar lutas?",
        detail:
          "Estudo sobre as representações sociais de lutadoras universitárias (Movimento/UFRGS, 2007).",
      },
      {
        href: "https://revistas.ufg.br/fef/article/download/106/101/602",
        title: "Silvana Vilodre Goellner — Mulher e esporte no Brasil: entre incentivos e interdições",
        detail:
          "Referência nacional em história do esporte e gênero (Pensar a Prática/UFG, 2005).",
      },
      {
        href: "https://periodicos.uepa.br/index.php/cocar/article/view/9088",
        title: "Angelita Alice Jaeger e Tanise Zeppenfeld Arruda — Mulheres nas lutas e artes marciais",
        detail:
          "Revisão de 13 estudos brasileiros sobre gênero e protagonismo feminino nas lutas (Revista Cocar, UEPA).",
      },
      {
        href: "https://revistas.ufg.br/fef/article/view/57482",
        title: "Angelita Alice Jaeger, Paula Silva e Grasiela Santana — Mulheres atletas e artes marciais mistas",
        detail: "Revisão sistemática qualitativa sobre lutadoras de MMA (Pensar a Prática/UFG).",
      },
    ],
  },
  {
    title: "Estudos brasileiros sobre gênero nas lutas",
    items: [
      {
        href: "https://www.scielo.br/j/rbce/a/rnK9PDcXWyTTmKcFKyWywnw/?lang=pt",
        title: "“Estamos no treino, mas não podemos nos descuidar” — relações de gênero no karatê",
        detail:
          "Estudo etnográfico de George A. Lima, Luiz G. B. Rufino, Fabiana C. Turelli e Álvaro Millen Neto (RBCE, 2025).",
      },
      {
        href: "https://www.scielo.br/j/mov/a/CpNZB8CKQGt6s7h5RNwTfFK/?lang=pt",
        title: "Mulheres no boxe: negociações de masculinidade(s) e feminilidade(s) na academia",
        detail: "Pesquisa etnográfica sobre a prática feminina do boxe (Movimento/UFRGS).",
      },
      {
        href: "https://www.scielo.br/j/refuem/a/nBPXjnxwb9FRV7h4BDLjxVR/?lang=pt",
        title: "Mulheres em combate: representações de feminilidades em lutadoras de boxe e MMA",
        detail: "Entrevistas com atletas profissionais brasileiras (Revista da Educação Física/UEM).",
      },
      {
        href: "https://doi.org/10.20396/conex.v22i00.8677390",
        title: "Preconceito de gênero nas lutas esportivas",
        detail:
          "Entrevistas com praticantes de diferentes modalidades sobre barreiras e trajetórias (Conexões/Unicamp, 2024).",
      },
    ],
  },
  {
    title: "Complementos internacionais",
    items: [
      {
        href: "https://loicwacquant.org/body-and-soul-notebooks-of-an-apprentice-boxer/",
        title: "Loïc Wacquant — Body & Soul: Notebooks of an Apprentice Boxer",
        detail: "Etnografia clássica sobre corpo e masculinidade numa academia de boxe.",
      },
      {
        href: "https://link.springer.com/book/10.1057/9781137439369",
        title: "Alex Channon e Christopher R. Matthews (orgs.) — Global Perspectives on Women in Combat Sports",
        detail: "Coletânea sobre gênero e poder nos esportes de combate (Palgrave, 2015).",
      },
    ],
  },

  {
    title: "Normas e organismos públicos",
    items: [
      {
        href: "https://www.unwomen.org/en/articles/in-focus/women-and-girls-in-sport",
        title: "ONU Mulheres",
        detail: "Esporte para a igualdade de gênero",
      },
      {
        href: "https://www.unesco.org/en/sport-and-anti-doping/women-and-sport",
        title: "UNESCO",
        detail: "Igualdade de gênero por meio do esporte",
      },
      {
        href: "https://www.olympics.com/ioc/gender-equality",
        title: "Comitê Olímpico Internacional",
        detail: "Igualdade, diversidade e inclusão no esporte",
      },
      {
        href: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14597.htm",
        title: "Lei Geral do Esporte",
        detail: "Lei nº 14.597/2023 — direitos, integridade e combate à discriminação",
      },
    ],
  },
];

function Index() {

  const lead = posts[0];
  const rest = posts.slice(1);

  if (!lead) return null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary">Edição de agosto · Ensaio de capa</p>
              <h1 className="mt-5 text-5xl leading-[0.98] sm:text-7xl">{lead.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {lead.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
                <Link
                  to="/posts/$slug"
                  params={{ slug: lead.slug }}
                  className="bg-primary px-5 py-3 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-accent"
                >
                  Ler o ensaio
                </Link>
                <span>
                  {lead.date} · {lead.readingTime}
                </span>
              </div>
            </div>
            <img
              src={heroImg}
              alt="Judoca em pé num dojô escuro, em tom roxo"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </section>

        <section className="border-y border-border bg-secondary" aria-labelledby="projeto-title">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="eyebrow text-primary">Sobre o projeto</p>
                <h2 id="projeto-title" className="mt-4 text-3xl leading-tight sm:text-4xl">
                  Por que abrimos esta guarda
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                  O Guarda Aberta é um projeto editorial dedicado a investigar como o machismo
                  aparece no ensino, na convivência e nas oportunidades dentro das artes marciais.
                </p>
              </div>

              <dl className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                <div className="rule-top pt-5">
                  <dt className="eyebrow text-primary">01 · Objetivo</dt>
                  <dd className="mt-3 leading-relaxed">
                    Informar e estimular o debate sobre desigualdades de gênero nas academias,
                    dando visibilidade a experiências que muitas vezes são tratadas como casos
                    isolados.
                  </dd>
                </div>
                <div className="rule-top pt-5">
                  <dt className="eyebrow text-primary">02 · Justificativa</dt>
                  <dd className="mt-3 leading-relaxed">
                    Mulheres ainda enfrentam desconfiança técnica, menor reconhecimento e ambientes
                    pouco seguros. Discutir essas práticas ajuda a identificar problemas que a rotina
                    do tatame pode normalizar.
                  </dd>
                </div>
                <div className="rule-top pt-5">
                  <dt className="eyebrow text-primary">03 · Metodologia</dt>
                  <dd className="mt-3 leading-relaxed">
                    Os textos combinam pesquisa bibliográfica e documental, análise crítica e
                    entrevistas. Depoimentos reais são creditados; entrevistas criadas para ilustrar
                    o debate são identificadas como ficcionais.
                  </dd>
                </div>
                <div className="rule-top pt-5">
                  <dt className="eyebrow text-primary">04 · Resultados esperados</dt>
                  <dd className="mt-3 leading-relaxed">
                    Ampliar a percepção sobre o machismo no esporte e incentivar alunos, professores
                    e academias a adotarem relações mais respeitosas, critérios transparentes e
                    práticas inclusivas.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pt-16">
          <div className="rule-top flex items-baseline justify-between py-5">
            <h2 className="text-2xl">Publicações recentes</h2>
            <span className="eyebrow text-muted-foreground">{rest.length} textos</span>
          </div>
          <ul>
            {rest.map((post) => (
              <li key={post.slug} className="rule-top">
                <Link
                  to="/posts/$slug"
                  params={{ slug: post.slug }}
                  className="group grid gap-3 py-8 sm:grid-cols-[9rem_1fr] sm:gap-8"
                >
                  <div className="text-sm text-muted-foreground">
                    <p className="eyebrow text-primary">{post.category}</p>
                    <p className="mt-2">{post.date}</p>
                  </div>
                  <div>
                    <h3 className="text-2xl leading-tight sm:text-3xl">
                      <span className="link-underline">{post.title}</span>
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {post.readingTime} de leitura
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-6" aria-labelledby="fontes-title">
          <div className="rule-top grid gap-8 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow text-primary">Pesquisa</p>
              <h2 id="fontes-title" className="mt-4 text-3xl leading-tight">
                Fontes e referências
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                A apuração parte de estudos acadêmicos sobre gênero nas lutas, de autores
                especializados em artes marciais e de normas e iniciativas públicas sobre esporte,
                proteção e participação feminina.
              </p>
            </div>

            <div className="space-y-10">
              {referenceGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="eyebrow text-primary">{group.title}</h3>
                  <ul className="mt-4 divide-y divide-border border-y border-border">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-start justify-between gap-6 py-5"
                        >
                          <span>
                            <strong className="block font-semibold">{item.title}</strong>
                            <span className="mt-1 block text-sm text-muted-foreground">
                              {item.detail}
                            </span>
                          </span>
                          <span
                            aria-hidden="true"
                            className="text-primary transition-transform group-hover:translate-x-1"
                          >
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="newsletter" className="mx-auto mt-20 max-w-6xl px-6">
          <div className="bg-ink px-6 py-14 text-paper sm:px-14">
            <h2 className="max-w-2xl text-3xl leading-tight sm:text-4xl">
              Receba cada edição antes que ela vire discussão de vestiário.
            </h2>
            <form
              className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="seu@email.com"
                className="w-full border border-paper/30 bg-transparent px-4 py-3 text-paper placeholder:text-paper/50 focus:border-paper focus:outline-none"
              />
              <button
                type="submit"
                className="bg-paper px-6 py-3 font-semibold text-ink transition-opacity hover:opacity-85"
              >
                Assinar
              </button>
            </form>
            <p className="mt-3 text-sm text-paper/60">
              Uma edição por mês. Sem spam, sem sermão.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
