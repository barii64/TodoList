import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

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
                    <TableItems rerenderParentCallback={this.props.getTodoItems} ToDoListData={this.props.TodoItemsValue} deleteTodoItem={this.props.deleteTodoItem} />
                </div>
            </div>
        )
    }
}

export default ToDoTable;