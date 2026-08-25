import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Guarda Aberta"
            width={40}
            height={40}
            className="h-10 w-10 object-contain mix-blend-multiply"
          />
          <span className="font-display text-lg leading-none font-semibold tracking-tight">
            Guarda Aberta
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="link-underline hidden sm:inline">
            Edições
          </Link>
          <Link to="/sobre" className="link-underline">
            Sobre
          </Link>
          <a href="#newsletter" className="link-underline text-primary font-semibold">
            Assinar
          </a>
        </nav>
      </div>
    </header>
  );
}
