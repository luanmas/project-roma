
type ContentWeekDayProps = {
    nameTask : string;
}

export default function ContentWeekDay ({nameTask} : ContentWeekDayProps) {
    return(
        <div className="bg-slate-200 rounded overflow-hidden">
            <h4 className="pl-1">{nameTask}</h4>
            <button className="bg-slate-300 font-semibold py-1 w-full">See details</button>
        </div>
    )
}