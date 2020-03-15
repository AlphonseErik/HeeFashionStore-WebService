import { restConnector } from "../../services"
import reduxAction from "./action";
import { LOGIN } from "./actionType";
import { settings } from "../../configs/settings";

export const signInAction = (userLogin, history) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/auth/signin",
            data: userLogin
        }).then(res => {
            console.log(res.data);
            localStorage.setItem(settings.token, res.data.accesstoken);
            if (res.data.user.isSuperAdmin) {
                localStorage.setItem(settings.isAdmin, res.data.user.isSuperAdmin);
            }
            localStorage.setItem(settings.account, JSON.stringify(res.data));
            restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken;
            dispatch(reduxAction(LOGIN, res.data));
            history.push('./home');
        }).catch(err => {
            //console.log(err.response.data);
            alert('Error: ' + err.response.data.message)
        })
    }
}

export const registerAction = (userRegister, history) => {
    return dispatch => {
        restConnector({
            method: "POST",
            url: "/api/v1/users/register",
            data: userRegister
        }).then(res => {
            console.log(res.data);
            history.push('./login');
        }).catch(err => {
            //console.log(err.response.data);
            alert('Error: ' + err.response.data.message)
        })
    }
}