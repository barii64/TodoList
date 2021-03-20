import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

class ToDoTable extends React.Component {
    componentDidMount() {
        console.log('did mount');
        this.props.getToDoItems();
    }
    getToDoItems() {
        this.props.getToDoItems();
    }
    render() {
        console.log(this.props.getTodoItems());
        console.log(this.props.TodoItemsValue);
        console.log(this.props.TodoListElems);
        return (
            <div className="table">
                <HeadRow rerenderParentCallback={this.getToDoItems} />
                <div className="tbody">
                    <div></div>
                    <TableItems rerenderParentCallback={this.props.getTodoItems} ToDoListData={this.props.TodoListElems} />
                </div>
            </div>
        )

    }
}
export default ToDoTable;