import React from 'react'
import classes from './GenerateCards.module.scss'
import { IItems } from '../../types';

const GenerateCards: React.FC<IItems> = ({ items }) => {
    return (
        <>
            {items.map(card => (
                <div
                    className={classes['card-item']}
                    key={card.id}>{card.element}</div>
            ))}
        </>
    )
}

export default GenerateCards