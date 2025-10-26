import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'



const MapView = () => {
    const categoryevent = ['all', 'music', 'food', 'drawing', 'spot']

    const ClickToAdd = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng
                console.log(lat, lng);

            }
        })
        return
    }
    return (
        <div className="p-4">
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

            <div className=" ">
                <MapContainer
                    center={[13.744830435549279, 100.56469023227693]}
                    zoom={20}
                    scrollWheelZoom={true}
                    className='w-full h-[500px]'
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <ClickToAdd />

                </MapContainer>

            </div>
        </div>
    )
}
export default MapView
