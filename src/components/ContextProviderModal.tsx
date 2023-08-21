import { createContext , ReactNode } from "react";
import { useState , useContext } from 'react';

type ContextModalProviderProps = {
    children: ReactNode;
}

type FormDataProsp = {
    title: string;
    desc : string;
}

type ContextModalProps = {
    retrieveFormData : (data : FormDataProsp) => Promise<void>;
}

const ContextModal = createContext<ContextModalProps>({} as ContextModalProps);

export function ContextModalProvider ({children} : ContextModalProviderProps) {

    return (
        <ContextModal.Provider value={{}}>
            {children}
        </ContextModal.Provider>
    )
}

export function useModalForm () {
    const context = useContext(ContextModal);

    return context;
}


