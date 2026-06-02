import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";

import { supabase } from "@/lib/supabase";

export default async function BentoGrid() {
  const { data: courses, error } = await supabase
    .from("Courses")
    .select("*");

  if (error) {
    return (
      <section className="rounded-2xl bg-red-900 p-6">
        <h2 className="text-xl font-bold">
          Error
        </h2>

        <p className="mt-2 text-red-200">
          Failed to load courses from database.
        </p>
      </section>
    );
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <HeroTile />

      {courses?.map((course, index) => (
        <CourseCard
          key={course.id}
          title={course.title}
          id={course.id}
          progress={course.progress}
          iconName={course.icon_name}
          delay={index * 0.15}
        />
      ))}

      <ActivityTile />
    </section>
  );
}