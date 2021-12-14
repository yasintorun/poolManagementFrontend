import Cookies from "js-cookie"
import api from "../../services/api"
import AuthService from "../../services/authService"
import { types } from "../../services/localStoregeService"
import { CookieTypes } from "../../utilities/cookieTypes"
import { getUser } from "./userActions"

export const authTypes = {
    LOGIN_START: "LOGIN_START",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
    USER_LOGOUT: "USER_LOGOUT"
}

const api_url = "/auth"

export const login = (value) => async (dispatch) => {
    dispatch({type: authTypes.LOGIN_START})
    try {
        const response = await api().post(api_url+"/login", value)
        dispatch({type: authTypes.LOGIN_SUCCESS, payload: response.data.data})
        Cookies.set(CookieTypes.AUTH, JSON.stringify(response.data.data))
        localStorage.setItem(types.USER, JSON.stringify(response.data.data))
        
        if(AuthService.isClient()) {
             dispatch(getUser(response.data.data.accountId))   
        }

    }catch{
        dispatch({type: authTypes.LOGIN_ERROR})
    }
}

export const logout = () => (dispatch) => {
    Cookies.remove(CookieTypes.AUTH)
    localStorage.removeItem(types.USER)
    dispatch({type: authTypes.USER_LOGOUT})
}