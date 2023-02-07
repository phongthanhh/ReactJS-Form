import { PUSH_USER, SAVE_DATA_FORM, VIEW_DETAIL_USER } from "../constants"


const initialState = {
    arrUser: [
        {
            maSV: 'sv01',
            hoTen: 'văn a',
            sdt: '092131235',
            email: 'phong@gmail.com',

        },
        {
            maSV: 'sv02',
            hoTen: 'văn b',
            sdt: '092131235',
            email: 'phong@gmail.com',

        },
    ],
    user: {
        value: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
        },
        errors: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
            isvalid: false
        },
    }
}

export const ReactFormReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case PUSH_USER:
            state.arrUser = [...state.arrUser, payload]
            return { ...state }
        case VIEW_DETAIL_USER:
            return state
        case SAVE_DATA_FORM:
            state.user = {
                values: payload.newValues,
                errors: payload.newErrors
            }
            return { ...state }
        default:
            return state
    }
}
