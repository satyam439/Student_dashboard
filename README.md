# Student Dashboard

A modern learning dashboard built using Next.js, Supabase, Tailwind CSS, and Framer Motion. The application fetches course data from Supabase using Next.js Server Components and displays it in a responsive Bento Grid layout.

## Tech Stack

* Next.js (App Router)
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React

## Architecture

### Server Components

* BentoGrid
* Course Details Page

### Client Components

* Sidebar
* CourseCard
* HeroTile
* ActivityTile

### Data Flow

* Server Components fetch course data from Supabase.
* Client Components handle animations and interactions.
* Dynamic routing is implemented using `/courses/[id]`.

## Features

* Bento Grid Dashboard
* Dynamic Course Cards
* Dynamic Icon Rendering
* Animated Progress Bars
* Dynamic Course Detail Pages
* Loading States
* Error Handling
* Responsive Layout
* Supabase Integration
* Framer Motion Animations

## Deployment

* Hosted on Vercel
* Source code hosted on GitHub

## Environment Variables

Required:

* NEXT_PUBLIC_SUPABASE_URL
* NEXT_PUBLIC_SUPABASE_ANON_KEY

## Challenges Faced

* Dynamic icon rendering from Supabase data
* Vercel environment variable configuration
* Dynamic routing with Next.js App Router
* Server/Client component separation

## Useful Links

### GitHub Repository

https://github.com/satyam439/Student_dashboard

### Live Demo

https://project-kjy65-5071fvhqk-satyam-sahib-sharma-s-projects.vercel.app
