import MapView from './components/Map/MapView'
import Navbar from './components/Navbar'
import { Button } from './components/ui/button'
import './index.css'

function App() {

  return (
    <><div className="bg-[#f9fafb] h-screen ">
      <Navbar />
      <MapView />
    </div>
    </>
  )
}

export default App
