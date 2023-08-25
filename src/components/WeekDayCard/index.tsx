import TaskFormModal from "../TaskFormModal";
import WeekDayHeader from "./weekDayHeader";
import { ContextModalProvider } from "../../hook/ContextProviderModal";

export default function WeekDayCards () {
    return(
        weekDays.map((day) => (
            <section className="md:px-3">
                <ContextModalProvider>
                    <TaskFormModal />
                    <WeekDayHeader day={day}/>
                </ContextModalProvider>
            </section>
        ))
    )
}

let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]
