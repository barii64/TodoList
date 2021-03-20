export default (state = [], action) => {
    switch (action.type) {
        case "get":
            return {
                ...state,
                TodoListElems: action.items
            }
        case "FETCH_FAILD":
            return {
                ...state,
                TodoListElems: []
            }
        default:
            return state;
    }
}
