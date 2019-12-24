import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import BookWrapper from "../components/BookWrapper";
import BookCard from "../components/BookCard";
// import googleAPI from "../utils/googleAPI";
import axios from "axios";

class Home extends Component {
  state = {
    books: [],
    searchQuery: ""
  };

  handleInputChange = event => {
    // Destructure the value property of event.target, update the appropriate state
    const { value } = event.target;
    this.setState({
      searchQuery: value
    });
    console.log(this.state.searchQuery);
  };

  handleFormSubmit = event => {
    // When the form is submitted, get books and update the books state
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`
      )
      .then(res => this.setState({ books: res.data.items }))
      .then(() => console.log(this.state.books));
    // .catch(err => console.log(err));
  };

  // componentDidMount() {
  //   googleAPI
  //     .getBooks(this.props.match.params)
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container-fluid">
          <SearchBox
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
        </div>
        <div className="container">
          <BookWrapper>
            <div className="row card-row">
              {this.state.books.map(book => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  thumbnail={
                    book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.thumbnail
                  }
                  link={book.volumeInfo.infoLink}
                />
              ))}
            </div>
          </BookWrapper>
        </div>
      </div>
    );
  }
}

export default Home;
