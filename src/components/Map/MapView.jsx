import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEventStore } from '@/store/useEventStore'
import Layers from './Layers'



const MapView = () => {
    const categoryevent = ['all', 'music', 'food', 'drawing', 'spot']
    const { setPending, adding } = useEventStore()

    const ClickToAdd = () => {
        useMapEvents({
            click(e) {
                if (adding) {
                    const { lat, lng } = e.latlng
                    console.log(lat, lng);
                    setPending({ lat, lng })
                }
                return

            }
        })
        return
    }
    return (
        <div className="p-4 space-y-4">
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold">หมวดหมู่กิจกรรม</h1>
                <div className="flex gap-2 mt-2">
                    {categoryevent.map((item) => (
                        <div
                            key={item}
                            className="bg-linear-to-r from-blue-600 via-blue-400 to-blue-200 px-6 py-2 rounded-full text-white font-medium"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className=" ">
                <MapContainer
                    center={[13.744830435549279, 100.56469023227693]}
                    zoom={20}
                    scrollWheelZoom={true}
                    className='w-full h-[500px] rounded-md'
                >
                    <Layers />
                    <ClickToAdd />

                </MapContainer>

            </div>
        </div>
    )
}
export default MapView
