"use client";

import {
  BookOpen,
  Rocket,
  Code,
  Database,
} from "lucide-react";

import { motion } from "framer-motion";

interface CourseCardProps {
  title: string;
  progress: number;
  delay: number;
  iconName: string;
}

export default function CourseCard({
  title,
  progress,
  delay,
  iconName,
}: CourseCardProps) {
  let Icon = BookOpen;

  if (iconName === "Rocket") {
    Icon = Rocket;
  }

  if (iconName === "Code") {
    Icon = Code;
  }

  if (iconName === "Database") {
    Icon = Database;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-2xl bg-linear-to-br from-zinc-900 via-zinc-900 to-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <motion.div
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{
    duration: 1,
    delay: delay + 0.2,
  }}
  className="h-2 rounded-full bg-green-500"
/>

      <div className="mt-4">
      <Icon size={32} className="mb-4 text-red-400" />

  <div className="h-2 w-full rounded-full bg-zinc-700">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.article>
  );
}