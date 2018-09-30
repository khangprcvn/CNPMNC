import data_book from '../assets/data_book';

const initialSearch = {
  books: data_book,
  searchValue: '',
  link: '/'
};

function searchBookReducer(state = initialSearch, action) {
  console.log(action);
  switch (action.type) {
    case 'SEARCH_ACTION':
      let searchValue = action.payload;
      return {
        ...state,
        searchValue: searchValue,
        books: searchValue ?
          data_book.filter(
            book => book.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) : data_book
      }
    case 'VIEW_ACTION':
      return {
        ...state,
        link: action.payload.link,
        id: action.payload.index
      }
    case 'ADD_BOOK':
      return [
        ...state,
        {
          name: action.name,
          author: action.author
        }
      ]
    default:
      return state;
  }
}

export default searchBookReducer;