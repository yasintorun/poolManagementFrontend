import api from "../../services/api"
import { CallBack } from "./baseActions"

export const packageType = {
    GET_PACKAGE_START: "GET_PACKAGE_START",
    GET_PACKAGE_SUCCESS: "GET_PACKAGE_SUCCESS",
    GET_PACKAGE_ERROR: "GET_PACKAGE_ERROR",
} 

const api_url = "/poolpackages"

export const getAllPoolPackages = async (dispatch) => {
    dispatch({type: packageType.GET_PACKAGE_START})
    try {
        const response = await api().get(api_url + "/getallpoolpackages")
        dispatch({type: packageType.GET_PACKAGE_SUCCESS, payload: response.data.data})
    }catch {
        dispatch({type: packageType.GET_PACKAGE_ERROR})
    }
}

export const addPoolPackage = (poolPackage) => async (dispatch) => {
    return CallBack(api().post(api_url+"/addpoolpackage", poolPackage), dispatch, getAllPoolPackages)
}

export const editPoolPackage = (poolPackage) => async (dispatch) => {
    return CallBack(api().put(api_url+"/updatepoolpackage", poolPackage), dispatch, getAllPoolPackages)
}

export const deletePoolPackage = (packageId) => async (dispatch) => {
    return CallBack(api().delete(api_url+"/deletepoolpackage", {data: {packageId: packageId}}), dispatch, getAllPoolPackages)
}