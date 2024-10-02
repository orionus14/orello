import { createContext, useState } from 'react'
import { AddList } from '../AddList';
import classes from './ListsField.module.scss'
import { GenerateItems } from '../GenerateItems';
import { ItemType } from '../../types';

class ListItem {
  id: string;
  name: string;
  element: JSX.Element

  constructor(id: string, name: string, element: JSX.Element) {
    this.id = id;
    this.name = name;
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

  const addNewList = (id: string, name: string, listItem: JSX.Element) => {
    const newList = new ListItem(id, name, listItem);
    setLists(prevList => [...prevList, newList]);
  }

  return (
    <ListsContext.Provider value={{lists, setLists}}>
      <div className={classes.lists}>
        <GenerateItems items={lists} type={ItemType.list} />
        <AddList addNewList={addNewList} />
      </div>
    </ListsContext.Provider>
  )
}

export default ListsField