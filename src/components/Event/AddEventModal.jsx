import { useEventStore } from "@/store/useEventStore"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const AddEventModal = () => {
    const { adding, toggleAdding, pending, setPending } = useEventStore()
    const { lat, lng } = pending

    const [formData, setFormData] = useState({
        building: "",
        activityDetail: "",
        locationDetail: "",
        time: "",
        date: "",
        category: '',
        location: ''
    })

    console.log(formData);

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

    }

    useEffect(() => {
        if (pending) {
            setFormData(prev => ({
                ...prev,
                location: { lat: pending.lat, lng: pending.lng }
            }));
        }
    }, [pending]);

    return (
        <div className="fixed z-9999 inset-0 bg-black/50 flex justify-center items-center" onClick={() => { toggleAdding(), setPending(null) }}>
            <div className="bg-white p-6 rounded-2xl w-[600px] space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">เพิ่มEvent</h3>
                    <X className="text-gray-600 w-6 h-6 cursor-pointer" onClick={() => { toggleAdding(), setPending(null) }} />
                </div>
                <div className="font-semibold text-lg ">Lat:{lat.toFixed(6)}, Lng{lng.toFixed(6)}</div>
                <Input required type={'text'} className={'py-6 '} placeholder={'ตึกอาคารสถานที่'} name='building' value={formData.building} onChange={onChange} />
                <Textarea required type={'text'} className={'py-6 '} placeholder={'รายละเอียดกิจกรรม'} name='activityDetail' value={formData.activityDetail} onChange={onChange} />
                <Textarea required type={'text'} className={'py-6 '} placeholder={'รายละเอียดสถานที่ เช่น ชั้น, ห้อง'} name='locationDetail' value={formData.locationDetail} onChange={onChange} />
                <Input required type={'time'} className={'py-6 '} placeholder={'ระยะเวลาจัดกิจกรรม'} name='time' value={formData.time} onChange={onChange} />
                <Input required type={'date'} className={'py-6 '} name='date' value={formData.date} onChange={onChange} />
                <select value={formData.category} onChange={onChange} name="category" className="py-2 px-3 border rounded">
                    <option value="">-- เลือกหมวดหมู่ --</option>
                    <option value="technology">technology</option>
                    <option value="computer">computer</option>
                </select>

                <div className="space-x-2 ">
                    <Button className={'bg-blue-500 hover:bg-blue-600'}>Save</Button>
                    <Button variant={'outline'} > Cancel</Button>
                </div>
            </div>
        </div>
    )
}
export default AddEventModal