import { useState, useContext } from 'react'
import './CardList.scss'
import GenerateCards from '../GenerateCards/GenerateCards';
import CardItem from '../CardItem/CardItem';
import InputButton from '../InputButton/InputButton';
import { ListContext } from '../ListsField/ListsField';

interface Header {
  header: string
}

const CardList = ({ header }: Header) => {
  // itemList - array of Cards
  const [itemList, setItemList] = useState<JSX.Element[]>([]);
  const cardList = useContext(ListContext);

  const addNewItem = (cardItem: JSX.Element) => {
    setItemList(prevItem => [...prevItem, cardItem]);
  }

  const removeList = () => {
    console.log(cardList);
  }

  const handleNewCard = (cardName: string) => {
    const newCard = <CardItem header={cardName} />; // створення нової картки

    addNewItem(newCard);
  }

  return (
    <div className='card-list'>

      <div className='card-list-header'>
        {header}
        <button
          onClick={removeList}
          className='card-item-button-delete'>
          Delete
        </button>
      </div>

      <div className="card-list-items">
        <GenerateCards itemList={itemList} />
      </div>

      <div className='card-list-button-new'>
        <InputButton
          handleNewItem={handleNewCard}
          name='Card' />
      </div>

    </div>
  )
}

export default CardList