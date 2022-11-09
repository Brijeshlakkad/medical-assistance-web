import { RequestState } from "../../lib/types";
import { CLEAR_COUNSELOR_ACTIVE_PATIENT_LOD, COUNSELOR_DOCTOR_LIST_ERROR, COUNSELOR_DOCTOR_LIST_FETCHING, COUNSELOR_DOCTOR_LIST_SUCCESS, SET_COUNSELOR_ACTIVE_PATIENT_LOD } from "../types";

const initialState = {
	state: RequestState.NULL,
	payload: {},
	errorMessage: "",
	activePatient: {}
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case COUNSELOR_DOCTOR_LIST_FETCHING:
			return {
				...state,
				state: RequestState.FETCHING,
				payload: {}
			}
		case COUNSELOR_DOCTOR_LIST_SUCCESS:
			return {
				...state,
				state: RequestState.COMPLETED,
				payload: action.payload
			}
		case COUNSELOR_DOCTOR_LIST_ERROR:
			return {
				...state,
				state: RequestState.ERROR,
				errorMessage: action.errorMessage
			}
		case SET_COUNSELOR_ACTIVE_PATIENT_LOD:
			return {
				...state,
				activePatient: action.activePatient
			}
		case CLEAR_COUNSELOR_ACTIVE_PATIENT_LOD:
			return {
				...state,
				activePatient: {}
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as counselorDoctorListInitialState
};
