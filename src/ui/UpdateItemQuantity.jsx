import { useDispatch } from 'react-redux';
import Button from './Button';
import { decreaseItemQuantity, increaseItemQuantity } from '../features/cart/cartSlice';

function UpdateItemQuantity({ pizzaId,quantity }) {
const dispatch=useDispatch()
   function handleIncrease(){
    dispatch(increaseItemQuantity(pizzaId))
   }
   function handleDecrease(){
    dispatch(decreaseItemQuantity(pizzaId))
   }
  return (
    <div className='flex gap-2 items-center md:gap-3'>
      <Button onClick={handleDecrease} type="round">-</Button>
      <span className=' text-sm font-medium'>{quantity}</span>
      <Button onClick={handleIncrease} type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
