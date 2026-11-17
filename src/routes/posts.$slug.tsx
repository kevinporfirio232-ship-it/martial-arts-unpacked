import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getPost, posts, type Interview } from "@/lib/posts";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Guarda Aberta` : "Guarda Aberta";

    const description =
      loaderData?.excerpt ?? "Blog sobre machismo nas artes marciais.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <p className="eyebrow text-primary">{post.category}</p>
        <h1 className="mt-4 text-4xl leading-[1.03] sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-sm text-muted-foreground">
          {post.author} · {post.date} · {post.readingTime} de leitura
        </p>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
          {post.body.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-xl text-foreground" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>

        {post.interview && (
          <section className="rule-top mt-14 pt-8">
            <p className="eyebrow text-primary">Entrevista</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              {post.interview.subject}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{post.interview.role}</p>
            <InterviewFicha interview={post.interview} />
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              {post.interview.intro}
            </p>
            <dl className="mt-8 space-y-6">
              {post.interview.qa.map((item, i) => (
                <div key={i} className="border-l-2 border-primary pl-5">
                  <dt className="font-display text-lg font-semibold">{item.q}</dt>
                  <dd className="mt-2 text-lg leading-relaxed text-foreground/85">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            {post.interview.note && (
              <p className="mt-6 text-sm text-muted-foreground">
                {post.interview.note}
              </p>
            )}
          </section>
        )}


        <div className="rule-top mt-14 pt-8">
          <h2 className="text-xl">Continue lendo</h2>
          <ul className="mt-4 space-y-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  to="/posts/$slug"
                  params={{ slug: other.slug }}
                  className="link-underline font-display text-lg"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function InterviewFicha({ interview }: { interview: Interview }) {
  const fields = [
    { label: "Arte marcial", value: interview.martialArt },
    { label: interview.beltLabel ?? "Faixa", value: interview.belt },
    { label: "Tempo de prática", value: interview.practiceTime },
    { label: "Tempo de função", value: interview.teachingTime },
    { label: "Idade", value: interview.age },
    { label: "Onde atua", value: interview.affiliation },
  ].filter((field): field is { label: string; value: string } => Boolean(field.value));

  if (fields.length === 0) return null;

  return (
    <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg border border-border bg-muted/40 p-5 sm:grid-cols-3">
      {fields.map((field) => (
        <div key={field.label}>
          <dt className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {field.label}
          </dt>
          <dd className="mt-1 text-sm font-medium leading-snug text-foreground">
            {field.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
