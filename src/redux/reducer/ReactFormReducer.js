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
        error: {
            maSV: '',
            hoTen: '',
            sdt: '',
            email: '',
        }
    }
}

export const ReactFormReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SAVE_DATA_FORM:
            return {
                ...state, user: {
                    value: payload.newValues,
                    error: payload.newError
                }
            }

        case PUSH_USER:

            return {
                ...state, arrUser: [
                    ...state.arrUser,
                    payload
                ]
            }

        case VIEW_DETAIL_USER:
            return state

        default:
            return state
    }
}
