import { useDispatch } from 'react-redux';
import { deleteItem } from '../features/cart/cartSlice';
import Button from './Button';

function DeleteButton({ pizzaId, onDelete }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
    if (onDelete) onDelete(); // Trigger the callback
  }

  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
