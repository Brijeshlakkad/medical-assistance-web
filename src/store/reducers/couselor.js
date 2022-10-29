import { RequestState } from "../../lib/types";
import { COUNSELOR_PATIENT_LIST_FETCHING } from "../types";

const initialState = {
	patientListState: RequestState.NULL
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case COUNSELOR_PATIENT_LIST_FETCHING:
			return {
				...state,
				patientListState: RequestState.FETCHING
			}
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as counselorInitialState
};
