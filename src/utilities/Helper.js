export default class Helper {
    static async setCallBack(mainFunc) {
        await mainFunc()
    }
}