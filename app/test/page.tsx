import { supabase } from "@/lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("Courses")
    .select("*");

  console.log(data);
  console.log(error);

  return (
    <main className="p-8 text-white">
      <h1>Supabase Test</h1>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      {error && (
        <p>{error.message}</p>
      )}
    </main>
  );
}