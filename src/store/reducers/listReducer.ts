import { removeListFromLocalStorage, renameListFromLocalStorage } from "../../storage/localStorage";
import { ADD_LIST, REMOVE_LIST, RENAME_LIST, ListItem } from "../actions/listActions";

interface ListState {
    lists: ListItem[];
}

const initialState: ListState = {
    lists: []
};

const listReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_LIST:
            return { ...state, lists: [...state.lists, action.payload] };
        case REMOVE_LIST:
            removeListFromLocalStorage(action.payload);
            return { ...state, lists: state.lists.filter((list: ListItem) => list.id !== action.payload) };
        case RENAME_LIST:
            renameListFromLocalStorage(action.payload.id, action.payload.newName);
            return {
                ...state,
                lists: state.lists.map((list: ListItem) =>
                    list.id === action.payload.id ? { ...list, name: action.payload.newName } : list
                )
            };

        default:
            return state;
    }
}

export default listReducer;