import { combineReducers } from 'redux';
import BooksReducer  from './reducer_books';
import Book  from './reducer_current';
const cbook='a';

const rootReducer = combineReducers({
	books : BooksReducer,
	current:Book
});

export default rootReducer;
