import AddEventModal from "@/components/Event/AddEventModal"
import MapView from "@/components/Map/MapView"
import Navbar from "@/components/Navbar"
import { useEventStore } from "@/store/useEventStore"

const HomePage = () => {
    const { adding, pending } = useEventStore()
    console.log(pending);
    
    return (

        <div className="bg-[#f9fafb] h-screen ">
            {
                pending && <AddEventModal />
            }
            <Navbar />
            <MapView />
        </div>
    )
}
export default HomePage