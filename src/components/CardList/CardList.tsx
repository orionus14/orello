import { useState, useContext } from 'react'
import './CardList.scss'
import GenerateCards from '../GenerateCards/GenerateCards';
import CardItem from '../CardItem/CardItem';
import InputButton from '../InputButton/InputButton';
import { ListsContext } from '../ListsField/ListsField';

interface Header {
  header: string
  id: string
}

const CardList = ({ header, id }: Header) => {
  // itemList - array of Cards
  const [itemList, setItemList] = useState<JSX.Element[]>([]);

  const context = useContext(ListsContext);
  if (!context) {
    throw new Error('CardList must be used within a ListsProvider');
  }
  const { lists, setLists } = context;

  const addNewCard = (cardItem: JSX.Element) => {
    setItemList(prevItem => [...prevItem, cardItem]);
  }

  const handleNewCard = (cardName: string) => {
    const newCard = <CardItem header={cardName} />; // створення нової картки
    addNewCard(newCard);
  }

  const removeList = () => {
    const newList = lists.filter(item => item.id !== id)
    setLists(newList);
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