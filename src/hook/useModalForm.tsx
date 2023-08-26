'use client';

import { api } from "@/service/api";
import { createContext , ReactNode , useEffect , SetStateAction } from "react";
import { useState , useContext } from 'react';

type ContextModalProviderProps = {
    children: ReactNode;
}

type routineProps = {
    title : string;
    description : string;
    createdAt : string;
}

type routineInputProps = {
    title : string;
    description : string;
}

type ContextProviderProps = {
    routine : routineProps[];
    createRoutine : (routine: routineInputProps) => Promise<void>;
    openModalForm : boolean;
    setOpenModalForm : React.Dispatch<SetStateAction<boolean>>;
    OnSubmit : () => void;
}


const ContextModal = createContext<ContextProviderProps>({} as ContextProviderProps);

export function ContextModalProvider ({children} : ContextModalProviderProps) {

    const [routine , setRoutine] = useState<routineProps[]>([]);
    const [openModalForm , setOpenModalForm] = useState(false);

    useEffect(() => {
        api.get('weekRoutine')
        .then(res => {
            setRoutine(res.data.weekRoutine)
        })
    }, [])

    async function createRoutine (routineInput : routineInputProps) {
        const response = await api.post('weekRoutine' , {
            ...routineInput,
            createdAt: new Date(),
        })

        const weekRoutineCreated = response.data.weekRoutine;
        
        setRoutine([
            ...routine,
            weekRoutineCreated
        ])
    }

    function OnSubmit (){
      setOpenModalForm(false);
    }

    return (
        <ContextModal.Provider 
            value={
                    {
                        routine ,
                        createRoutine ,
                        OnSubmit ,
                        openModalForm ,
                        setOpenModalForm
                    }
                }
            >
            {children}
        </ContextModal.Provider>
    )
}

export function useModalForm () {
    const context = useContext(ContextModal);

    return context;
}