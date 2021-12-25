import { toast } from "react-toastify"
import api from "../../services/api"
import { CallBack } from "./baseActions"

export const poolTypes = {
    GET_POOL_START: "GET_POOL_START",
    GET_POOL_SUCCESS: "GET_POOL_SUCCESS",
    GET_POOL_ERROR: "GET_POOL_ERROR",
}

const api_url = "/pools"

export const getAllPools = async (dispatch) => {
    dispatch({type: poolTypes.GET_POOL_START})
    
    try {
        const response = await api().get(api_url + "/getallpools")
        dispatch({type: poolTypes.GET_POOL_SUCCESS, payload: response.data.data})
    } catch {
        dispatch({type: poolTypes.GET_POOL_ERROR})
    }
}

export const addPools = (pool) => async (dispatch) => {
    return CallBack(api().post(api_url + "/addpool", pool), dispatch, getAllPools)
}

export const editPools = (pool) => async (dispatch) => {
    return CallBack(api().put(api_url + "/updatepool", pool), dispatch, getAllPools)
}

export const deletePool = (poolId) => async (dispatch) => {
    return CallBack(api().delete(api_url +"/deletepool", {data: {poolId: poolId}}), dispatch, getAllPools)
}

export const uploadPoolPhotos = (file, poolId) => async (dispatch) => {
    return CallBack(api().post(api_url + "/uploadpoolphoto?poolId="+poolId, file), dispatch, getAllPools)
}