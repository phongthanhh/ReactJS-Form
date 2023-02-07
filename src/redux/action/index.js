import { DEL_USER, PUSH_USER, SAVE_DATA_FORM, UPDATE_USER, VIEW_DETAIL_USER } from "../constants"

export const saveDataForm = (payload) => {
    return {
        type: SAVE_DATA_FORM,
        payload,

    }
}

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

export const updateUser = (payload) => {
    return {
        type: UPDATE_USER,
        payload,

    }
}

export const delUser = (payload) => {
    return {
        type: DEL_USER,
        payload,

    }
}

