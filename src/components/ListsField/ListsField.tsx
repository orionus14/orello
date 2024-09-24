import { createContext, useState } from 'react'
import GenerateLists from '../GenerateLists/GenerateLists'
import AddListButton from '../AddListButton/AddListButton'
import './ListsField.scss'

class ListItem {
  id: string;
  element: JSX.Element

  constructor(id: string, element: JSX.Element) {
    this.id = id;
    this.element = element;
  }
}

interface ListsContextType {
  lists: ListItem[];
  setLists: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

export const ListsContext = createContext<ListsContextType | undefined>(undefined);

const ListsField = () => {
  // lists - array of lists
  const [lists, setLists] = useState<ListItem[]>([]);

  const addNewList = (id: string, listItem: JSX.Element) => {
    const newList = new ListItem(id, listItem);
    setLists(prevList => [...prevList, newList]);
  }

  return (
    <ListsContext.Provider value={{lists, setLists}}>
      <div className='lists'>
        <GenerateLists lists={lists.map(list => list.element)} />
        <AddListButton addNewList={addNewList} />
      </div>
    </ListsContext.Provider>
  )
}

export default ListsField