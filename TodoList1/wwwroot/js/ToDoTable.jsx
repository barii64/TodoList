import HeadRow from './HeadRow.jsx';
import BodyTable from './BodyTable.jsx';

class ToDoTable extends React.Component {
    constructor() {
        super();

        this.state = {
            ToDoListData: []
        }
        this.getToDoItems = this.getToDoItems.bind(this);

    }

    componentDidMount() {
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
        console.log(this.state.ToDoListData)
    }


    getToDoItems() {
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    };



    render() {
        return (
            <div className = "table">
                <HeadRow rerenderParentCallback={this.getToDoItems} />
                <div className="tbody">
                    <div></div>
                    <TableItems rerenderParentCallback={this.getToDoItems} ToDoListData={this.state.ToDoListData} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                </div>
            </div>
        )

    }
}
export default ToDoTable;