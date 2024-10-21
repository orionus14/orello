export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export interface ListItem {
    id: string;
    name: string;
}

export const addList = (list: ListItem) => ({
    type: ADD_LIST,
    payload: list
});

export const removeList = (id: string) => ({
    type: REMOVE_LIST,
    payload: id
});