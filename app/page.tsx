import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <BentoGrid />
      </section>
    </main>
  );
}