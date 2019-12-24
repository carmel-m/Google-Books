import axios from "axios";

export default {


  // Need to include query? 

  // getRecipes: function(query) {
  //   return axios.get("/api/recipes", { params: { q: query } });
  // },

  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
 
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


// https://www.googleapis.com/books/v1/volumes
// https://www.googleapis.com/books/v1/volumes/volumeId