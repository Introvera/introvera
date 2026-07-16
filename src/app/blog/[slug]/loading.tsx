export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center pt-44 pb-24">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-foreground/10 border-t-[var(--color-accent)] rounded-full animate-spin"></div>
        <p className="text-foreground/60 text-sm font-medium animate-pulse">Loading post...</p>
      </div>
    </div>
  );
}
