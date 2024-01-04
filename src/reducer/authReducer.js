import { types } from "../types/types";

const initialState = {
    checking: 'checking',
    //uid:null,
    //name: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.authChecking:
            return {
                ...state,
                checking: 'not-authenticated',

            }
        case types.newAuthLogin:  
            return {
                ...state,
                checking: 'authenticated',
                user: action.payload
            }

        default:
            return state;
    }

}