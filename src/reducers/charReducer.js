import { FETCH_CHARS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_CHARS: 
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}