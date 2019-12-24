import React from "react";

function SearchBox(props) {
  return (
    <div className="container search-box border">
      <div className="form-group">
        <label for="searchInput">Search for a book</label>
        <input
          type="text"
          className="form-control"
          onChange={props.onChange}
          id="search-input"
          placeholder="title, author, genre, keyword..." />
      </div>
      <button type="submit" className="btn btn-outline-dark btn-sm" onClick={props.onClick}>Search</button>
    </div>
  );
}

export default SearchBox;
