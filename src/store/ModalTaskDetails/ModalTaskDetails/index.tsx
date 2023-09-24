import { create } from "zustand";

type StoreProps = {
    openTaskModalDetails : boolean,
    setOpenTaskModalDetails : (openModalForm : boolean) => void;
}

export const useTaskModalDetails = create<StoreProps>((set) => ({
    openTaskModalDetails: false,
    setOpenTaskModalDetails: (newState) => set(() => ({ openTaskModalDetails : newState })),
}));
