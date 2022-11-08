import { RequestState } from "../../lib/types";
import { COUNSELOR_APPOINTMENTS_ERROR, COUNSELOR_APPOINTMENTS_FETCHING, COUNSELOR_APPOINTMENTS_SUCCESS, COUNSELOR_PATIENT_CLEAR, COUNSELOR_PATIENT_ERROR, COUNSELOR_PATIENT_FETCHING, COUNSELOR_PATIENT_LIST_ERROR, COUNSELOR_PATIENT_LIST_FETCHING, COUNSELOR_PATIENT_LIST_SUCCESS, COUNSELOR_PATIENT_SUCCESS } from "../types";

const initialState = {
	patientListState: RequestState.NULL,
	patientListPayload: [],
	activePatientState: RequestState.NULL,
	activePatients: {},
	appointmentsState: RequestState.NULL,
	appointmentsPayload: {},
	appointmentsErrorMessage: ""
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
				patientListPayload: action.payload || []
			}
		case COUNSELOR_PATIENT_LIST_ERROR:
			return {
				...state,
				patientListState: RequestState.ERROR
			}
		case COUNSELOR_PATIENT_FETCHING:
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
		case COUNSELOR_PATIENT_SUCCESS:
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
		case COUNSELOR_PATIENT_ERROR:
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
		case COUNSELOR_PATIENT_CLEAR:
			return {
				...state,
				activePatientState: RequestState.NULL,
				activePatients: {}
			}
		case COUNSELOR_APPOINTMENTS_FETCHING:
			return {
				...state,
				appointmentsState: RequestState.FETCHING,
				appointmentsPayload: {}
			}
		case COUNSELOR_APPOINTMENTS_SUCCESS:
			return {
				...state,
				appointmentsState: RequestState.FETCHING,
				appointmentsPayload: action.payload
			}
		case COUNSELOR_APPOINTMENTS_ERROR:
			return {
				...state,
				appointmentsState: RequestState.ERROR,
				appointmentsErrorMessage: action.errorMessage
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as counselorInitialState
};
