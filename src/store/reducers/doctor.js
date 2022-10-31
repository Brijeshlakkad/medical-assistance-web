import { RequestState } from "../../lib/types";
import { DOCTOR_PATIENT_ERROR, DOCTOR_PATIENT_FETCHING, DOCTOR_PATIENT_LIST_ERROR, DOCTOR_PATIENT_LIST_FETCHING, DOCTOR_PATIENT_LIST_SUCCESS, DOCTOR_PATIENT_SUCCESS } from "../types";

const initialState = {
	patientListState: RequestState.NULL,
	patientList: [],
	activePatientState: RequestState.NULL,
	activePatient: {}
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case DOCTOR_PATIENT_LIST_FETCHING:
			return {
				...state,
				patientListState: RequestState.FETCHING
			}
		case DOCTOR_PATIENT_LIST_SUCCESS:
			return {
				...state,
				patientListState: RequestState.COMPLETED,
				patientList: action.patientList || []
			}
		case DOCTOR_PATIENT_LIST_ERROR:
			return {
				...state,
				patientListState: RequestState.ERROR
			}
		case DOCTOR_PATIENT_FETCHING:
			return {
				...state,
				activePatientState: RequestState.FETCHING,
				activePatient: {}
			}
		case DOCTOR_PATIENT_SUCCESS:
			return {
				...state,
				activePatientState: RequestState.COMPLETED,
				activePatient: action.activePatient
			}
		case DOCTOR_PATIENT_ERROR:
			return {
				...state,
				activePatientState: RequestState.ERROR,
				activePatient: {}
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as doctorInitialState
};
