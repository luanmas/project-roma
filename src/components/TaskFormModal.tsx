'use client'

import ReactModal from 'react-modal';
import { SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

type FormDataProps = {
    title : string;
    description : string;
}

type ModalFormsProps = {
    openModalForm : boolean;
    setOpenModalForm : React.Dispatch<SetStateAction<boolean>>;
    OnSubmit : () => void;
}

export default function TaskFormModal ({ openModalForm , setOpenModalForm , OnSubmit  } : ModalFormsProps) {
    const form = useForm<FormDataProps>();
    const { register , handleSubmit } = form;

    return (
        <ReactModal 
            isOpen={openModalForm}
            onRequestClose={() => setOpenModalForm(false)}
            overlayClassName={"react-modal-overlay"}
            ariaHideApp={false}
            className={"absolute top-0 left-0 w-screen h-screen bg-cyan-100 flex justify-center items-center"}
        >
            <form className='flex flex-col bg-red-500 p-5' onSubmit={handleSubmit(OnSubmit)}>
                <label htmlFor="title">Title</label>
                <input {...register("title")} type="text" id='title' placeholder='Ex : Study Mathemics'/>

                <label htmlFor="description">Description</label>
                <input {...register("description")} type="text" id='description' placeholder='Ex : Study trigonometry'/>

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