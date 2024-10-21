import { createSelector } from "reselect";
import { RootState } from "../../types/types";

const selectCards = (state: RootState) => state.cards.cards;

export const selectCardsByListId = (listId: string) => createSelector(
    [selectCards],
    cards => cards.filter((card:any) => card.listId === listId)
)