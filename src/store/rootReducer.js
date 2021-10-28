//All states

import { combineReducers } from "redux";
import appointmentReducer from "./reducers/appointmentReducer";
import poolLaneReducer from "./reducers/poolLaneReducer";
import poolReducer from "./reducers/poolReducer";
import roleReducer from "./reducers/roleReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    pools: poolReducer,
    poolLanes: poolLaneReducer,
    roles: roleReducer,
    users: userReducer,
    appointments: appointmentReducer
})

export default rootReducer