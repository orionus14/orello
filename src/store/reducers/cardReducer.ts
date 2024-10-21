import { ADD_CARD, REMOVE_CARD, Card } from '../actions/cardActions';

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case REMOVE_CARD:
      return { ...state, cards: state.cards.filter(card => card.id !== action.payload) };
    default:
      return state;
  }
};

export default cardReducer;