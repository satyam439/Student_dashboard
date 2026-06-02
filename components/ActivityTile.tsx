"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const activities = Array.from({ length: 35 });

  return (
    <motion.section
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 lg:col-span-2"
    >
      <h2 className="text-xl font-semibold">
        Activity
      </h2>

      <div className="mt-6 grid grid-cols-7 gap-3">
        {activities.map((_, index) => (
          <div
            key={index}
            className="h-4 w-4 rounded bg-green-500"
          />
        ))}
      </div>
    </motion.section>
  );
}