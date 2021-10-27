//All states

import { combineReducers } from "redux";
import poolLaneReducer from "./reducers/poolLaneReducer";
import poolReducer from "./reducers/poolReducer";
import roleReducer from "./reducers/roleReducer";

const rootReducer = combineReducers({
    pools: poolReducer,
    poolLanes: poolLaneReducer,
    roles: roleReducer,
})

export default rootReducer