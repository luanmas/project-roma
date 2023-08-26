import WeekDayHeader from "./weekDayHeader";

export default function WeekDayCards () {
    return(
        weekDays.map((day) => (
            <section className="md:px-3">
                <WeekDayHeader day={day} key={day}/>
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
