import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import { getCurrentQuantityById } from '../cart/cartSlice';
import { useState } from 'react';
import Message from '../../ui/Message';
import DeleteButton from '../../ui/DeleteButton';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const [messageVisible, setMessageVisible] = useState(false);
  const dispatch = useDispatch();

  const currentQuentity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuentity > 0;
  function handleAddToCart() {
    setMessageVisible(true);
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  }
  function handleDeleteMessage() {
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  }
  return (
    <li className="flex gap-4 py-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-400">
              Sold out
            </p>
          )}
          {isInCart && (
            <DeleteButton onDelete={handleDeleteMessage} pizzaId={id} />
          )}
          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type="small">
              Add to cart
            </Button>
          )}
          {messageVisible && (
            <Message>
              {isInCart
                ? 'Added to cart successfully!'
                : 'Deleted from cart successfully!'}
            </Message>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
