import axios from "axios";
import api from "./api";

const api_url = "/roles"

export default class RoleService {
    async getRoles() {
        return await api().get(api_url+"/getallroles") 
    }
}