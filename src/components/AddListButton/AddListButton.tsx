import { useState } from 'react';
import './AddListButton.scss'
import CardList from '../CardList/CardList';

interface addNewList {
  addNewList: (newCard: JSX.Element) => void;
}

const AddListButton = ({ addNewList }: addNewList) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [listName, setListName] = useState<string>('');

  const handleNewList = () => {
    const newCard = <CardList header={listName} />;
    addNewList(newCard);
    setShowInput(false);
    setListName('');
  }

  if (showInput) {
    return (
      <div className='add-list-name'>
        <div>
          <input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            type="text" required />
        </div>
        <div>
          <button
            onClick={handleNewList}>
            Add New List
          </button>
          <button
            onClick={() => setShowInput(false)}>
            Cancel
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <>
        <button
          onClick={() => setShowInput(true)}
          className="add-list-btn">
          Add New List
        </button>
      </>
    )
  }
}

export default AddListButton