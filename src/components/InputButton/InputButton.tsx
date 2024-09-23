import { useState } from 'react'
import './InputButton.scss'

interface InputButton {
    handleNewItem: (itemName: string) => void;
    name: string;
}

const InputButton = ({ handleNewItem, name }: InputButton) => {
    const [showInput, setShowInput] = useState<boolean>(false); // перемикання інпута
    const [itemName, setItemName] = useState<string>(''); // значення з інпута

    const addNewItem = () => {
        handleNewItem(itemName);

        setShowInput(false);
        setItemName('');
    }

    if (showInput) {
        return (
            <div className='add-item-name'>
                <div className='input-header'>
                    <input
                        onChange={(e) => setItemName(e.target.value)}
                        type="text" />
                </div>
                <div className='input-buttons'>
                    <button
                        onClick={addNewItem}>
                        Add New {name}
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
            <div className='add-item'>
                <button
                    onClick={() => setShowInput(true)}
                    className="add-item-btn">
                    Add New {name}
                </button>
            </div>
        )
    }
}

export default InputButton