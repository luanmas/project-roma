"use client";

import React, { FC } from 'react'
import { useFormModalStore } from '@/store/ModalTaskDetails/FormModal'

interface buttonAddTaskProps {}

const buttonAddTask: FC<buttonAddTaskProps> = ({  }) => {

  const { setOpenModalForm } = useFormModalStore();

  return (
        <>
            <button 
                type='button'
                onClick={() => setOpenModalForm(true)}
            >
                Add
            </button>
        </>
  )
}

export default buttonAddTask;