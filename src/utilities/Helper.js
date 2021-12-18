import { toast } from "react-toastify"
export default class Helper {
    static async setCallBack(mainFunc) {
        await mainFunc()
    }

    static ResultMessage(result) {
        if(!result?.data?.success) {
            toast.error(result?.data?.message )
        } else {
            toast.success(result?.data?.message)
        }
    }
}