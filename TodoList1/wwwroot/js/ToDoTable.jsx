import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

const { connect } = ReactRedux;


function mapStateToProps(state) {
    return {
        TodoItemsValue: state.TodoListElems,
    };
}


var getAction = { type: "GET" };


function mapDispatchToProps(dispatch) {
    return {
        getTodoItems: function () {
            return fetch("/TodoItems/Get", {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: getAction.type, items: response });
                });
        },
        addTodoItem: function (title, checkbox) {
            fetch("/TodoItems/CreateJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Title: title,
                    IsDone: checkbox
                })
            });
            return fetch("/TodoItems/Get", {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: getAction.type, items: response });
                });
        }
    };
}

class ToDoTable extends React.Component {
    componentDidMount() {
        this.props.getTodoItems();
    }
    render() {
        return (
            <div className="table">
                <HeadRow rerenderParentCallback={this.props.getTodoItems} addTodoItem={this.props.addTodoItem} />
                <div className="tbody">
                    <div></div>
                    <TableItems rerenderParentCallback={this.props.getTodoItems} ToDoListData={this.props.TodoItemsValue} />
                </div>
            </div>
        )
    }
}


var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoTable);


export default connectedComponent;