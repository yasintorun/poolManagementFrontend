import { poolLaneTypes } from "../actions/poolLaneActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}


export default function poolLaneReducer(state=defaultState, {type, payload}){
    switch (type) {
        case poolLaneTypes.GET_POOL_LANE_START:
            return {...state, loading:true, error:""}
        case poolLaneTypes.GET_POOL_LANE_SUCCESS:
            return {...state, loading:false, data: payload}
        case poolLaneTypes.GET_POOL_LANE_ERROR:
            return {...state, loading:false, error:"Error fetching pool lanes"}
        default:
            return {...state, loading:false, error:""}
    }
}