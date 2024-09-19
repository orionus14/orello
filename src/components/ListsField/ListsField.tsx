import React, { useState } from 'react'
import GenerateLists from '../GenerateLists/GenerateLists'
import AddListButton from '../AddListButton/AddListButton'
import './ListsField.scss'

const ListsField = () => {
    const [cardList, setCardList] = useState<JSX.Element[]>([]);

    const addNewList = (listItem: JSX.Element) => {
        setCardList(prevList => [...prevList, listItem]);
    }

  return (
    <>
      <GenerateLists cardList={cardList} />
      <AddListButton addNewList={addNewList} />
    </>
  )
}

export default ListsField
