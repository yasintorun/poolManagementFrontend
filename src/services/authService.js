import axios from "axios";
import Cookies from "js-cookie";
import { CookieTypes } from "../utilities/cookieTypes";
import api from "./api";

const api_url = "/auth"

export default class AuthService{
    async login(account) {
        const response = await api().post(api_url +"/login", account)

    }

    static isAdmin() {
        let auth = JSON.parse(Cookies.get(CookieTypes.AUTH))
        console.log(auth)
        return auth?.role?.roleId == 2
    }
    
    static isClient() {
        let auth = JSON.parse(Cookies.get(CookieTypes.AUTH))
        return auth?.role?.roleId == 4
    }

    static getRole() {
        let auth = JSON.parse(Cookies.get(CookieTypes.AUTH))
        if(!!auth) {
            return auth?.role?.roleId
        }
        return -1
    }
}