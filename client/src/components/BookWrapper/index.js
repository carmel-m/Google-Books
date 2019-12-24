import React from "react";

function BookWrapper(props) {
  return (
    <div className="container book-wrapper">
      <div className="row">{props.children}</div>
    </div>
  );
}

export default BookWrapper;
