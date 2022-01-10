const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FRIEND_DETAILS':
                return action.payload;
        case 'EDIT_EVENT_NAME':
                return { ...state, event_name: action.payload };
        case 'EDIT_EVENT_DATE':
                return { ...state, event_date: action.payload };
        case 'EDIT_GIFT_NAME':
                return { ...state, idea: action.payload };
        default: 
                return state;
        }
    };

export default detailsReducer;