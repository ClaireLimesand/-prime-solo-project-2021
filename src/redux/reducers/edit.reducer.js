const editReducer = (state = {}, action) => {
    if (action.type === 'EDIT_EVENT_NAME') {
        return { ...state, }
    }
    };

export default editReducer;