import { PLEASE_TRY_AGAIN } from "../../lib/messages";
import request from "../../lib/request";
import { UserRole } from "../../lib/types";
import { USER_LOGIN_SIGNUP_ERROR, USER_LOGIN_SIGNUP_FETCHING, USER_LOGIN_SIGNUP_SUCCESS } from "../types";

const LOGIN_APIS = {
    [UserRole.PATIENT]: `patient/login`,
    [UserRole.COUNSELOR]: `counselor/login`,
    [UserRole.DOCTOR]: `doctor/login`,
}

const SIGNUP_APIS = {
    [UserRole.PATIENT]: `patient/signup`,
    [UserRole.COUNSELOR]: `counselor/signup`,
    [UserRole.DOCTOR]: `doctor/signup`,
}

export const login = (emailId, password, role) => async (dispatch) => {
    if (!emailId || !password || !role || !LOGIN_APIS[role]) {
        return;
    }
    dispatch({ type: USER_LOGIN_SIGNUP_FETCHING });
    request(LOGIN_APIS[role], "POST", null, { emailId, password })
        .then((resp) => {
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                localStorage.setItem("USER", resp.data.accessToken);
                dispatch({
                    type: USER_LOGIN_SIGNUP_SUCCESS,
                    user: resp.data.user,
                    role: role
                });
            } else {
                dispatch({
                    type: USER_LOGIN_SIGNUP_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: USER_LOGIN_SIGNUP_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}

export const signup = (user, role) => async (dispatch) => {
    if(!role || !SIGNUP_APIS[role]){
        return;
    }
    dispatch({ type: USER_LOGIN_SIGNUP_FETCHING });
    request(SIGNUP_APIS[role], "POST", null, { ...user })
        .then((resp) => {
            if (resp.data && resp.data.loginSuccess) {
                // save token to localStorage
                localStorage.setItem("USER", resp.data.accessToken);
                dispatch({
                    type: USER_LOGIN_SIGNUP_SUCCESS,
                    user: resp.data.user,
                    role: role
                });
            } else if (resp.data) {
                dispatch({
                    type: USER_LOGIN_SIGNUP_ERROR,
                    errorMessage: resp.data.errorMessage
                });
            } else {
                localStorage.removeItem("USER");
            }
        })
        .catch((exception) => {
            localStorage.removeItem("USER");
            // handle error.
            dispatch({
                type: USER_LOGIN_SIGNUP_ERROR,
                errorMessage: PLEASE_TRY_AGAIN
            });
        });
}