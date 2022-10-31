import { RequestState, UserRole } from "../../lib/types";
import { USER_LOGIN_SIGNUP_ERROR, USER_LOGIN_SIGNUP_FETCHING, USER_LOGIN_SIGNUP_SUCCESS, USER_LOGOUT } from "../types";

const initialState = {
	state: RequestState.NULL,
	role: UserRole.NULL
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
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as userInitialState
};
