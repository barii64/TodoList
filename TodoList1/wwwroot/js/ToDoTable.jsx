import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

class ToDoTable extends React.Component {

    getToDoItems() {
        this.props.getToDoItems();
    }
    render() {
        return (
            <div className="table">
                <HeadRow rerenderParentCallback={this.getToDoItems} />
                <div className="tbody">
                    <div></div>
                    <TableItems rerenderParentCallback={this.props.getTodoItems} ToDoListData={this.props.TodoItemsValue} />
                </div>
            </div>
        )

    }
}
export default ToDoTable;