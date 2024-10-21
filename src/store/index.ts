import { combineReducers, createStore } from "redux";
import listReducer from "./reducers/listReducer";
import cardReducer from "./reducers/cardReducer";
import { RootState } from "../types/types";
import { saveState, loadState } from "../storage/localStorage";

const preloadedState: RootState | undefined = loadState();

const rootReducer = combineReducers({
    lists: listReducer,
    cards: cardReducer
})

const store = createStore(rootReducer, preloadedState);

store.subscribe(() => {
    saveState(store.getState())
})

export default store;