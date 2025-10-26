import { LayersControl, TileLayer } from "react-leaflet"

const Layers = () => {
    return (
        <LayersControl>
            <LayersControl.BaseLayer name="defalt" checked>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="defalt1">
                <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

            </LayersControl.BaseLayer>
        </LayersControl>
    )
}
export default Layers