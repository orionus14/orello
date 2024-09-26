import './AddListButton.scss'
import CardList from '../CardList/CardList';
import InputButton from '../InputButton/InputButton';
import { v4 as uuidv4 } from 'uuid';

interface AddNewList {
  addNewList: (id: string, name: string, newCard: JSX.Element) => void;
}

const AddListButton = ({ addNewList }: AddNewList) => {

  const handleNewList = (listName: string) => {
    const newListId = uuidv4();
    const name = listName;
    const newList = <CardList name={listName} id={newListId} />; // створення нового списку
    addNewList(newListId, name, newList);
  }

  return (
    <InputButton
      handleNewItem={handleNewList}
      name='List' />
  )
}

export default AddListButton