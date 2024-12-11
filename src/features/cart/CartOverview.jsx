import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartquantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const quantity = useSelector(getTotalCartquantity);
  const price = useSelector(getTotalCartPrice);
  if(!quantity) return null
  return (
    <div className="flex items-center bottom-0 right-0  w-full justify-between bg-stone-900 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{quantity}</span>
        <span>{formatCurrency(price)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
