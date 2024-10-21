export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export interface Card {
  id: string;
  listId: string;
  name: string;
}

export const addCard = (card: Card) => ({
  type: ADD_CARD,
  payload: card,
});

export const removeCard = (id: string) => ({
  type: REMOVE_CARD,
  payload: id,
});
