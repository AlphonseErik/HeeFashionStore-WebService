import { LOGIN, LOGOUT } from '../action/actionType';

let initialState = {
    credentials: null,
    isLogin: false
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            state.credentials = payload;
            return { ...state, isLogin: true };
        }
        case LOGOUT: {
            state = {
                credentials: null,
            }
            return { ...state, isLogin: false };
        }
        default:
            return state;
    }
}

export default UserReducer;
