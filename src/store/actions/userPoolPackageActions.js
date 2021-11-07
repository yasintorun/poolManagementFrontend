import api from "../../services/api"

export const userPackageTypes = {
    GET_BY_USER_ID: "GET_BY_USER_ID",
    ERROR: "ERROR"
}

const api_url = "/userpackages"

export const getUserPoolPackage = (userId) => async (dispatch) => {
    try {
        const response = await api().get(api_url + "/getpoolpackagebyuserid?userId="+userId)
        dispatch({type: userPackageTypes.GET_BY_USER_ID, payload: response.data.data})
    } catch {
        dispatch({type: userPackageTypes.ERROR})
    }
}