export default function Loading() {
    return (
      <main className="flex min-h-screen bg-black p-6">
        <section className="grid flex-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="h-40 animate-pulse rounded-2xl bg-zinc-800"
            />
          ))}
        </section>
      </main>
    );
  }