//All states

import { combineReducers } from "redux";
import { CookieTypes } from "../utilities/cookieTypes";
import activityContentReducer from "./reducers/activityContentReducer";
import activityReducer from "./reducers/activityReducer";
import appointmentReducer from "./reducers/appointmentReducer";
import authReducer from "./reducers/authReducer";
import checkoutReducer from "./reducers/checkoutActions";
import imageReducer from "./reducers/imageReducers";
import poolLaneReducer from "./reducers/poolLaneReducer";
import poolPackageReducer from "./reducers/poolPackageReducer";
import poolReducer from "./reducers/poolReducer";
import roleReducer from "./reducers/roleReducer";
import userPoolPackageReducer from "./reducers/userPoolPackageReducer";
import userReducer from "./reducers/userReducer";




const rootReducer = combineReducers({
    auth: authReducer,
    pools: poolReducer,
    poolLanes: poolLaneReducer,
    roles: roleReducer,
    users: userReducer,
    appointments: appointmentReducer,
    activities: activityReducer,
    activityContents: activityContentReducer,
    poolPackages: poolPackageReducer,
    checkout: checkoutReducer,
    userPackage: userPoolPackageReducer,
    images: imageReducer,
})

export default rootReducer