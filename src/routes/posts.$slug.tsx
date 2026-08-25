import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getPost, posts } from "@/lib/posts";

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
