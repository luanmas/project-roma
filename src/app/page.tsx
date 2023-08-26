'use client';

import TaskFormModal from "@/components/TaskFormModal";
import WeekDayCard from "@/components/WeekDayCard";
import { useState } from 'react';

export default function Home() {
  const [openModalForm , setOpenModalForm] = useState(false);

  function OnSubmit (){
    setOpenModalForm(false);
  }

  return (
    <main className="bg-slate-100 md:w-11/12 md:h-4/5 rounded-lg">
      <h2 className="font-bold md:text-5xl py-3 pl-3">Manager Routine</h2>
      <section className="grid grid-cols-7 grid-rows-1 ">
        <WeekDayCard />
        <TaskFormModal OnSubmit={OnSubmit} openModalForm={openModalForm} setOpenModalForm={setOpenModalForm}/>
      </section>
    </main>
  )
}
