import './AddListButton.scss'
import CardList from '../CardList/CardList';
import InputButton from '../InputButton/InputButton';

interface addNewList {
  addNewList: (newCard: JSX.Element) => void;
}

const AddListButton = ({ addNewList }: addNewList) => {

  const handleNewList = (listName: string) => {
    const newList = <CardList header={listName} />; // створення нового списку

    addNewList(newList);
  }

  return (
    <InputButton
      handleNewItem={handleNewList}
      name='List' />
  )
}

export default AddListButton