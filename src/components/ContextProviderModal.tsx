'use client';

import { createContext , ReactNode , SetStateAction } from "react";
import { useState , useContext } from 'react';

type ContextModalProviderProps = {
    children: ReactNode;
}

type ContextModalProps = {
    title: string;
    desc : string;
    setTitle:  React.Dispatch<SetStateAction<string>>;
    setDesc : React.Dispatch<SetStateAction<string>>;
    openModalForm : boolean;
    setOpenModalForm : React.Dispatch<SetStateAction<boolean>>;
}

const ContextModal = createContext<ContextModalProps>({} as ContextModalProps);

export function ContextModalProvider ({children} : ContextModalProviderProps) {
    const [openModalForm , setOpenModalForm] = useState(false);

    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");


    return (
        <ContextModal.Provider value={{title , desc , setTitle , setDesc , openModalForm , setOpenModalForm}}>
            {children}
        </ContextModal.Provider>
    )
}

export function useModalForm () {
    const context = useContext(ContextModal);

    return context;
}


