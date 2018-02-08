const SET_WORD_TO_TRANS = 'SET_WORD_TO_TRANS';

export const setWord = (word) => ({
  type: SET_WORD_TO_TRANS,
  word
});

export default function(state = 'Bonjour', action) {
    let newState = state;
    switch (action.type) {

    case SET_WORD_TO_TRANS:
        newState = action.word;
        return newState;
    default:
        return state;
    }
};