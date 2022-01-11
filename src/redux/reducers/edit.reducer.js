const editEventReducer = (state = {}, action) => {
    if (action.type === 'SET_EVENT_TO_EDIT') {
        return {
            name: action.payload.event_name,
            date: action.payload.event_date
        }
    } else if (action.type === 'EDIT_EVENT_NAME') {
        return { ... state, name: action.payload }
    } else if (action.type === 'EDIT_EVENT_DATE') {
        console.log('edit date', action.payload)
        // return { ... state, date: action.paylaod }
    }
    return state;
};

export default editEventReducer;