import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block text-sm rounded-full bg-orange-800 font-semibold uppercase tracking-wide text-stone-200 transition-colors duration-300 hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-800 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full border-2 border-orange-300 hover:border-orange-200 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-200 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
