import { authTypes } from "../actions/authActions";

const defaultState = {
    data: null,
    loading: false,
    error: ""
}

export default function authReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case authTypes.LOGIN_START:
            return {...state, loading:true, error:""}
        case authTypes.LOGIN_SUCCESS:
            return {...state, loading:false, data:payload}
        case authTypes.LOGIN_ERROR:
            return {...state, loading:false, error:"Login Error"}
        default:
            return {...state, loading:false, error:""}
    }
}