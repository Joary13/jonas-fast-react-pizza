import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

/*eslint-disable*/

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      delete
    </Button>
  );
}

export default DeleteItem;
