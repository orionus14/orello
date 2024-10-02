import './AddListButton.module.scss'
import { CardList } from '../CardList';
import { InputButton } from '../InputButton';
import { v4 as uuidv4 } from 'uuid';

interface IAddNewList {
  addNewList: (id: string, name: string, newCard: JSX.Element) => void;
}

const AddListButton: React.FC<IAddNewList> = ({ addNewList }) => {

  const handleCreateList = (listName: string) => {
    const newListId = uuidv4();
    const name = listName;
    const newList = <CardList name={listName} id={newListId} />; // створення нового списку
    addNewList(newListId, name, newList);
  }

  return (
    <InputButton
      handleNewItem={handleCreateList}
      name='List' />
  )
}

export default AddListButton