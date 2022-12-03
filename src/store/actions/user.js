import { PLEASE_TRY_AGAIN, SOMETHING_WENT_WRONG } from "../../lib/messages";
import request from "../../lib/request";
import { UserRole } from "../../lib/types";
import { ONLOAD_LOGIN_SIGNUP_PAGE, USER_LOGIN_SIGNUP_ERROR, USER_LOGIN_SIGNUP_FETCHING, USER_LOGIN_SIGNUP_SUCCESS, USER_LOGOUT, USER_PROFILE_ERROR, USER_PROFILE_FETCHING, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE_ERROR, USER_PROFILE_UPDATE_FETCHING, USER_PROFILE_UPDATE_SUCCESS } from "../types";
import { openSuccessMessageModal } from "./gui";

const LOGIN_APIS = {
    [UserRole.PATIENT]: `patient/login`,
    [UserRole.COUNSELOR]: `counselor/login`,
    [UserRole.DOCTOR]: `doctor/login`,
    [UserRole.ADMIN]: `admin/login`,
}

const SIGNUP_APIS = {
    [UserRole.PATIENT]: `patient/signup`,
    [UserRole.COUNSELOR]: `counselor/signup`,
    [UserRole.DOCTOR]: `doctor/signup`
}

const PROFILE_APIS = {
    [UserRole.PATIENT]: `patient/profile`,
    [UserRole.COUNSELOR]: `counselor/profile`,
    [UserRole.DOCTOR]: `doctor/profile`
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
    if (!role || !SIGNUP_APIS[role]) {
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

export const logout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT
    })
}

export const setUser = (user, role) => (dispatch) => {
    dispatch({
        type: USER_LOGIN_SIGNUP_SUCCESS,
        user: user,
        role: role
    })
}


export const onLoadUserLoginSignupPage = () => (dispatch) => {
    dispatch({
        type: ONLOAD_LOGIN_SIGNUP_PAGE
    })
}

export const fetchProfile = (role) => async (dispatch) => {
    if (!role || !PROFILE_APIS[role]) {
        return;
    }
    dispatch({ type: USER_PROFILE_FETCHING });
    request(PROFILE_APIS[role], "GET", null, null)
        .then((resp) => {
            if (resp && resp.data) {
                dispatch({
                    type: USER_PROFILE_SUCCESS,
                    payload: resp.data
                });
            } else {
                dispatch({
                    type: USER_PROFILE_ERROR,
                    errorMessage: SOMETHING_WENT_WRONG
                });
            }
        })
        .catch((exception) => {
            // handle error.
            dispatch({
                type: USER_PROFILE_ERROR,
                errorMessage: exception.data.message
            });
        });
}


export const updateProfile = (user, role) => async (dispatch) => {
    if (!role || !PROFILE_APIS[role]) {
        return;
    }
    dispatch({ type: USER_PROFILE_UPDATE_FETCHING });
    request(PROFILE_APIS[role], "PATCH", null, user)
        .then((resp) => {
            if (resp && resp.data) {
                dispatch({
                    type: USER_PROFILE_UPDATE_SUCCESS,
                    payload: resp.data
                });
                dispatch(openSuccessMessageModal("Your profile was updated!"));
            } else {
                dispatch(openSuccessMessageModal(SOMETHING_WENT_WRONG));
                dispatch({
                    type: USER_PROFILE_UPDATE_ERROR,
                    errorMessage: SOMETHING_WENT_WRONG
                });
            }
        })
        .catch((exception) => {
            if (exception.data.message)
                dispatch(openSuccessMessageModal(exception.data.message));
            // handle error.
            dispatch({
                type: USER_PROFILE_UPDATE_ERROR,
                errorMessage: exception.data.message
            });
        });
}