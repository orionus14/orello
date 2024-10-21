import React from 'react'
import classes from './GenerateItems.module.scss'
import { IItems } from '../../types'
import { CardItem } from '../CardItem';
import { CardList } from '../CardList';
import { ItemType } from '../../types';

const GenerateItems: React.FC<IItems> = ({ items, type }) => {
    return (
        <>
            {items.map(item => (
                <div
                    className={classes[`${type}-item`]} 
                    key={item.id}
                >
                    {type === ItemType.card ? (
                        <CardItem name={item.name} id={item.id} />
                    ) : (
                        <CardList name={item.name} id={item.id} />
                    )}
                </div>
            ))}
        </>
    )
}

export default GenerateItems;