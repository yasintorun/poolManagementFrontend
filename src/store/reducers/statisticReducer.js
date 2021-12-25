import { statisticTypes } from '../actions/statisticActions'
const defaultState = {
    data: {},
    loading: false,
    error: "",
}

export default function statisticReducer(state = defaultState, { type, payload }) {
    switch (type) {
        case statisticTypes.GET_STATISTIC_START:
            return { ...state, loading: true, error: "" }
        case statisticTypes.GET_STATISTIC_SUCCESS:
            return { ...state, loading: false, data: payload }
        case statisticTypes.GET_STATISTIC_ERROR:
            return { ...state, loading: false, error: "Get Error fetching" }
        default:
            return {...state, loading:false, error:""}
    }
}