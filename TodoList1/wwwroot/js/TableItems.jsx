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
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    };
    componentDidMount() {
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    }

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
         this.forceUpdate();
    };

    render() {      
        function deleteJson(id) {
            
        }
        return (
            this.state.ToDoListData.map((todoItem, index) => {
                
                return (<form className="tr" key={index}>
                            <label className='labelId' >{todoItem.id}</label>

                            <TitleInput todoItem={todoItem} />

                            <div className="td">
                                <CheckBoxItem todoItem={todoItem} onChangeCheckBox={this.handleEdit}/>
                            </div>

                            <div className="td action">
                                <EditButton todoItem={todoItem}/>
                                <DeleteButton id={todoItem.id} onDelete={this.handleDelete} />
                            </div>
                        </form>)
            })
        )
    }
}

export default TableItems;

