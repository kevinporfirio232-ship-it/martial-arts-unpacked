import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { posts } from "@/lib/posts";
import heroImg from "@/assets/hero-dojo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guarda Aberta — machismo nas artes marciais" },
      {
        name: "description",
        content:
          "Ensaios, reportagens e guias sobre machismo no judô, jiu-jitsu, karatê e muay thai. Jornalismo independente sobre gênero e poder no tatame.",
      },
      { property: "og:title", content: "Guarda Aberta — machismo nas artes marciais" },
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
  const lead = posts[0]!;
  const rest = posts.slice(1);

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

        <section className="mx-auto max-w-6xl px-6">
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
