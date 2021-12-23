import { activityContentTypes } from "../actions/activityContentActions"

const defaultState = {
    data: [],
    current: {},
    loading: false,
    error: ""
}

export default function activityContentReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case activityContentTypes.GET_ACTIVITY_CONTENT_START:
            return {...state, loading:true, error:""}
        case activityContentTypes.GET_ACTIVITY_CONTENT_SUCCESS:
            return {...state, loading:false, data:payload}
        case activityContentTypes.GET_ACTIVITY_CONTENT_ERROR:
            return {...state, loading:false, error:"Error fetching get activity contents"}
        default:
            return {...state, loading:false, error:""}  
    }
}