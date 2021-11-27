import Cookies from "js-cookie";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CookieTypes } from "../utilities/cookieTypes";
import rootReducer from "./rootReducer";

const middleware = [thunk]

const auth = Cookies.get(CookieTypes.AUTH) || null;

const initialState = {
    auth: {data: JSON.parse(auth), loading: false, error:""},
  };


export function configureStore() {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}