import { formatCurrency } from '../../utils/helpers';
import DeleteButton from '../../ui/DeleteButton';
import { useState } from 'react';
import Message from '../../ui/Message';
import UpdateItemQuantity from '../../ui/UpdateItemQuantity';

function CartItem({ item }) {
  const [messageVisible, setMessageVisible] = useState(false);
  const { pizzaId, name, quantity, totalPrice } = item;

  function handleDeleteMessage() {
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  }
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId}  quantity={quantity} />
        <DeleteButton onDelete={handleDeleteMessage} pizzaId={pizzaId} />
      </div>
      {messageVisible && <Message>Deleted from cart successfully!</Message>}
    </li>
  );
}

export default CartItem;
