import { useContext } from 'react'
import './CardItem.scss'
import { CardsContext } from '../CardList/CardList'

interface Name {
  name: string
  id: string
}

const CardItem = ({ name, id }: Name) => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error('Cards must be used within a CardsProvider');
  }
  const { cards, setCards } = context;

  const removeCard = () => {
    const newCardList = cards.filter(card => card.id !== id);
    setCards(newCardList);
  }

  return (
    <>
      {name}
      <button
        onClick={removeCard}
        className='card-item-button-delete'>
        Delete
      </button>
    </>
  )
}

export default CardItem