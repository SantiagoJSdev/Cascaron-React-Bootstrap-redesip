import { types } from "../types/types";

const login = (user) => { 
    return {
        type: types.newAuthLogin,
        payload: user
    }

}

export const startChecking = () => {
  
    return async (dispatch) => {

        dispatch(login({
            uid: '2151515',
            name: 'santiago'
        }))
    }
}

export const initChecking = () => { 
    return { 
        type: types.authChecking
    }
}