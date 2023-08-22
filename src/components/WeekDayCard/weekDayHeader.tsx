'use client'

import { useModalForm } from "../ContextProviderModal"

type WeekDayHeaderProps = {
    day : string;
}

export default function WeekDayHeader ({day} : WeekDayHeaderProps) {
    const { setOpenModalForm } = useModalForm();

    return (
        <div className="flex md:justify-between md:py-2">
            <h3>{day}</h3>
            <button onClick={() => setOpenModalForm(true)} className="bg-slate-300 md:px-2 font-bold rounded">+</button>
        </div>
    )
}