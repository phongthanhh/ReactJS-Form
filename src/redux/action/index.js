import { PUSH_USER, SAVE_DATA_FORM, VIEW_DETAIL_USER } from "../constants"

export const pushUser = (payload) => {
    return {
        type: PUSH_USER,
        payload
    }
}

export const viewDetailUser = (payload) => {
    return {
        type: VIEW_DETAIL_USER,
        payload
    }
}

export const saveDataForm = (payload) => {
    return {
        type: SAVE_DATA_FORM,
        payload,

    }
}