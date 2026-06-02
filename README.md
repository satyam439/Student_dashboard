# Student Dashboard

A modern learning dashboard built with Next.js, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Features

- Bento Grid Layout
- Responsive Sidebar
- Dynamic Course Data from Supabase
- Animated Progress Bars
- Activity Graph
- Framer Motion Animations
- Loading States
- Error Handling

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Setup

1. Clone repository

```bash
npm install
```

2. Create .env.local

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

3. Run

```bash
npm run dev
```

## Architecture

- Server Components fetch course data from Supabase.
- Client Components handle animations and interactions.
- Course cards are dynamically rendered from database records.