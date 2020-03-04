import { ADD_BOOK } from "../actions/books-action-type";
import details from "../data.json";

const initialState = {
  books: details
};

const Books = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, payload]
      };

    default:
      return { ...state };
  }
};

export default Books;
