import {CallBack} from './baseActions'

export const checkTypes = {
    CHOOSE_PACKAGE: "CHOOSE_PACKAGE",
}

export function choosePoolPackage(poolPackage) {
    return {
        type: checkTypes.CHOOSE_PACKAGE,
        payload: poolPackage
    }
}