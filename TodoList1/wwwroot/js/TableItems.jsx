import DeleteButton from './DeleteButton.jsx';
import CheckBoxItem from './CheckBoxItem.jsx';
import TitleInput from './TitleInput.jsx';
import EditButton from './EditButton.jsx';

class TableItems extends React.Component {
    constructor() {
        super();
        this.state = {
            ToDoListData: []
        }
        this.TitleItemsRefs = [];
        this.EditItemsRefs = [];

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.refresh.bind(this);

        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
        console.log(`Table rendered.`);
    };

    componentDidMount() {
        axios.get("/TodoItems/Get").then(response => {
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


    refresh() {
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    };

    render() {
        return (
            this.state.ToDoListData.map((todoItem, index) => {
                return (<form className="tr" key={index}>
                            <TitleInput todoItem={todoItem} ref={
                                (title) => this.TitleItemsRefs[index] = title
                            } EditButton={this.EditItemsRefs[index]}/>

                            <div className="td">
                                <CheckBoxItem todoItem={todoItem} onChangeCheckBox={this.handleEdit}/>
                            </div>

                            <div className="td action">
                            <EditButton todoItem={todoItem} titleField={this.TitleItemsRefs[index]} ref={
                                (editButton) => this.EditItemsRefs[index] = EditButton
                            }/>
                                <DeleteButton id={todoItem.id} onDelete={this.handleDelete} />
                            </div>
                        </form>)
            })
        )
    }
}

export default TableItems;

