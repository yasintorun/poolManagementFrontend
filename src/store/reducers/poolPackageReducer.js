import { packageType } from "../actions/poolPackageActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function poolPackageReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case packageType.GET_PACKAGE_START:
            return {...state, loading:true, error:""}
        case packageType.GET_PACKAGE_SUCCESS:
            return {...state, loading:false, data:payload}
        case packageType.GET_PACKAGE_ERROR:
            return {...state, loading:false, error:"Error fetching get poolPackages"}
        default:
            return {...state, loading:false, error:""}
    }
}