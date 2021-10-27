import { poolTypes } from "../actions/poolActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}


export default function poolReducer(state=defaultState, {type, payload}){
    switch (type) {
        case poolTypes.GET_POOL_START:
            return {...state, loading:true, error:""}
        case poolTypes.GET_POOL_SUCCESS:
            return {...state, loading:false, data: payload}
        case poolTypes.GET_POOL_ERROR:
            return {...state, loading:false, error:"Error fetching pools"}
        default:
            return {...state, loading:false, error:""}
    }
}
