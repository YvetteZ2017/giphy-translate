const initialState = {
    termList: [],
    term:'',
    id: 0
}

const SET_TERM_LIST = 'SET_TERM_LIST';
const GET_NEXT_TERM = 'GET_NEXT_TERM';
const GET_PREV_TERM = 'GET_PREV_TERM';

export const setTermList = (termList) => ({
  type: SET_TERM_LIST,
  termList
});

export const getNextTerm = () => ({
    type: GET_NEXT_TERM,
});

export const getPrevTerm = () => ({
    type: GET_PREV_TERM,
});

export default function(state = initialState, action) {
    let newState = state;
    let id = state.id;
    switch (action.type) {

    case SET_TERM_LIST:
        newState = {...state, termList: action.termList, term: action.termList[0], id:0};
        return newState;

    case GET_NEXT_TERM:
        if(state.id < state.termList.length - 2) {
           id = state.id++;
        }
        newState = {...state, id, term: state.termList[id]}
        return newState;
    
    case GET_NEXT_TERM:
        if(state.id > 0) {
           id = state.id--;
        }
        newState = {...state, id, term: state.termList[id]}
        return newState;

    default:
        return state;
    }
};