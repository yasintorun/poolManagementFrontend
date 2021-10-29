import axios from "axios";
import api from "./api";

const api_url = "/auth"

export default class AuthService{
    async login(account) {
        const response = await api().post(api_url +"/login", account)
        console.log(response)
    }
}