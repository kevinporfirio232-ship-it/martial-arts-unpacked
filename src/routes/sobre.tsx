import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Guarda Aberta — blog sobre machismo nas artes marciais" },
      {
        name: "description",
        content:
          "Quem faz o Guarda Aberta, por que investigamos o machismo nas artes marciais e como enviar uma pauta ou relato.",
      },
      { property: "og:title", content: "Sobre o Guarda Aberta" },
      {
        property: "og:description",
        content:
          "Jornalismo independente sobre gênero, poder e hierarquia nos tatames brasileiros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow text-primary">Sobre</p>
        <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">
          Um blog que trata o tatame como território político
        </h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            O Guarda Aberta nasceu de uma pergunta simples feita dentro de uma academia:
            por que as mulheres treinam há tanto tempo e continuam sendo tratadas como
            visitantes?
          </p>
          <p>
            Publicamos ensaios, reportagens e guias práticos sobre machismo no judô, no
            jiu-jitsu, no karatê, no muay thai e no boxe. Não somos contra as artes
            marciais — somos contra a parte delas que ninguém quer nomear.
          </p>
          <p>
            Aceitamos relatos, dados de federações e pautas de qualquer lugar do Brasil.
            O anonimato é garantido quando solicitado.
          </p>
        </div>
        <div className="mt-10 rule-top pt-6">
          <p className="eyebrow text-muted-foreground">Contato</p>
          <a
            href="mailto:pauta@guardaaberta.com.br"
            className="link-underline font-display text-2xl"
          >
            pauta@guardaaberta.com.br
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
