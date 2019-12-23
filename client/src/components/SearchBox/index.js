import React from "react";

function SearchBox() {
  return (
    <div className="container search-box border">
      <div className="form-group">
        <label for="searchInput">Search for a book</label>
        <input
          type="text"
          className="form-control"
          id="search-input"
          placeholder="" />
      </div>
      <button type="button" class="btn btn-outline-dark btn-sm">Search</button>
    </div>
  );
}

export default SearchBox;
