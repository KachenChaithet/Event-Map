import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { Calculator, Calendar, Database, Timer, X } from "lucide-react"
import moment from "moment"

const CardEvent = ({ event, onClose }) => {


    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40"
                onClick={onClose}
            />
            <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99999 w-96">
                <CardHeader className="flex justify-between items-center">
                    <div>
                        <CardTitle className={''}>รายละเอียดกิจกรรม</CardTitle>
                        <CardDescription className={'  '}>{event.category}</CardDescription>
                    </div>
                    <X className="w-5 h-5 cursor-pointer" onClick={onClose} />
                </CardHeader>
                <CardContent className={'space-y-4'}>
                    <h1 className="text-2xl font-semibold">{event.activityDetail}</h1>
                    <div className="space-y-2">
                        <span className="text-sm px-2 py-1 rounded-2xl bg-purple-100 font-semibold inline-block">{event.category}</span>
                        <div className="bg-gray-200 p-2 rounded-md">
                            <h1 className="text-gray-600">รายละเอียดสถานที่</h1>
                            <p className="text-sm">{event.locationDetail}</p>
                        </div>
                    </div>
                    <div className="flex justify-around gap-4">
                        <div className="bg-amber-200 flex-1 text-center p-2 rounded-md">
                            <div className="flex gap-2">
                                <Calendar className="text-amber-600" />
                                <h1 className="font-semibold">วันที่</h1>
                            </div>
                            <h2 className="font-semibold">{moment(event.date).format('DD/MM/YYYY')}</h2>
                        </div>
                        <div className="bg-purple-200 flex-1 text-center p-2 rounded-md">
                            <div className="flex gap-2">
                                <Timer className="text-purple-600" />
                                <h1 className="font-semibold">เวลา</h1>
                            </div>
                            <h2 className="font-semibold">{event.time}</h2>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CardEvent
