import api from '../../services/api'
import { CallBack } from './baseActions'
export const appointmentTypes = {
    GET_APPOINTMENT_START: "GET_APPOINTMENT_START",
    GET_APPOINTMENT_SUCCESS: "GET_APPOINTMENT_SUCCESS",
    GET_APPOINTMENT_ERROR: "GET_APPOINTMENT_ERROR",
}

const api_url = "/appointments"

export const getAllAppointments = async (dispatch) => {
    dispatch({type: appointmentTypes.GET_APPOINTMENT_START})
    try {
        const response = await api().get(api_url + "/getallappointments")
        dispatch({type:appointmentTypes.GET_APPOINTMENT_SUCCESS, payload:response.data.data})
    } catch {
        dispatch({type:appointmentTypes.GET_APPOINTMENT_ERROR})
    }
}

export const addAppointment = (appointment) => async(dispatch) => {
    return CallBack(api().post(api_url +"/addappointment", appointment), dispatch, getAllAppointments)
}