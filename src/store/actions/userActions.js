import Cookies from 'js-cookie'
import api from '../../services/api'
import { CookieTypes } from '../../utilities/cookieTypes'
export const userTypes = {
    GET_USER_START: "GET_USER_START",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_ERROR: "GET_USER_ERROR",

    GET_USER: "GET_USER"
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

export const getUser =(accountId) => async(dispatch) => {
    try {
        const response = await api().get(api_url + "/getbyaccountid?accountId="+accountId)
        dispatch({type:userTypes.GET_USER, payload:response.data.data})
        
        Cookies.set(CookieTypes.CLIENT, JSON.stringify(response.data.data))
    }catch {

    }
}