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
                A apuração parte de estudos, normas e iniciativas públicas sobre gênero, esporte,
                proteção e participação feminina.
              </p>
            </div>

            <ul className="divide-y divide-border border-y border-border">
              <li>
                <a
                  href="https://www.unwomen.org/en/news-stories/feature-story/2022/12/sports-for-generation-equality"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span>
                    <strong className="block font-semibold">ONU Mulheres</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Esporte para a igualdade de gênero
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.unesco.org/en/sport-and-anti-doping/gender-equality"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span>
                    <strong className="block font-semibold">UNESCO</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Igualdade de gênero por meio do esporte
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://olympics.com/ioc/gender-equality"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span>
                    <strong className="block font-semibold">Comitê Olímpico Internacional</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Igualdade, diversidade e inclusão no esporte
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14597.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <span>
                    <strong className="block font-semibold">Lei Geral do Esporte</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      Lei nº 14.597/2023 — direitos, integridade e combate à discriminação
                    </span>
                  </span>
                  <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
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
