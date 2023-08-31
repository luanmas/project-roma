'use client'

import ReactModal from 'react-modal';
import { useTaskModalDetails } from '@/store/FormModal/ModalTaskDetails';

type taskProps = {
    title : string;
    description : string;
    id : number;
}

type tasksArray = {
    tasks : taskProps[]
}

export default function TaskModalDetails ({tasks} : tasksArray) {
    const {openTaskModalDetails,setOpenTaskModalDetails} = useTaskModalDetails();
    
    return (
        <ReactModal 
            isOpen={openTaskModalDetails}
            onRequestClose={() => setOpenTaskModalDetails(false)}
            overlayClassName={"react-modal-overlay"}
            ariaHideApp={false}
            className={"absolute top-0 left-0 w-screen h-screen bg-slate-700/50 flex justify-center items-center"}
        >
            <section>
                {tasks.map((task) => (
                    <section key={task.id}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                    </section>
                ))}
            </section>
        </ReactModal>
    )
}