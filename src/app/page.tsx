'use client';

import WeekDayCard from "@/components/WeekDayCard";

export default function Home() {

  return (
    <main className="bg-slate-100 md:w-11/12 md:h-4/5 rounded-lg">
      <h2 className="font-bold md:text-5xl py-3 pl-3">Manager Routine</h2>
      <section className="grid grid-cols-7 grid-rows-1 ">
        <WeekDayCard />
      </section>
    </main>
  )
}
