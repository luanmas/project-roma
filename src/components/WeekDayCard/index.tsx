import WeekDayHeader from "./weekDayHeader";

type taskArrayProps = {
    title : string;
    description : string;
    id : number;
}

type tasksProps = {
    nameDay : string;
    id : number;
    tasks : taskArrayProps[];
}

let tasks : tasksProps[] = [
    {
        nameDay : "monday",
        id : 0,
        tasks : [{title : "Título 1" , description : "Oi" , id:1 }],
    },
    {
        nameDay : "tuesday",
        id : 1,
        tasks : [{title : "Título 2" , description : "Tudo" , id:2 }],
    },
]

export default function WeekDayCards () {

    return(
        <section>
            {tasks.map((task) => (
                <section key={task.id} id={task.id.toString()} className="md:px-3">
                    <h2>{task.nameDay}</h2>
                    {task.tasks.map((task) => (
                        <section key={task.id}>
                            <h2>{task.title}</h2>
                            <button>See details</button>
                            {/* passar a desc para dentro das propriedades do modal */}
                            {/* otimizar a tipagem dos dados */}
                        </section>
                    ))}
                </section>
            ))}

        </section>
    )
}
