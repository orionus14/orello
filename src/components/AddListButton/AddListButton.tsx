import { useState } from 'react';
import './AddListButton.scss'

const AddListButton = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const addNewList = () => {
    
  }

  if (showInput) {
    return (
      <div className='add-list-name'>
        <div>
          <input type="text" required />
        </div>
        <div>
          <button
            onClick={addNewList}>
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