export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RENAME_LIST = 'RENAME_LIST';

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

export const renameList = (id: string, newName: string) => ({
    type: RENAME_LIST,
    payload: {id, newName}
})