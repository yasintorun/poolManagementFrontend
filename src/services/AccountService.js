import axios from "axios";
import api from "./api";

const api_url = "/accounts"

export default class AccountService {
    async changePassword(data) {
        return await api().post(api_url+"/changepassword", data) 
    }
}