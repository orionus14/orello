import { ADD_LIST, REMOVE_LIST, ListItem } from "../actions/listActions";

interface ListState {
    lists: ListItem[];
}

const initialState: ListState = {
    lists: []
};

const listReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_LIST:
            return { ...state, lists: [...state.lists, action.payload] };
        case REMOVE_LIST:
            return { ...state, lists: state.lists.filter(list => list.id !== action.payload) };
        default: 
            return state;
    }
}

export default listReducer;