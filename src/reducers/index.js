import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import charReducer from './charReducer';

export default combineReducers({
    books: bookReducer,
    chars: charReducer
})