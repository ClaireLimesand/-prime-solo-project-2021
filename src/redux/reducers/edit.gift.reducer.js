const editGiftReducer = (state = {}, action) => {
    if (action.type === 'SET_GIFT_TO_EDIT') {
        return {
            idea : action.payload.idea,
            gift_id: action.payload.gift_id,
            friend_id: action.payload.friend_id
        }
    } else if (action.type === 'EDIT_GIFT_IDEA') {
        return { ... state, idea: action.payload }
    } 
    // else if (action.type === 'EDIT_EVENT_DATE') {
    //     console.log('edit date', action.payload)
    //     return { ... state, date: action.paylaod }
    // }
    return state;
};

export default editGiftReducer;