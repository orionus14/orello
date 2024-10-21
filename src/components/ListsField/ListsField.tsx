import classes from './ListsField.module.scss'
import { GenerateItems } from '../GenerateItems';
import { ItemType } from '../../types';
import { InputButton } from '../InputButton';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../store/actions/listActions';
import { RootState } from '../../types/types';

const ListsField = () => {
  // lists - array of lists
  const lists = useSelector((state: RootState) => state.lists.lists);
  const dispatch = useDispatch();

  const handleCreateList = (listName: string) => {
    const newListId = uuidv4();
    dispatch(addList({
      id: newListId,
      name: listName
    }))
  }

  return (
    <div className={classes.lists}>
      <GenerateItems items={lists} type={ItemType.list} />
      <InputButton
        handleNewItem={handleCreateList}
        name='List'
      />
    </div>
  )
}

export default ListsField