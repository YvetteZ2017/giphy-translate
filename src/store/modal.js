const initialState = {
    modalIsOpen: false,
    selectedImg: null
}

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (gif) => ({
    type: OPEN_MODAL,
    gif
});

export const closeModal = (gif) => ({
   type: CLOSE_MODAL,
});


export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {

    case OPEN_MODAL:
        newState = {...state, modalIsOpen: true, selectedImg: action.gif}
        return newState;

    case CLOSE_MODAL:
        newState = {...state, modalIsOpen: false, selectedImg: null}
        return newState;
    
    default:
        return state;
    }
};