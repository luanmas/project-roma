import WeekDayHeader from "./weekDayHeader";

type task = {
    title : string;
    description : string;
    id : number;
}

type tasksProps = {
    nameDay : string;
    tasks : task[];
}


export default function WeekDayCards () {
    let tasks : tasksProps[] = [
        {
            nameDay : "monday",
            tasks : [{title : "Título 1" , description : "Oi" , id:1 }],
        },
        {
            nameDay : "tuesday",
            tasks : [{title : "Título 2" , description : "Tudo" , id:2 }],
        },
        {
            nameDay : "thursday",
            tasks : [{title : "Título 3" , description : "Bom" , id:3}],
        }
    ]   

    return(
        tasks.map((task) => (
            <section className="md:px-3">
                <WeekDayHeader tasks={task.tasks} day={task.nameDay} key={task.nameDay}/>
            </section>
        ))
    )
}
