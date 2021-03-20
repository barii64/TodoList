import ToDoTable from './ToDoTable.jsx';
const { connect } = ReactRedux;

function mapStateToProps(state) {
    return {
        TodoItemsValue: state.TodoListElems,
    };
}

var addAction = { type: "add" };
var deleteAction = { type: "delete" };
var getAction = { type: "get" };

function mapDispatchToProps(dispatch) {
    return {
        getTodoItems: function () {
            return fetch("/TodoItems/Get", {
                method: "get"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: "get", items: response });
                });
        },
        addTodoItem: function () {
            return dispatch(addAction);
        },
        deleteTodoItem: function () {
            return dispatch(deleteAction);
        }
    };
}

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoTable);


export default connectedComponent;

