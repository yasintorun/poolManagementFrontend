import axios from "axios";

export default class PoolService {
    api_url = process.env.REACT_APP_ROOT_API + "/pools"

    addPool(pool) {
        return axios.post(this.api_url + "/addpool", pool)
    }

    getAllPools() {
        return axios.get(this.api_url + "/getallpools")
    }
}