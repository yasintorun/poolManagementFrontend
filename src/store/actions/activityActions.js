import api from '../../services/api'
import { CallBack } from './baseActions'
export const activityTypes = {
    GET_ACTIVITY_START: "GET_ACTIVITY_START",
    GET_ACTIVITY_SUCCESS: "GET_ACTIVITY_SUCCESS",
    GET_ACTIVITY_ERROR: "GET_ACTIVITY_ERROR",
}

const api_url = "/activities"

export const getAllActivities = async (dispatch) => {
    dispatch({type: activityTypes.GET_ACTIVITY_START})
    try {
        const response = await api().get(api_url + "/getallactivities")
        dispatch({type:activityTypes.GET_ACTIVITY_SUCCESS, payload:response.data.data})
    } catch {
        dispatch({type:activityTypes.GET_ACTIVITY_ERROR})
    }
}