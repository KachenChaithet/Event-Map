import { useEventStore } from "@/store/useEventStore"
import { Button } from "./ui/button"
import { useEffect } from "react";

const Navbar = () => {
    const { adding, toggleAdding, pending, setPending } = useEventStore()



    return (
        <div className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
            <div className="flex items-center gap-4">
                <div className="w-14 rounded-lg h-14 bg-linear-0 from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center">
                    🎊
                </div>
                <div className="">
                    <h1 className="font-bold text-2xl">EventMap</h1>
                    <p className="text-sm text-gray-600">แผนที่กิจกรรม เห็นภาพรวมง่าย ๆ</p>
                </div>
            </div>
            <Button onClick={toggleAdding} className={'font-semibold bg-linear-0 from-blue-500 via-purple-500 to-pink-500 px-6 py-6 hover:opacity-90'}>{adding ? 'ยกเลิก' : 'เพิ่มกิจกรรม'}</Button>
        </div>
    )
}
export default Navbar