import React from "react";

function BookCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img"
            src={props.thumbnail}
            id={props.id}
            alt={props.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-title">by {props.authors}</h6>
            <hr></hr>
            <p className="card-text">{props.description}</p>
            <span>
            <a className="btn btn-outline-dark book-button" target="_blank" href={props.link}>
              Learn more  
            </a>
            <a className="btn btn-outline-dark" href="">
              Save book
            </a>
            
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;


{/* <button type="button" className="btn btn-outline-dark btn-sm" onClick={props.onClick}>Save</button> */}