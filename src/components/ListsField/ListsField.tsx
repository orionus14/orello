import { createContext, useState } from 'react'
import GenerateLists from '../GenerateLists/GenerateLists'
import AddListButton from '../AddListButton/AddListButton'
import './ListsField.scss'

export const ListContext = createContext<JSX.Element[]>([]);

const ListsField = () => {
  // cardList - array of lists
  const [cardList, setCardList] = useState<JSX.Element[]>([]);

  const addNewList = (listItem: JSX.Element) => {
    setCardList(prevList => [...prevList, listItem]);
  }

  return (
    <ListContext.Provider value={cardList}>
      <div className='lists'>
        <GenerateLists cardList={cardList} />
        <AddListButton addNewList={addNewList} />
      </div>
    </ListContext.Provider>

  )
}

export default ListsField