import axios from 'axios';

const TRANSLATE_PATH = 'https://api.giphy.com/v1/gifs/translate';
const SEARCH_PATH = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'dc6zaTOxFJmzC';

const SET_LIST = 'SET_LIST';
const SET_MAIN_IMG = 'SET_MAIN_IMG';


export const setMainImg = (image) => ({
  type: SET_MAIN_IMG,
  image
});

export const setList = (list, mainId) => ({
    type: SET_LIST,
    list,
    mainId
});


export const fetchTranslateGif = (word) => {
    return function thunk (dispatch) {
        axios.get(`${TRANSLATE_PATH}?api_key=${API_KEY}&s=${word}`)
        .then(res => {
            let mainImage = res.data.data;
            let mainId = mainImage.id
            dispatch(setMainImg([mainImage]));
            console.log('mainId', mainId)
            return mainId;
        }).then((mainId) => {
            dispatch(fetchList(word, mainId));
        })
        .catch(() => console.log('Fetching main image unsuccessful'));
    };
}

export const fetchList = (word, mainId) => {
    return function thunk (dispatch) {
        axios.get(`${SEARCH_PATH}?q=${word}&api_key=${API_KEY}`)
        .then(res => {
            let list = res.data.data;
            dispatch(setList(list, mainId));
        })
        .catch(() => console.log('Fetching list from search unsuccessful'));
    };
}


export default function(state = [], action) {
    let newState = state;
    switch (action.type) {
    
    case SET_MAIN_IMG:
        newState = action.image;
        return newState;

    case SET_LIST:
    let list = action.list.filter(image => image.id !== action.mainId);
    console.log('id', action)
    console.log('list',list)
    let set = new Set(list);
    let setList = [...set];
    console.log('image list', action.list.length, setList.length)
        newState = state.concat(setList);
        return newState;
    
    default:
        return state;
    }
};