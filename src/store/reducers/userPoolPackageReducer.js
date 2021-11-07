import { userPackageTypes } from "../actions/userPoolPackageActions";

const defaultState = {
    data: null,
    error: ""
}

export default function userPoolPackageReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case userPackageTypes.GET_BY_USER_ID:
            return {...state, data: payload, error:""}
        case userPackageTypes.ERROR:
            return {...state, error:"Error fetching get user pool package"}
        default:
            return {...state}
    }
}