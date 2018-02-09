const SET_INPUT = 'SET_INPUT';
const CLEAR_INPUT = 'CLEAR_INPUT';


export const setInput = (text) => ({
  type: SET_INPUT,
  text
});

export const clearInput = () => ({
    type: CLEAR_INPUT,
});

export default function(state = '', action) {
    let newState = state;
    switch (action.type) {

    case SET_INPUT:
        newState = action.text;
        return newState;

    case CLEAR_INPUT:
        return '';
    
    default:
        return state;
    }
};