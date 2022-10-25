import { combineReducers } from "redux"

import localesReducer, { localesInitialState } from "./locales"
import patientReducer, { patientInitialState } from "./patient"

export const initialState = {
	locales: localesInitialState,
	patient: patientInitialState,
}

export default combineReducers({
	locales: localesReducer,
	patient: patientReducer,
})
