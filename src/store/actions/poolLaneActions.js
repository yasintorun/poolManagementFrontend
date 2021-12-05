import api from "../../services/api"
import { CallBack } from "./baseActions"

export const poolLaneTypes = {
    GET_POOL_LANE_START: "GET_POOL_LANE_START",
    GET_POOL_LANE_SUCCESS: "GET_POOL_LANE_SUCCESS",
    GET_POOL_LANE_ERROR: "GET_POOL_LANE_ERROR",
}

const api_url = "/poollanes"

export const getAllPoolLanes = async (dispatch) => {
    dispatch({type: poolLaneTypes.GET_POOL_LANE_START})
    try {
        const response = await api().get(api_url + "/getallpoollanes")
        dispatch({type: poolLaneTypes.GET_POOL_LANE_SUCCESS, payload: response.data.data})
    } catch {
        dispatch({type: poolLaneTypes.GET_POOL_LANE_ERROR})
    }
}

export const addPoolLanes = (lane) => async (dispatch) => {
    return CallBack(api().post(api_url + "/addpoollane", lane), dispatch, getAllPoolLanes)
}


export const editPoolLane = (lane) => async (dispatch) => {
    return CallBack(api().put(api_url + "/updatepoollane", lane), dispatch, getAllPoolLanes)
}

export const deletePoolLane = (laneId) => async (dispatch) => {
    return CallBack(api().delete(api_url +"/deletepoollane", {data: {laneId: laneId}}), dispatch, getAllPoolLanes)
}
