//All states

import { combineReducers } from "redux";
import { CookieTypes } from "../utilities/cookieTypes";
import appointmentReducer from "./reducers/appointmentReducer";
import authReducer from "./reducers/authReducer";
import checkoutReducer from "./reducers/checkoutActions";
import poolLaneReducer from "./reducers/poolLaneReducer";
import poolPackageReducer from "./reducers/poolPackageReducer";
import poolReducer from "./reducers/poolReducer";
import roleReducer from "./reducers/roleReducer";
import userReducer from "./reducers/userReducer";




const rootReducer = combineReducers({
    auth: authReducer,
    pools: poolReducer,
    poolLanes: poolLaneReducer,
    roles: roleReducer,
    users: userReducer,
    appointments: appointmentReducer,
    poolPackages: poolPackageReducer,
    checkout: checkoutReducer,
})

export default rootReducer