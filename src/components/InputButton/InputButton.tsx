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
                <div>
                    <input
                        onChange={(e) => setItemName(e.target.value)}
                        type="text" />
                </div>
                <div>
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
            <div>
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