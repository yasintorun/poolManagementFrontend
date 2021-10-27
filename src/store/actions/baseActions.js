import { toast } from "react-toastify"

export const CallBack = (promise, dispatch, mainMethod) => {
    return promise
    .then(result => {
        BaseCallBackFunc(dispatch, result, mainMethod)
    })
    .catch(error => {
        ErrorExcept(error)
    })
}

const BaseCallBackFunc = (dispatch, result, method) => {

    if(!result.data.success) {
        toast.error(result.data.message)
    } else {
        toast.success(result.data.message)
    }

    dispatch(method)
}


const ErrorExcept = (error) => {
    console.log(error)
    toast.error(error)
}