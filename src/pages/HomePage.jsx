import AddEventModal from "@/components/Event/AddEventModal"
import CardEvent from "@/components/Event/CardEvent"
import ShowEvent from "@/components/Event/ShowEvent"
import MapView from "@/components/Map/MapView"
import Navbar from "@/components/Navbar"
import { useEventStore } from "@/store/useEventStore"

const HomePage = () => {
    const { adding, pending } = useEventStore()
    return (

        <div className="bg-[#f9fafb] h-screen ">
            {
                pending && <AddEventModal />
            }
            <Navbar />
            <div className="flex h-screen flex-wrap">
                <ShowEvent />
                <MapView />
            </div>
        </div>
    )
}
export default HomePage