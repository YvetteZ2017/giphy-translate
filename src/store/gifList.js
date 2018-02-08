import axios from 'axios';

const PATH = 'https://api.giphy.com/v1/gifs/translate';
const API_KEY = 'dc6zaTOxFJmzC';

const SET_LIST = 'SET_LIST';
const FETCH_LIST = 'FETCH_LIST';


export const setList = () => ({
  type: SET_LIST,
  
});

export const fetchList = (word) => {
    console.log('!!!')
    return function thunk (dispatch) {
        axios.get(`${PATH}?api_key=${API_KEY}&s=${word}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(() => console.log('Fetching categories unsuccessful'));
    };
}

export default function(state = {}, action) {
    let newState = state;
    switch (action.type) {

    case FETCH_LIST:
        // newState = action.text;
        return state;
    
    default:
        return state;
    }
};