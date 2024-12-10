import { Link } from 'react-router-dom';

function Button({ children, disabled, to }) {
  const className =
    'inline-block rounded-full bg-orange-800 px-4 py-3 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-800 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;