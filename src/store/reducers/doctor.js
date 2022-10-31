import { RequestState } from "../../lib/types";
import { DOCTOR_PATIENT_CLEAR, DOCTOR_PATIENT_ERROR, DOCTOR_PATIENT_FETCHING, DOCTOR_PATIENT_LIST_ERROR, DOCTOR_PATIENT_LIST_FETCHING, DOCTOR_PATIENT_LIST_SUCCESS, DOCTOR_PATIENT_SUCCESS } from "../types";

const initialState = {
	patientListState: RequestState.NULL,
	patientList: [],
	activePatientState: RequestState.NULL,
	activePatients: {}
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
			if (action.patientId) {
				const activePatients = state.activePatients;
				activePatients[action.patientId] = {
					state: RequestState.NULL
				};
				return {
					...state,
					activePatientState: RequestState.FETCHING,
					activePatients: activePatients,
				}
			}
			return state;
		case DOCTOR_PATIENT_SUCCESS:
			if (action.activePatient.recordId) {
				const activePatients = state.activePatients;
				activePatients[action.activePatient.recordId] = action.activePatient;
				activePatients[action.activePatient.recordId].state = RequestState.COMPLETED;
				return {
					...state,
					activePatientState: RequestState.COMPLETED,
					activePatients: activePatients
				}
			}
			return state;
		case DOCTOR_PATIENT_ERROR:
			if (action.activePatient.recordId) {
				const activePatients = state.activePatients;
				activePatients[action.patientId].state = RequestState.ERROR;
				return {
					...state,
					activePatientState: RequestState.ERROR,
					activePatients: activePatients
				}
			}
			return state;
		case DOCTOR_PATIENT_CLEAR:
			return {
				...state,
				activePatientState: RequestState.NULL,
				activePatients: {}
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as doctorInitialState
};
