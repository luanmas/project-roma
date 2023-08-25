
type ContentWeekDayProps = {
    title : string;
    description : string;
}

export default function ContentWeekDay ({title , description} : ContentWeekDayProps) {
    return(
        <div className="bg-slate-200 rounded overflow-hidden">
            <h4 className="pl-1">{title}</h4>
            <p>{description}</p>
            {/* <button className="bg-slate-300 font-semibold py-1 w-full">See details</button> */}
        </div>
    )
}