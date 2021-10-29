//All states

import { combineReducers } from "redux";
import appointmentReducer from "./reducers/appointmentReducer";
import authReducer from "./reducers/authReducer";
import poolLaneReducer from "./reducers/poolLaneReducer";
import poolReducer from "./reducers/poolReducer";
import roleReducer from "./reducers/roleReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    pools: poolReducer,
    poolLanes: poolLaneReducer,
    roles: roleReducer,
    users: userReducer,
    appointments: appointmentReducer
})

export default rootReducer