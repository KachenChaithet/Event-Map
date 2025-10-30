import { useEventStore } from "@/store/useEventStore"
import moment from "moment";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import CardEvent from "./CardEvent";

const ShowEvent = () => {
  const event = useEventStore((state) => state.event)
  const removeEvent = useEventStore((state) => state.removeEvent)
  const setMapTarget = useEventStore((state) => state.setMapTarget)
  const getById = useEventStore((state) => state.getById)
  const edit = useEventStore((state) => state.edit)
  const setPending = useEventStore((state) => state.setPending)
  const toggleAdding = useEventStore((state) => state.toggleAdding)
  const eventall = event?.event || []
  const [selectedEvent, setSelectedEvent] = useState(null)




  const handleDelete = async (id) => {
    const res = await removeEvent(id)
    toast.success(res.message)
  }

  const handleEdit = async (id) => {
    try {
      await getById(id)



    } catch (error) {
      toast.error(error.message || 'something went wrong!')

    }
  }
  return (<>
    {
      selectedEvent && (
        <CardEvent event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )
    }
    <div className="w-[400px] overflow-auto p-4 space-y-4">
      <h1 className="text-2xl font-semibold text-center">show Event</h1>
      {eventall && eventall.length > 0 ? eventall.map((item) => (
        <div className="bg-white p-4 border-purple-200 shadow-md border rounded-2xl hover:scale-102 transition relative" onClick={() => { setMapTarget(item.location), setSelectedEvent(item) }}>
          <div className="absolute  bg-purple-400 text-white font-semibold right-4 top-4 hover:bg-purple-500 rounded-2xl  flex justify-end px-2 ">{item.category}</div>
          <h1 className="font-semibold text-lg">{item.building}</h1>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-gray-600 text-sm">{item.activityDetail}</p>
              <p className="text-gray-600 text-sm">{moment(item.date).format('DD/MM/YYYY')}</p>
            </div>
            <div className="space-x-2">
              <Button variant={'outline'} className={'hover:bg-yellow-200 p-2'} onClick={(e) => { e.stopPropagation(),handleEdit(item.id), setPending(item.location), toggleAdding() }}>🛠️</Button>
              <Button variant={'outline'} className={'hover:bg-red-200 p-2'} onClick={(e) => { e.stopPropagation(),handleDelete(item.id)}}>🗑️</Button>
            </div>
          </div>
        </div>
      )) : (<div className="text-gray-600">not found</div>)
      }
    </div >
  </>
  )
}
export default ShowEvent