import { createStore, combineReducers } from "redux";
import { charactersReducer, modalReducer, filterReducer } from "./reducers";


export const rootReducer = combineReducers({
    characters: charactersReducer,
    modal: modalReducer,
    filter: filterReducer
})


export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.state = store.getState