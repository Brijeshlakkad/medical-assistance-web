import { RequestState } from "../../lib/types";
import { COUNSELOR_PATIENT_ERROR, COUNSELOR_PATIENT_FETCHING, COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING, COUNSELOR_PATIENT_LIST_SUCCESS, COUNSELOR_PATIENT_SUCCESS } from "../types";

const initialState = {
	patientListState: RequestState.NULL,
	patientList: [],
	activePatientState: RequestState.NULL,
	activePatient: {}
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case COUNSELOR_PATIENT_LIST_FETCHING:
			return {
				...state,
				patientListState: RequestState.FETCHING
			}
		case COUNSELOR_PATIENT_LIST_SUCCESS:
			return {
				...state,
				patientListState: RequestState.COMPLETED,
				patientList: action.patientList || []
			}
		case COUNSELOR_PATIENT_LIST_ERROR:
			return {
				...state,
				patientListState: RequestState.ERROR
			}
		case COUNSELOR_PATIENT_FETCHING:
			return {
				...state,
				activePatientState: RequestState.FETCHING
			}
		case COUNSELOR_PATIENT_SUCCESS:
			return {
				...state,
				activePatientState: RequestState.COMPLETED,
				activePatient: action.activePatient
			}
		case COUNSELOR_PATIENT_ERROR:
			return {
				...state,
				activePatientState: RequestState.ERROR
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as counselorInitialState
};
