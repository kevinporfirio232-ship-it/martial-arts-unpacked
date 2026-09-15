export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Guarda Aberta — jornalismo sobre gênero e artes marciais.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
