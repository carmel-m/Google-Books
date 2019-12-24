import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import BookWrapper from "../components/BookWrapper";
import BookBox from "../components/BookBox";
import googleAPI from "../utils/googleAPI";

class Home extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container-fluid">
            <SearchBox />
        </div>
        <div className="container">
            <BookWrapper />
        </div>
      </div>
    );
  }
}

export default Home;
