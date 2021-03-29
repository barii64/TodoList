﻿const defaultState = {
    hiddenAddButton: false,
    TodoListElems: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case "GET":
            return {
                ...state,
                TodoListElems: action.items
            }
        case "DELETE":
            return {
                ...state,
                TodoListElems: state.TodoListElems.filter(item => item.id !== action.items)
            }
        case "HIDEADDBUTTON":
            return {
                ...state,
                hiddenAddButton: !state.hiddenAddButton
            }
        default:
            return state;
    }
}

