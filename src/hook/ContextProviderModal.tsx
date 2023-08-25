'use client';

import { api } from "@/service/api";
import { createContext , ReactNode , useEffect } from "react";
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

type routineWeekProviderProps = {
    routine : routineProps[];
    createRoutine : (routine: routineInputProps) => Promise<void>;
}


const ContextModal = createContext<routineWeekProviderProps>({} as routineWeekProviderProps);

export function ContextModalProvider ({children} : ContextModalProviderProps) {


    // const [openModalForm , setOpenModalForm] = useState(false);

    // const [title , setTitle] = useState("");
    // const [desc , setDesc] = useState("");

    const [routine , setRoutine] = useState<routineProps[]>([]);

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

    return (
        <ContextModal.Provider value={{routine , createRoutine}}>
            {children}
        </ContextModal.Provider>
    )
}

export function useModalForm () {
    const context = useContext(ContextModal);

    return context;
}