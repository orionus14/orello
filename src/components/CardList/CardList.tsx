import React from 'react'
import classes from './CardList.module.scss'
import { InputButton } from '../InputButton';
import { v4 as uuidv4 } from 'uuid';
import { DeleteItemButton } from '../DeleteItemButton';
import { IName } from '../../types';
import { GenerateItems } from '../GenerateItems';
import { ItemType } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../store/actions/cardActions';
import { removeList } from '../../store/actions/listActions';
import { selectCardsByListId } from '../../store/selectors/cardSelectors';

const CardList: React.FC<IName> = ({ name, id }) => {
  // cards - array of Cards
  const cards = useSelector(selectCardsByListId(id));
  const dispatch = useDispatch();

  const handleNewCard = (cardName: string) => {
    const newCardId = uuidv4();
    dispatch(addCard({
      id: newCardId,
      listId: id,
      name: cardName
    }))
  }

  const handleRemoveList = () => {
    dispatch(removeList(id));
  }

  return (
    <div className={classes['card-list']}>

      <div className={classes['card-list-name']}>
        {name}
        <DeleteItemButton onClick={handleRemoveList} />
      </div>

      <div className={classes['card-list-items']}>
        <GenerateItems items={cards} type={ItemType.card} />
      </div>

      <div className={classes['card-list-button-new']}>
        <InputButton
          handleNewItem={handleNewCard}
          name='Card'
        />
      </div>

    </div>
  )
}

export default CardList