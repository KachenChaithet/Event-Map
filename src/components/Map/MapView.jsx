import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEventStore } from '@/store/useEventStore'
import Layers from './Layers'
import { Button } from '@/components/ui/button'

const DEFAULT_POSITION = [13.74463184683733, 100.56467950344087]
const DEFAULT_ZOOM = 20

const ResetButton = () => {
    const map = useMap()
    const handleReset = () => {
        map.setView(DEFAULT_POSITION, DEFAULT_ZOOM)
    }

    return (
        <div className="absolute top-4 right-20 z-1000">
            <Button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md"
            >
                รีเซ็ตตำแหน่ง
            </Button>
        </div>
    )
}

const MapView = () => {
    const categoryevent = ['all', 'music', 'food', 'drawing', 'spot']
    const { setPending, adding } = useEventStore()

    const ClickToAdd = () => {
        useMapEvents({
            click(e) {
                if (adding) {
                    const { lat, lng } = e.latlng
                    console.log(lat, lng)
                    setPending({ lat, lng })
                }
            }
        })
        return null
    }

    return (
        <div className="flex flex-col flex-1 relative">
            {adding && (
                <div className="bg-amber-100 h-10 flex justify-center items-center">
                    <h1 className="text-lg font-semibold text-amber-600">
                        !!!คลิกตามจุดที่ต้องการเพิ่ม Event
                    </h1>
                </div>
            )}

            <div className="flex-1 relative">
                <MapContainer
                    center={DEFAULT_POSITION}
                    zoom={DEFAULT_ZOOM}
                    scrollWheelZoom={true}
                    className="absolute inset-0 w-full h-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <Layers />
                    <ClickToAdd />
                    <ResetButton />
                </MapContainer>
            </div>
        </div>
    )
}

export default MapView
