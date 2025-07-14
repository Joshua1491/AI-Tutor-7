export default function LoadingVideoMode() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24">
      <span className="h-8 w-8 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      <p className="text-sm text-muted-foreground">Fetching videos…</p>
    </div>
  );
}
