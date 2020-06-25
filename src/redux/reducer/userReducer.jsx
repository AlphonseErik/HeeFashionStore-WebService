import { LOGIN, LOGOUT, LOGIN_ADMIN } from '../action/actionType';

let initialState = {
    credentials: null,
    userDetail: null,
    isLogin: false,
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN: {
            state.credentials = payload;
            state.userDetail = payload.user;
            return { ...state, isLogin: true };
        }
        case LOGIN_ADMIN: {
            state.credentials = payload;
            state.userDetail = payload.user;
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
