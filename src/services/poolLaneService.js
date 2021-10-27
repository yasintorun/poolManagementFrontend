import axios from "axios";
export default class PoolLaneService {
    api_url = process.env.REACT_APP_ROOT_API + "/poollanes"

    addPoolLane(lane) {
        return axios.post(this.api_url + "/addpoollanes", lane)
    }

    getAllPoolLanes() {
        return axios.get(this.api_url + "/getallpoollanes")
    }
}