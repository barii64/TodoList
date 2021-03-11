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

    render() {        
        return (
            this.state.ToDoListData.map((todoItem, index) => {
                
                return (<form className="tr" key={index}>
                            <label className='labelId' >{todoItem.id}</label>

                            <TitleInput todoItem={todoItem} />

                            <div className="td">
                                <CheckBoxItem todoItem={todoItem}/>
                            </div>

                            <div className="td action">
                                <EditButton todoItem={todoItem}/>
                                <DeleteButton id={todoItem.id}/>
                            </div>
                        </form>)
            })
        )
    }
}

export default TableItems;

