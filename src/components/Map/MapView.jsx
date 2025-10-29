import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEventStore } from '@/store/useEventStore'
import Layers from './Layers'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

const DEFAULT_POSITION = [13.74463184683733, 100.56467950344087]
const DEFAULT_ZOOM = 20

const ResetButton = () => {
    const map = useMap()
    const handleReset = () => {
        map.setView(DEFAULT_POSITION, DEFAULT_ZOOM)
    }

    return (
        <div className="absolute top-5 right-40 z-1000">
            <Button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md"
            >
                รีเซ็ตตำแหน่ง
            </Button>
        </div>
    )
}

const MapTargetHandler = () => {
    const map = useMap()
    const mapTarget = useEventStore((state) => state.mapTarget)
    const setMapTarget = useEventStore((state) => state.setMapTarget)


    useEffect(() => {
        if (mapTarget) {
            map.setView([mapTarget.lat, mapTarget.lng], 20, { animate: true })
            setMapTarget(null)

        }
    }, [mapTarget])

    return null
}

const MapView = () => {
    const { setPending, adding, event, mapTarget } = useEventStore()
    const eventall = event?.event || []



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
                    className="absolute inset-0 w-full h-full z-9"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    <Layers />
                    <ClickToAdd />
                    <ResetButton />
                    <MapTargetHandler />

                    {eventall.map((item) => (
                        <Marker
                            key={item.id}
                            position={[item.location.lat, item.location.lng]}
                        >
                            <Popup>
                                <div className="p-2 bg-white rounded-xl shadow-lg text-center">
                                    <h3 className="text-lg font-semibold text-gray-800">{item.activityDetail}</h3>
                                    <p className="text-sm text-gray-500">พิกัด: {item.building}</p>
                                </div>
                            </Popup>
                            <Tooltip direction='top'>{item.activityDetail}</Tooltip>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default MapView
