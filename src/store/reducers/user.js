import { RequestState, UserRole } from "../../lib/types";
import { ONLOAD_LOGIN_SIGNUP_PAGE, USER_LOGIN_SIGNUP_ERROR, USER_LOGIN_SIGNUP_FETCHING, USER_LOGIN_SIGNUP_SUCCESS, USER_LOGOUT, USER_PROFILE_ERROR, USER_PROFILE_FETCHING, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE_ERROR, USER_PROFILE_UPDATE_FETCHING, USER_PROFILE_UPDATE_SUCCESS } from "../types";

const initialState = {
	state: RequestState.NULL,
	role: UserRole.NULL,
	loginErrorMessage: "",
	signupErrorMessage: "",
	profile: {
		state: RequestState.NULL
	},
	profileEdit: {
		state: RequestState.NULL
	}
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case USER_LOGIN_SIGNUP_SUCCESS:
			return {
				...state,
				state: RequestState.COMPLETED,
				errorMessage: "",
				user: action.user,
				role: action.role
			}
		case USER_LOGIN_SIGNUP_FETCHING:
			return {
				...state,
				state: RequestState.FETCHING,
				errorMessage: "",
				role: UserRole.NULL
			}
		case USER_LOGIN_SIGNUP_ERROR:
			return {
				...state,
				state: RequestState.ERROR,
				errorMessage: action.errorMessage,
				role: UserRole.NULL
			}
		case USER_LOGOUT:
			return initialState;
		case ONLOAD_LOGIN_SIGNUP_PAGE:
			return {
				...state,
				errorMessage: ""
			}
		case USER_PROFILE_FETCHING:
			return {
				...state,
				profile: {
					state: RequestState.FETCHING
				}
			}
		case USER_PROFILE_SUCCESS:
			return {
				...state,
				profile: {
					state: RequestState.COMPLETED,
					payload: action.payload
				}
			}
		case USER_PROFILE_ERROR:
			return {
				...state,
				profile: {
					state: RequestState.ERROR,
					errorMessage: action.errorMessage
				}
			}
		case USER_PROFILE_UPDATE_FETCHING:
			return {
				...state,
				profileEdit: {
					editState: RequestState.FETCHING
				}
			}
		case USER_PROFILE_UPDATE_SUCCESS:
			return {
				...state,
				profileEdit: {
					editState: RequestState.COMPLETED,
					payload: action.payload
				}
			}
		case USER_PROFILE_UPDATE_ERROR:
			return {
				...state,
				profileEdit: {
					editState: RequestState.ERROR,
					errorMessage: action.errorMessage
				}
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as userInitialState
};
