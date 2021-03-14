import CreateBlock from './CreateBlock.jsx';
import TableItems from './TableItems.jsx';
import AddButton from './AddButton.jsx';

class BodyTable extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    render() {
        var todoEntries = this.props.ToDoListData;
        var listItems = todoEntries.map(this.createTasks);

            return (
                <div className="tbody">
                    <div></div>
                    <TableItems ToDoListData={this.props.ToDoListData}/>
                </div>
            )
    }
   
 }


export default BodyTable;