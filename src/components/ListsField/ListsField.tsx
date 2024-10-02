import { createContext, useState } from 'react'
import classes from './ListsField.module.scss'
import { GenerateItems } from '../GenerateItems';
import { ItemType } from '../../types';
import { CardList } from '../CardList';
import { InputButton } from '../InputButton';
import { v4 as uuidv4 } from 'uuid';

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

  const handleCreateList = (listName: string) => {
    const newListId = uuidv4();
    const name = listName;
    const newList = <CardList name={listName} id={newListId} />; // створення нового списку
    addNewList(newListId, name, newList);
  }

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      <div className={classes.lists}>
        <GenerateItems items={lists} type={ItemType.list} />
        <InputButton
          handleNewItem={handleCreateList}
          name='List'
        />
      </div>
    </ListsContext.Provider>
  )
}

export default ListsField