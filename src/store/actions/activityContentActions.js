import api from '../../services/api'
import { CallBack } from './baseActions'
export const activityContentTypes = {
    GET_ACTIVITY_CONTENT_START: "GET_ACTIVITY_CONTENT_START",
    GET_ACTIVITY_CONTENT_SUCCESS: "GET_ACTIVITY_CONTENT_SUCCESS",
    GET_ACTIVITY_CONTENT_ERROR: "GET_ACTIVITY_CONTENT_ERROR",
}

const api_url = "/activitycontents"

export const getAllActivityContents = async (dispatch) => {
    dispatch({type: activityContentTypes.GET_ACTIVITY_CONTENT_START})
    try {
        const response = await api().get(api_url + "/getallactivitycontents")
        dispatch({type:activityContentTypes.GET_ACTIVITY_CONTENT_SUCCESS, payload:response.data.data})
    } catch {
        dispatch({type:activityContentTypes.GET_ACTIVITY_CONTENT_ERROR})
    }
}

export const addActivityContent = (activityContent) => async(dispatch) => {
    return CallBack(api().post(api_url +"/addactivitycontent", activityContent), dispatch, getAllActivityContents)
}