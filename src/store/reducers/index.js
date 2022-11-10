import { combineReducers } from "redux"
import counselorReducer, { counselorInitialState } from "./couselor"
import counselorAppointmentsReducer, { counselorAppointmentsInitialState } from "./couselor-appointments"
import counselorDoctorListReducer, { counselorDoctorListInitialState } from "./couselor-lod"
import doctorReducer, { doctorInitialState } from "./doctor"
import doctorAppointmentsReducer, { doctorAppointmentsInitialState } from "./doctor-appointments"
import localesReducer, { localesInitialState } from "./locales"
import patientReducer, { patientInitialState } from "./patient"
import userReducer, { userInitialState } from "./user"

export const initialState = {
	locales: localesInitialState,
	user: userInitialState,

	/* Patient */
	patient: patientInitialState,

	/* Counselor */
	counselor: counselorInitialState,
	counselorAppointments: counselorAppointmentsInitialState,
	counselorLOD: counselorDoctorListInitialState,

	/* Doctor */
	doctor: doctorInitialState,
	doctorAppointments: doctorAppointmentsInitialState
}

export default combineReducers({
	locales: localesReducer,
	user: userReducer,

	/* Patient */
	patient: patientReducer,

	/* Counselor */
	counselor: counselorReducer,
	counselorAppointments: counselorAppointmentsReducer,
	counselorLOD: counselorDoctorListReducer,

	/* Doctor */
	doctor: doctorReducer,
	doctorAppointments: doctorAppointmentsReducer
})
