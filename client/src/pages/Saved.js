import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BookWrapper from "../components/BookWrapper";
import BookBox from "../components/BookBox";
// import API from "../utils/API";

class Saved extends Component {
  state = {};

  render() {
    return (
        <div>
          <Jumbotron />
          <div className="container">
              <BookWrapper>

                  
              </BookWrapper>
          </div>
        </div>
      );
  }
}

export default Saved;
