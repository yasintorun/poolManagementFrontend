import { imageTypes } from "../actions/imageActions"

const defaultState = {
    loading: false,
    error: ""
}


export default function imageReducer(state=defaultState, {type}){
    switch (type) {
        case imageTypes.GET_IMAGE_START:
            return {...state, loading:true, error:""}
        case imageTypes.GET_IMAGE_SUCCESS:
            return {...state, loading:false}
        case imageTypes.GET_IMAGE_ERROR:
            return {...state, loading:false, error:"Servis Hatası"}
        default:
            return {...state, loading:false, error:""}
    }
}