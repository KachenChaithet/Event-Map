import { useEventStore } from "@/store/useEventStore"

const AddEventModal = () => {
    const { adding, toggleAdding,pending } = useEventStore()
    return (
        <div className="fixed z-9999 inset-0 bg-black/50 flex justify-center items-center" onClick={toggleAdding}>
            <div className="bg-white p-6 rounded-2xl w-[600px] space-y-4" onClick={(e) => e.stopPropagation()}>
                    
            </div>
        </div>
    )
}
export default AddEventModal