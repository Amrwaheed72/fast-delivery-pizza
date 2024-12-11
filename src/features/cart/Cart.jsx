import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearcart } from './cartSlice';
import { useState } from 'react';
import Message from '../../ui/Message';
import EmptyCart from './EmptyCart';

function Cart() {
  const [messageVisible, setMessageVisible] = useState(false);
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);

  function handleDeleteCart() {
    setMessageVisible(true);
    dispatch(clearcart(cart));
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  }
  if (!cart.length)
    return (
      <>
        <EmptyCart />
        {messageVisible && <Message>cart deleted successfully!</Message>}
      </>
    );

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="mt-6 space-x-3">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleDeleteCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
