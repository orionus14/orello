import React from 'react'
import './CardItem.module.scss'
import { DeleteItemButton } from '../DeleteItemButton'
import { IName } from '../../types'
import { useDispatch } from 'react-redux'
import { removeCard } from '../../store/actions/cardActions'

const CardItem: React.FC<IName> = ({ name, id }) => {
  const dispatch = useDispatch();
  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  }

  return (
    <>
      {name}
      <DeleteItemButton onClick={handleRemoveCard} />
    </>
  )
}

export default CardItem