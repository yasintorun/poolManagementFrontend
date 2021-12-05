import api from "../../services/api"

export const imageTypes = {
    GET_IMAGE_START: "GET_IMAGE_START",
    GET_IMAGE_SUCCESS: "GET_IMAGE_SUCCESS",
    GET_IMAGE_ERROR: "GET_IMAGE_ERROR",
}

const api_url = "/images"

export const uploadImage = (image, folderName) => async (dispatch) => {
    dispatch({type: imageTypes.GET_IMAGE_START})
    try {
        const response = await api().post(api_url + "/uploadimage?folderName="+folderName, image)
        dispatch({type: imageTypes.GET_IMAGE_SUCCESS})
    } catch {
        dispatch({type: imageTypes.GET_IMAGE_ERROR})
    }
}