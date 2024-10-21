import { RootState } from "../types/types";
import { Card } from "../store/actions/cardActions";
import { ListItem } from "../store/actions/listActions";

export const saveState = (state: RootState): void => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

export const loadState = (): RootState | undefined => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState) as RootState;
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
};

export const removeCardFromLocalStorage = (cardId: string): void => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState) {
            const state: RootState = JSON.parse(serializedState) as RootState;
            const updatedCards = state.cards.cards.filter((card: Card) => card.id !== cardId);

            state.cards.cards = updatedCards;

            const newSerializedState = JSON.stringify(state);
            localStorage.setItem('reduxState', newSerializedState);
        }
    } catch (e) {
        console.error("Could not remove card from localStorage", e);
    }
};

export const removeListFromLocalStorage = (listId: string): void => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState) {
            const state: RootState = JSON.parse(serializedState) as RootState; 

            const updatedLists = state.lists.lists.filter((list: ListItem) => list.id !== listId);
            const updatedCards = state.cards.cards.filter((card: Card) => card.listId !== listId);

            state.lists.lists = updatedLists;
            state.cards.cards = updatedCards;

            const newSerializedState = JSON.stringify(state);
            console.log(newSerializedState);
            
            localStorage.setItem('reduxState', newSerializedState);
        }
    } catch (e) {
        console.error("Could not remove list from localStorage", e);
    }
};