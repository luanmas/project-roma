'use client'

import ReactModal from 'react-modal';
import { useModalForm } from './ContextProviderModal';

export default function TaskFormModal () {
    const { openModalForm , setOpenModalForm , setTitle , setDesc , title , desc } = useModalForm();

    async function retrieveFormData () {
        console.log({title , desc});
    }

    async function OnSubmit (event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await retrieveFormData();
        setOpenModalForm(false)
    }

    return (
        <ReactModal 
            isOpen={openModalForm}
            onRequestClose={() => setOpenModalForm(false)}
            overlayClassName={"react-modal-overlay"}
            ariaHideApp={false}
            className={"absolute top-0 left-0 w-screen h-screen bg-cyan-100 flex justify-center items-center"}
        >
            <form className='flex flex-col bg-red-500' onSubmit={(event) => OnSubmit(event)}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" id='title' placeholder='Ex : Study Mathemics'/>

                <label htmlFor="desc">Description</label>
                <input onChange={(e) => setDesc(e.target.value)} type="text" id='desc' placeholder='Ex : Study trigonometry'/>

                <button
                    type='submit' 
                >
                    Add    
                </button>
            </form>
        </ReactModal>
    )
}

// future features : reack hook form + zod