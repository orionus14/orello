import React from 'react'
import classes from './DeleteItemButton.module.scss'

interface IDeleteItemButton {
    onClick: () => void;
}

const DeleteItemButton: React.FC<IDeleteItemButton> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classes['item-button-delete']}
        >
            Delete
        </button>
    )
}

export default DeleteItemButton