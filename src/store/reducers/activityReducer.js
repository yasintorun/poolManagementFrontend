import { activityTypes } from "../actions/activityActions"

const defaultState = {
    data: [],
    current: {},
    loading: false,
    error: ""
}

export default function activityReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case activityTypes.GET_ACTIVITY_START:
            return {...state, loading:true, error:""}
        case activityTypes.GET_ACTIVITY_SUCCESS:
            return {...state, loading:false, data:payload}
        case activityTypes.GET_ACTIVITY_ERROR:
            return {...state, loading:false, error:"Error fetching get appointments"}
        default:
            return {...state, loading:false, error:""}  
    }
}