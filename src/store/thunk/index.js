import { getNextTerm, getPrevTerm, fetchTranslateGif } from '../';

export const translateNext = () => {
    return function thunk (dispatch, getState) {
        Promise.resolve(dispatch(getNextTerm()))
        .then(() => {
            const term = getState().translate.term;
            dispatch(fetchTranslateGif(term));
        })
        .catch(() => console.log('Translating next term unsuccessful'));
    }
}

export const translatePrev = () => {
    return function thunk (dispatch, getState) {
        Promise.resolve(dispatch(getPrevTerm()))
        .then(() => {
            const term = getState().translate.term;
            dispatch(fetchTranslateGif(term));
        })
        .catch(() => console.log('Translating previous term unsuccessful'));
    }
}