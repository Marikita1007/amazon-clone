export const initialState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKTE':
            // logic for removing item from basket
            break;
        default:
            return state;
    }
}

export default reducer;