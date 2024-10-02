import React from 'react'
import classes from './GenerateItems.module.scss'
import { IItems } from '../../types'

const GenerateItems: React.FC<IItems> = ({ items, type }) => {
    return (
        <>
            {items.map(item => (
                <div
                    className={classes[`${type}-item`]}
                    key={item.id}
                >
                    {item.element}
                </div>
            ))}
        </>
    )
}

export default GenerateItems