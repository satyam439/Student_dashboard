import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: course, error } = await supabase
    .from("Courses")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !course) {
    return (
      <main className="min-h-screen bg-black p-8 text-white">
        <Link
  href="/"
  className="inline-block rounded-lg bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
>
  ← Back to Dashboard
</Link>
        <h1 className="text-3xl font-bold">
          Course Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <Link
        href="/"
        className="inline-block rounded-lg bg-zinc-800 px-4 py-2 transition hover:bg-zinc-700"
      >
        ← Back to Dashboard
      </Link>
  
      <h1 className="mt-6 text-4xl font-bold">
        {course.title}
      </h1>
  
      <div className="mt-4 h-4 w-full rounded-full bg-zinc-700">
  <div
    className="h-4 rounded-full bg-green-500"
    style={{ width: `${course.progress}%` }}
  />
</div>
  
      <p className="mt-2 text-gray-500">
        Course ID: {course.id}
      </p>
    </main>
  );
}