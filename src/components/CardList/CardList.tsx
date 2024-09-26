import { useState, useContext, createContext } from 'react'
import './CardList.scss'
import GenerateCards from '../GenerateCards/GenerateCards';
import CardItem from '../CardItem/CardItem';
import InputButton from '../InputButton/InputButton';
import { ListsContext } from '../ListsField/ListsField';
import { v4 as uuidv4 } from 'uuid';

class Card {
  id: string;
  name: string;
  element: JSX.Element

  constructor(id: string, name: string, element: JSX.Element) {
    this.id = id;
    this.name = name;
    this.element = element;
  }
}

interface CardsContextType {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

export const CardsContext = createContext<CardsContextType | undefined>(undefined);

interface Name {
  name: string
  id: string
}

const CardList = ({ name, id }: Name) => {
  // cards - array of Cards
  const [cards, setCards] = useState<Card[]>([]);

  const context = useContext(ListsContext);
  if (!context) {
    throw new Error('Lists must be used within a ListsProvider');
  }
  const { lists, setLists } = context;

  const addNewCard = (id: string, card: JSX.Element) => {
    const newCard = new Card(id, name, card);
    setCards(prevItem => [...prevItem, newCard]);
  }

  const handleNewCard = (cardName: string) => {
    const newCardId = uuidv4();
    const newCardName = cardName;
    const newCardItem = <CardItem id={newCardId} name={newCardName} />; // створення нової картки
    addNewCard(newCardId, newCardItem);
  }

  // Видалення списку
  const removeList = () => {
    const newList = lists.filter(item => item.id !== id)
    setLists(newList);
  }

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      <div className='card-list'>

        <div className='card-list-name'>
          {name}
          <button
            onClick={removeList}
            className='card-item-button-delete'>
            Delete
          </button>
        </div>

        <div className="card-list-items">
          <GenerateCards cards={cards} />
        </div>

        <div className='card-list-button-new'>
          <InputButton
            handleNewItem={handleNewCard}
            name='Card' />
        </div>

      </div>
    </CardsContext.Provider>
  )
}

export default CardList