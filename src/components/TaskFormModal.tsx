'use client'

import { useState } from 'react';
import ReactModal from 'react-modal';

export default function TaskFormModal () {
    const [openModalForm , setOpenModalForm] = useState(true);

    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");

    function retrieveFormData () {
        return {title , desc}
    }

    return (
        <ReactModal 
            isOpen={openModalForm}
            onRequestClose={() => setOpenModalForm(false)}
            overlayClassName={"react-modal-overlay"}
            className={"absolute top-0 left-0 w-screen h-screen bg-cyan-100 flex justify-center items-center"}
        >
            <form className='flex flex-col bg-red-500' onSubmit={() => retrieveFormData()}>
                <label htmlFor="title">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" id='title' placeholder='Ex : Study Mathemics'/>

                <label htmlFor="desc">Description</label>
                <input onChange={(e) => setDesc(e.target.value)} type="text" id='desc' placeholder='Ex : Study trigonometry'/>

                <button 
                    type='submit'
                    onClick={() => setOpenModalForm(false)}
                >
                    Add    
                </button>
            </form>
        </ReactModal>
    )
}

// future features : reack hook form + zod