export default function Loading() {
    return (
      <main className="min-h-screen bg-black p-8 text-white">
        <section className="animate-pulse">
          <div className="h-12 w-64 rounded bg-zinc-800" />
          <div className="mt-6 h-32 rounded bg-zinc-800" />
          <div className="mt-4 h-32 rounded bg-zinc-800" />
        </section>
      </main>
    );
  }