import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <input
      onSubmit={handleSubmit}
      placeholder="Search order #"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-28 rounded-full bg-orange-100 px-4 py-2 text-sm text-stone-800 transition-all duration-300 placeholder:text-[12px] placeholder:text-stone-800 focus:outline-none focus:ring focus:ring-orange-800 focus:ring-opacity-50 sm:focus:w-48 md:w-64 md:placeholder:text-base md:focus:w-72"
    />
  );
}

export default SearchOrder;
