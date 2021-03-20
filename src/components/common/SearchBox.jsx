import React from "react";

const SearchBox = (props) => {
  const { handleSearch, search } = props;
  return (
    <div>
      <input
        type='text'
        className='form-control mb-2'
        placeholder='Search...'
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
