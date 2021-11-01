import { checkTypes } from "../actions/checkoutActions";

const defaultState = {
    poolPackage: null,
}

export default function checkoutReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case checkTypes.CHOOSE_PACKAGE:
            return {...state, poolPackage: payload}
        default:
            return {...state}
    }
}