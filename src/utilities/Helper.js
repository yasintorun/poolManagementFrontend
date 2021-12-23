import { toast } from "react-toastify"
import { Icon } from 'semantic-ui-react'
export default class Helper {
    static async setCallBack(mainFunc) {
        await mainFunc()
    }

    static ResultMessage(result) {
        if (!result?.data?.success) {
            toast.error(result?.data?.message)
        } else {
            toast.success(result?.data?.message)
        }
    }

    static CheckBoxDisplay(val) {
        return val 
        ? <Icon color="green" name="check" /> 
        : <Icon color="red" name="x" />
    }
}
