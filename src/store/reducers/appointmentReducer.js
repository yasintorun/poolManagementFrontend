import { appointmentTypes } from "../actions/appointmentActions";

const defaultState = {
    data: [],
    loading: false,
    error: ""
}

export default function appointmentReducer(state=defaultState, {type, payload}) {
    switch (type) {
        case appointmentTypes.GET_APPOINTMENT_START:
            return {...state, loading:true, error:""}
        case appointmentTypes.GET_APPOINTMENT_SUCCESS:
            return {...state, loading:false, data:payload}
        case appointmentTypes.GET_APPOINTMENT_ERROR:
            return {...state, loading:false, error:"Error fetching get appointments"}
        default:
            return {...state, loading:false, error:""}
    }
}