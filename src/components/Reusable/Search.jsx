import React from 'react';

const Search = (props) => {
  return (
    <input
      type='text'
      placeholder='Wyszukaj'
      onChange={props.onSearch}
      className='bg-white w-3/4 mx-auto py-2 px-3 my-6 shadow-md rounded-md outline-none text-onyx'
    />
  );
};

export default Search;
