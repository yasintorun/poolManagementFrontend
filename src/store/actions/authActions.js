import api from "../../services/api"
import { types } from "../../services/localStoregeService"

export const authTypes = {
    LOGIN_START: "LOGIN_START",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
}

const api_url = "/auth"

export const login = (value) => async (dispatch) => {
    dispatch({type: authTypes.LOGIN_START})
    try {
        const response = await api().post(api_url+"/login", value)
        dispatch({type: authTypes.LOGIN_SUCCESS, payload: response.data.data})
        localStorage.setItem(types.USER, JSON.stringify(response.data.data))
    }catch{
        dispatch({type: authTypes.LOGIN_ERROR})
    }
}