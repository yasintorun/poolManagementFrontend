import axios from "axios";
import Cookies from "js-cookie";
import { CookieTypes } from "../utilities/cookieTypes";
import api from "./api";

const api_url = "/auth"

export default class AuthService{
    async login(account) {
        const response = await api().post(api_url +"/login", account)
    }

    static getAuth() {
        let auth = Cookies.get(CookieTypes.AUTH)
        if(!auth) {
            return null
        }
        return JSON.parse(auth)
    }

    static getClient() {
        let client = Cookies.get(CookieTypes.CLIENT)
        if(!client) {
            return null
        }
        return JSON.parse(client)
    }

    static isAdmin() {
        return this.getRole() == 1
    }
    
    static isClient() {
        return this.getRole() == 2
    }

    static getRole() {
        let auth = this.getAuth()
        if(!!auth) {
            return auth?.role?.roleId
        }
        return -1
    }
}