import React from 'react'
import { useState } from 'react'
import classes from './InputButton.module.scss'

interface IInputButton {
    handleNewItem: (itemName: string) => void;
    name: string;
}

const InputButton: React.FC<IInputButton> = ({ handleNewItem, name }) => {
    const [showInput, setShowInput] = useState<boolean>(false); // перемикання інпута
    const [itemName, setItemName] = useState<string>(''); // значення з інпута

    const addNewItem = () => {
        if (!itemName) {
            return;
        }
        handleNewItem(itemName);

        setShowInput(false);
        setItemName('');
    }

    if (showInput) {
        return (
            <div className={classes['add-item-name']}>
                <div className={classes['input-header']}>
                    <input
                        onChange={(e) => setItemName(e.target.value)}
                        type="text" />
                </div>
                <div className={classes['input-buttons']}>
                    <button onClick={addNewItem}>
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
            <div className={classes['add-item']}>
                <button
                    onClick={() => setShowInput(true)}
                    className={classes["add-item-btn"]}>
                    Add New {name}
                </button>
            </div>
        )
    }
}

export default InputButton