import ContainerDayItems from "@/components/ContainerDayItems";
import TaskFormModal from "@/components/TaskFormModal";;

export default function Home() {
  return (
    <main className="bg-slate-100 md:w-11/12 md:h-4/5 rounded-lg">
      <h2 className="font-bold md:text-5xl py-3 pl-3">Manager Routine</h2>
      <ContainerDayItems />
      <TaskFormModal />
    </main>
  )
}
