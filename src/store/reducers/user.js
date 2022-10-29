import { RequestState, UserRole } from "../../lib/types";
import { USER_LOGIN_SIGNUP_ERROR, USER_LOGIN_SIGNUP_FETCHING, USER_LOGIN_SIGNUP_SUCCESS } from "../types";

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
				user: action.user
			}
		case USER_LOGIN_SIGNUP_FETCHING:
			return {
				...state,
				state: RequestState.FETCHING,
				errorMessage: ""
			}
		case USER_LOGIN_SIGNUP_ERROR:
			return {
				...state,
				state: RequestState.ERROR,
				errorMessage: action.errorMessage
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as userInitialState
};
