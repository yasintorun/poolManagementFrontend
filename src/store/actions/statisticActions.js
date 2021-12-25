import api from "../../services/api"

export const statisticTypes = {
    GET_STATISTIC_START: "GET_STATISTIC_START",
    GET_STATISTIC_SUCCESS: "GET_STATISTIC_SUCCESS",
    GET_STATISTIC_ERROR: "GET_STATISTIC_ERROR",
}

const api_url = "/statistics"

export const getAdminStatistics = async(dispatch) => {
    dispatch({type: statisticTypes.GET_STATISTIC_START})
    try {
        const response = await api().get(api_url+"/adminstatistics")
        dispatch({type: statisticTypes.GET_STATISTIC_SUCCESS, payload: response.data})
    } catch {
        dispatch({type: statisticTypes.GET_STATISTIC_ERROR})
    }
}

export const getClientStatistics = (userId) => async(dispatch) => {
    dispatch({type: statisticTypes.GET_STATISTIC_START})
    try {
        const response = await api().get(api_url+"/clientstatistics?userId="+userId)
        dispatch({type: statisticTypes.GET_STATISTIC_SUCCESS, payload: response.data})
    } catch {
        dispatch({type: statisticTypes.GET_STATISTIC_ERROR})
    }
}