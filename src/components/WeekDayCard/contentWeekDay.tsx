import TaskModalDetails from "../TaskDetailsModal";
import { useTaskModalDetails } from "@/store/ModalTaskDetails/ModalTaskDetails/index";

type taskProps = {
    title : string;
    description : string;
    id : number;
}

type tasksArray = {
    tasks : taskProps[]
}

export default function ContentWeekDay ({tasks} : tasksArray) {
    const { setOpenTaskModalDetails } = useTaskModalDetails();

    return(
        <div className="bg-slate-200 rounded overflow-hidden">
            {tasks.map((task) => (
                <h4 key={task.title}>{task.title}</h4>
            ))}
            <button onClick={() => setOpenTaskModalDetails(true)} className="bg-slate-300 font-semibold py-1 w-full">See details</button>
            <TaskModalDetails tasks={tasks}/>
        </div>
    )
}