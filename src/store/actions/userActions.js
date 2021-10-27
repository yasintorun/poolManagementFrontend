import api from '../../services/api'
export const userTypes = {
    GET_USER_START: "GET_USER_START",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_ERROR: "GET_USER_ERROR",
}

const api_url = "/users"

export const getAllUsers = async(dispatch) => {
    dispatch({type: userTypes.GET_USER_START})
    try {
        const response = await api().get(api_url + "/getallusers")
        dispatch({type:userTypes.GET_USER_SUCCESS, payload:response.data.data})
    }catch {
        dispatch({type:userTypes.GET_USER_ERROR})
    }
}