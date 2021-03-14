import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

class ToDoTable extends React.Component {
    constructor() {
        super();

        this.state = {
            ToDoListData: []
        }
        axios.get("https://localhost:44329/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
        this.getToDoItems = this.getToDoItems.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {
        axios.get("https://localhost:44329/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    }


    getToDoItems() {
        axios.get("https://localhost:44329/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    };

    handleDelete = itemId => {
        const ToDoListData = this.state.ToDoListData.filter(item => item.id !== itemId);
        this.setState({ ToDoListData: ToDoListData });
    };

    handleEdit = item => {
        const elementsIndex = this.state.ToDoListData.findIndex(element => element.id == item.id)

        var newItem = item;
        newItem.isDone = !newItem.isDone;

        var toDoListData = this.state.ToDoListData;

        toDoListData[elementsIndex] = newItem;

        this.setState({ ToDoListData: toDoListData, });
    };

    render() {
        return (
            <div className = "table">
                <HeadRow rerenderParentCallback={this.getToDoItems} />
                <div className="tbody">
                    <div></div>
                    <TableItems ToDoListData={this.state.ToDoListData} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                </div>
            </div>
        )
    }
}
export default ToDoTable;