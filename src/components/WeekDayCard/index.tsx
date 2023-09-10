import { fetchDataTask } from "./apiTask";


export default async function WeekDayCards () {
    const week = ["monday" , "tuesday"];
    
    return(
        // <section className="flex">
        //     {weekDay.map((task) => (
        //         <section key={task.id} id={task.id.toString()} className="md:px-3">
        //             <div className="flex justify-between items-center min-w-[200px]">
        //                 <h2 className="capitalize">{task.nameDay}</h2>
        //                 <button className="bg-slate-800 px-2 text-slate-200 font-bold rounded">+</button>
        //             </div>
        //                 <hr className="my-2" />
        //             {task.tasks.map((task) => (
        //                 <section key={task.id}>
        //                     <h2><strong>Task</strong> : {task.title}</h2>
        //                     <button className="bg-slate-400/50 w-full">See details</button>
        //                     <hr className="mt-2" />
        //                 </section>
        //             ))}
        //         </section>
        //     ))}
        // </section>
        <section>
            {week.map((day) => {
                const fetchData = async () => await fetchDataTask({nameDay : {day}})
                console.log(fetchData());
                return (
                    <h2>{day}</h2>   
                )
            })}
        </section>    
    )
}
