"use client";

import { useState } from "react";
import {
  Home,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  const items = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Courses",
      icon: BookOpen,
    },
    {
      name: "Activity",
      icon: BarChart3,
    },
  ];

  return (
    <aside className="w-20 lg:w-64 border-r border-gray-800 bg-black p-4">
      <h2 className="mb-8 hidden text-2xl font-bold lg:block">
        Dashboard
      </h2>

      <ul className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-all duration-300
              ${
                active === item.name
                  ? "bg-zinc-800 text-white"
                  : "text-gray-400 hover:bg-zinc-900"
              }`}
            >
              <Icon size={20} />

              <span className="hidden lg:block">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}