import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import Logo from './Logo';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-400 bg-orange-800 px-4 py-3 uppercase text-stone-200 sm:px-6">
      <Link className="flex items-center gap-4 tracking-widest" to="/">
        <Logo />
        Fast delivery Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
