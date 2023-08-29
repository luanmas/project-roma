import { create } from "zustand";

type StoreProps = {
    openModalForm : boolean,
    setOpenModalForm : (openModalForm : boolean) => void;
    OnSubmit : () => void;
}

export const useFormModalStore = create<StoreProps>((set) => ({
    openModalForm: false,
    setOpenModalForm: (newState) => set(() => ({ openModalForm : newState })),
    OnSubmit : () => () => set(() => ({openModalForm : false}))
}));


//function OnSubmit (){
//    setOpenModalForm(false);
//}
