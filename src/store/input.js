const SET_INPUT = 'SET_INPUT';

export const setInput = (text) => ({
  type: SET_INPUT,
  text
});

export default function(state = '', action) {
    let newState = state;
    switch (action.type) {

    case SET_INPUT:
        newState = action.text;
        return newState;
    
    default:
        return state;
    }
};