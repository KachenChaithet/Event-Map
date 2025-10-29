import { useEventStore } from "@/store/useEventStore"
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { NutIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment from "moment";
import { fromTheme } from "tailwind-merge";

const AddEventModal = () => {
    const { addEvent, toggleAdding, pending, setPending, edit, updateEvent, setEdit } = useEventStore()
    const { lat, lng } = pending
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        building: "",
        activityDetail: "",
        locationDetail: "",
        time: "",
        date: "",
        category: '',
        location: pending || {}
    })


    const handleAddEvent = async () => {

        const dataToSubmit = {
            ...formData,
            building: formData.building.trim(),
            building: formData.building.trim(),
            activityDetail: formData.activityDetail.trim(),
            locationDetail: formData.locationDetail.trim(),
            category: formData.category.trim(),
        }

        if (!dataToSubmit.building || !dataToSubmit.activityDetail) {
            toast.error("กรุณากรอกข้อมูลให้ครบ")
            return
        }
        setLoading(true)
        try {
            let res
            if (edit) {
                res = await updateEvent(edit.id, dataToSubmit)
            } else {
                res = await addEvent(dataToSubmit)
            }
            toast.success(res.message)
            setPending(null)
            setEdit(null)
            toggleAdding()
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }


    }

    const onChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({  
            ...prev,
            [name]: value
        }))

    }

    useEffect(() => {

        if (edit) {
            setFormData({
                building: edit.building || "",
                activityDetail: edit.activityDetail || "",
                locationDetail: edit.locationDetail || "",
                time: edit.time || "",
                date: edit.date ? moment(edit.date).format('YYYY-MM-DD') : "",
                category: edit.category || "",
                location: edit.location || pending || { lat: 0, lng: 0 }
            })
        }
    }, [edit, pending])


    return (
        <div className="fixed z-9999 inset-0 bg-black/50 flex justify-center items-center" onClick={() => { toggleAdding(), setPending(null), setEdit(null) }}>
            <div className="bg-white p-6 rounded-2xl w-[600px] space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">{edit ? 'update Event' : 'เพิ่มEvent'}</h3>
                    <X className="text-gray-600 w-6 h-6 cursor-pointer" onClick={() => { toggleAdding(), setPending(null), setEdit(null) }} />
                </div>
                <div className="font-semibold text-lg ">Lat:{lat.toFixed(6)}, Lng:{lng.toFixed(6)}</div>
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
                    <Button onClick={() => handleAddEvent()} className={'bg-blue-500 hover:bg-blue-600'}>{loading ? 'loading...' : edit ? "Update" : "Save"}</Button>
                    <Button variant={'outline'} onClick={() => { setPending(null), setEdit(null) }} > Cancel</Button>
                </div>
            </div>
        </div>
    )
}
export default AddEventModal