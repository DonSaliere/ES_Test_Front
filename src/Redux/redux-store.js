import { createStore, combineReducers } from "redux";
import authReducer from "./auth-reducer";
import contactsReducer from "./contacts-reducer";

let reducers = combineReducers({
    auth: authReducer,
    contacts: contactsReducer
});

let store = createStore(reducers);

export default store;

window.store = store;