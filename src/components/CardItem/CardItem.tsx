import { useContext } from 'react'
import './CardItem.scss'
import { CardsContext } from '../CardList/CardList'
import { DeleteItemButton } from '../DeleteItemButton'

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
      <DeleteItemButton onClick={removeCard} />
    </>
  )
}

export default CardItem