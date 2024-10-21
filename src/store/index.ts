import { combineReducers, createStore } from "redux";
import listReducer from "./reducers/listReducer";
import cardReducer from "./reducers/cardReducer";

const rootReducer = combineReducers({
    lists: listReducer,
    cards: cardReducer
})

const store = createStore(rootReducer);

export default store;