'use client'

import { useFormModalStore } from "@/store/FormModal";
import TaskModalDetails from "../TaskDetailsModal";
import ContentWeekDay from "./contentWeekDay";

type task = {
    title : string;
    description : string;
    id : number;
}

type WeekDayHeaderProps = {
    day : string;
    tasks : task[];
}

export default function WeekDayHeader ({day , tasks} : WeekDayHeaderProps) {
    const { setOpenModalForm } = useFormModalStore();

    return (
        <div className="flex flex-col">
            <section className="flex md:justify-between md:py-2">
                <h3>{day}</h3>
                <button onClick={() => setOpenModalForm(true)} className="bg-slate-300 md:px-2 font-bold rounded">
                    +
                </button>
                <ContentWeekDay tasks={tasks}/>
            </section>
        </div> 
    )
}