"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-linear-to-r from-zinc-900 to-zinc-800 p-8 lg:col-span-2 transition-all duration-300 hover:-translate-y-1"
    >
      <h1 className="text-4xl font-bold">
        Welcome Back, Satyam!
      </h1>

      <p className="mt-3 text-gray-400">
        7 Day Learning Streak
      </p>
    </motion.section>
  );
}