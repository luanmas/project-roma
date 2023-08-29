'use client'

import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
// import { useModalForm } from '@/hook/useModalForm';
import { useFormModalStore  } from '@/store/FormModal/index';

type FormDataProps = {
    title : string;
    description : string;
}


export default function TaskFormModal () {
    const form = useForm<FormDataProps>();
    const { register , handleSubmit } = form;

    // const { openModalForm , setOpenModalForm , OnSubmit } = useModalForm();
    const { openModalForm , setOpenModalForm , OnSubmit} = useFormModalStore(); 

    type stateForm = {
        state : boolean;
    }

    return (
        <ReactModal 
            isOpen={openModalForm}
            onRequestClose={() => setOpenModalForm(false)}
            overlayClassName={"react-modal-overlay"}
            ariaHideApp={false}
            className={"absolute top-0 left-0 w-screen h-screen bg-slate-700/50 flex justify-center items-center"}
        >
            <form className='flex flex-col relative bg-slate-200 px-2 py-5 space-y-6 md:w-2/5 md:h-auto rounded' onSubmit={handleSubmit(OnSubmit)}>
                <h2 className='flex justify-center md:text-3xl font-bold'>Create a Task 📚</h2>
                <div className='absolute top-0 right-0 px-2'>
                    <button onClick={() => setOpenModalForm(false)}>
                        ❌
                    </button>
                </div>
                <div className='flex flex-col'>
                    <label className='text-lg' htmlFor="title">Title</label>
                    <input className='py-3 px-2 rounded' {...register("title")}  type="text" id='title' placeholder='Ex : Study Mathemics'/>
                </div>

                <div className='flex flex-col'>
                    <label className='text-lg' htmlFor="description">Description</label>
                    <input className='py-3 px-2 rounded' {...register("description")} type="text" id='description' placeholder='Ex : Study trigonometry'/>
                </div>

                <button
                    type='submit' 
                    className='block bg-green-500 py-3 font-semibold text-xl text-white rounded'
                >
                    Add    
                </button>
            </form>
        </ReactModal>
    )
}

// future features : reack hook form + zod