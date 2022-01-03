const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FRIEND_DETAILS':
                return action.payload;
        default:
                return state;
        }
    };

export default detailsReducer;