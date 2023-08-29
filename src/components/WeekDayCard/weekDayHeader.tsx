'use client'

import { useFormModalStore } from "@/store/FormModal";

type WeekDayHeaderProps = {
    day : string;
}

export default function WeekDayHeader ({day} : WeekDayHeaderProps) {
    const { setOpenModalForm } = useFormModalStore();

    return (
        <div className="flex flex-col">
            <section className="flex md:justify-between md:py-2">
                <h3>{day}</h3>
                <button onClick={() => setOpenModalForm(true)} className="bg-slate-300 md:px-2 font-bold rounded">
                    +
                </button>
                
            </section>
        </div> 
    )
}