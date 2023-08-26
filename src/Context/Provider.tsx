import { ContextModalProvider } from "@/hook/useModalForm";

export default function Provider ({children} : { children : React.ReactNode}) {
    return (
        <>
            <ContextModalProvider>{children}</ContextModalProvider>
        </>
    )
}