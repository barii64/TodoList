//import DeleteButton from './DeleteButton.jsx';
//import CheckBoxItem from './CheckBoxItem.jsx';
//import TitleInput from './TitleInput.jsx';
//import EditButton from './EditButton.jsx';
import LineElement from './LineElement.jsx';

class TableItems extends React.Component {
    constructor() {
        super();

        this.createTasks = this.createTasks.bind(this);
    };

    createTasks(item, index) {
        return (
            <LineElement rerenderParentCallback={this.props.rerenderParentCallback} item={item} index={index} />
        )
    }
    //refUpdate(item, index) {
    //    return (<>
    //                <TitleInput todoItem={item} ref={(title) => this.TitleItemsRefs[index] = title}/>
    //                <EditButton todoItem={item} ref={(editButton) => this.EditItemsRefs[index] = editButton}/>
    //            </>)
    //}


    render() {
        if (this.props.ToDoListData.length == 0) {
            this.props.rerenderParentCallback();
        }
        else {
            // var todoEntries = this.props.ToDoListData;
            var listItems = this.props.ToDoListData.map(this.createTasks);
            //console.log(asd);
            // console.log(asd);
        }

        return (<>{listItems}</>)
    }
}

export default TableItems;

