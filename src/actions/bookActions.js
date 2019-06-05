import { FETCH_BOOKS, FETCH_CHARS } from './types';
import axios from 'axios';

export const fetchBooks = () => dispatch => {
        axios.get('https://www.anapioficeandfire.com/api/books')
        .then( res => {
            //console.log(res.data);
            dispatch({
                type: FETCH_BOOKS,
                payload: res.data
            })
        })
        .catch( err => {
            console.log(err);
        })
}

export const fetchChars = () => dispatch => {
    axios.get('https://www.anapioficeandfire.com/api/characters')
    .then( res => {
        //console.log(res.data);
        dispatch({
            type: FETCH_CHARS,
            payload: res.data
        })
    })
    .catch( err => {
        console.log(err);
    })
}