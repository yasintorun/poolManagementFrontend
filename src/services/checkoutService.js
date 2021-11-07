import api from "./api";

const api_url = "/checkout"

export default class CheckoutService{
    check(paymentInfo) {
         return api().post(api_url +"/check", paymentInfo)
    }
}