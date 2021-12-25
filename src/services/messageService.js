import api from "./api"

const api_url = "/messages"

export default class MessageService {
    sendMessage(message) {
        return api().post(api_url+"/sendmessage", message)
    }
    getAllMessages(){
        return api().get(api_url+"/getallmessages")
    }

    getMessageById(id) {
        return api().get(api_url+"/getmessagebyid?id="+id)
    }
}