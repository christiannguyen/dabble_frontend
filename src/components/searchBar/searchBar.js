import React, { useState, useEffect } from 'react';

function SearchBar(props) {

  const [searchInput, setSearch] = useState('');
  // const { submitFunction }

    // useEffect(() => {
    //   function handleKeyDown(e) {
    //     e.preventDefault();
    //     console.log('e', e);
    //     console.log('key', e.key)
    //   }

    //   // e.key = "Enter"
    //   //  e.keyCode = 13
    //   // Note: this implementation is a bit simplified
    //   window.addEventListener('keydown', handleKeyDown);
    //   return () => window.removeEventListener('keydown', handleKeyDown);
    // }, []);

  return (
    <div>
      <p>{searchInput}</p>
      <input onChange={(e) => setSearch(e.target.value) }/>
      {/* <button></button> */}
    </div>
  )
}

export default SearchBar;
