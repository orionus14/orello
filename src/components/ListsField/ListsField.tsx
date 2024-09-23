import { useState } from 'react'
import GenerateLists from '../GenerateLists/GenerateLists'
import AddListButton from '../AddListButton/AddListButton'
import './ListsField.scss'

const ListsField = () => {
  // cardList - array of lists
    const [cardList, setCardList] = useState<JSX.Element[]>([]);

    // 
    const addNewList = (listItem: JSX.Element) => {
        setCardList(prevList => [...prevList, listItem]);
    }

  return (
    <div className='lists'>
      <GenerateLists cardList={cardList} />
      <AddListButton addNewList={addNewList} />
    </div>
  )
}

export default ListsField