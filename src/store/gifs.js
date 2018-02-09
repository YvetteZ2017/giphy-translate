import axios from 'axios';


const TRANSLATE_PATH = 'https://api.giphy.com/v1/gifs/translate';
const SEARCH_PATH = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'dc6zaTOxFJmzC';


//action types
const SET_GIF_LIST = 'SET_GIF_LIST';
const SET_MAIN_IMG = 'SET_MAIN_IMG';


//action creators
export const setMainImg = (arr) => ({
  type: SET_MAIN_IMG,
  arr
});

export const setList = (list, mainId) => ({
    type: SET_GIF_LIST,
    list,
    mainId
});


//thunk creators
export const fetchTranslateGif = (term) => {
    return function thunk (dispatch) {
        axios.get(`${TRANSLATE_PATH}?api_key=${API_KEY}&s=${term}`)
        .then(res => {
            let mainImage = res.data.data;
            let mainId = mainImage.id
            dispatch(setMainImg([mainImage]));
            return mainId;
        }).then((mainId) => {
            dispatch(fetchGifList(term, mainId));
        })
        .catch(() => console.log('Fetching main image unsuccessful'));
    };
}

export const fetchGifList = (term, mainId) => {
    return function thunk (dispatch) {
        axios.get(`${SEARCH_PATH}?q=${term}&api_key=${API_KEY}`)
        .then(res => {
            let list = res.data.data;
            dispatch(setList(list, mainId));
        })
        .catch(() => console.log('Fetching list from search unsuccessful'));
    };
}


//reducer
export default function(state = [], action) {
    let newState = state;
    switch (action.type) {
    
    case SET_MAIN_IMG:
        if(action.arr[0].type === 'gif') { //If fetched gif by translation
            newState = action.arr;
        } else {
            newState = [];
        }
        return newState;

    case SET_GIF_LIST:
        let list = action.list.filter(image => image.id !== action.mainId);
        let set = new Set(list);
        let setList = [...set];
        newState = state.concat(setList);
        return newState;
    
    default:
        return state;
    }
};