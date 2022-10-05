import { combineReducers } from "redux"

import localesReducer, { localesInitialState } from "./locales"

export const initialState = {
	locales: localesInitialState,
}

export default combineReducers({
	locales: localesReducer,
})
