import { combineReducers } from "redux"
import counselorReducer, { counselorInitialState } from "./couselor"
import doctorReducer, { doctorInitialState } from "./doctor"
import localesReducer, { localesInitialState } from "./locales"
import patientReducer, { patientInitialState } from "./patient"
import userReducer, { userInitialState } from "./user"

export const initialState = {
	locales: localesInitialState,
	user: userInitialState,
	patient: patientInitialState,
	counselor: counselorInitialState,
	doctor: doctorInitialState
}

export default combineReducers({
	locales: localesReducer,
	user: userReducer,
	patient: patientReducer,
	counselor: counselorReducer,
	doctor: doctorReducer
})
