import React from "react";

function Search({ handleSearch }) {

  function handleUserInput (e) {
    handleSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleUserInput}
      />
    </div>
  );
}

export default Search;
