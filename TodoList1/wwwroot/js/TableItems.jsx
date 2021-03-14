import DeleteButton from './DeleteButton.jsx';
import CheckBoxItem from './CheckBoxItem.jsx';
import TitleInput from './TitleInput.jsx';
import EditButton from './EditButton.jsx';

class TableItems extends React.Component {
    constructor() {
        super();

        this.TitleItemsRefs = [];
        this.EditItemsRefs = [];


        this.createTasks = this.createTasks.bind(this);
    };

    createTasks(item, index) {
        return (
            <>
                <TitleInput todoItem={item} ref={
                    (title) => this.TitleItemsRefs[index] = title}
                    EditButton={this.EditItemsRefs[index]} />,

                <div className="td">
                    <CheckBoxItem todoItem={item} onChangeCheckBox={this.props.handleEdit} />
                </div>,

                <div className="td action">
                    <EditButton todoItem={item} titleField={this.TitleItemsRefs[index]} ref={
                        (editButton) => this.EditItemsRefs[index] = EditButton
                    } />
                    <DeleteButton id={item.id} onDelete={this.props.handleDelete} />
                </div>,
            </>
        )
    }

    render() {
        var todoEntries = this.props.ToDoListData;

        toDoListData.map((todoItem, index) => {
            return (<form className="tr" key={index}>
                <TitleInput todoItem={todoItem} ref={
                    (title) => this.TitleItemsRefs[index] = title
                } EditButton={this.EditItemsRefs[index]} />

                <div className="td">
                    <CheckBoxItem todoItem={todoItem} onChangeCheckBox={this.handleEdit} />
                </div>

                <div className="td action">
                    <EditButton todoItem={todoItem} titleField={this.TitleItemsRefs[index]} ref={
                        (editButton) => this.EditItemsRefs[index] = EditButton
                    } />
                    <DeleteButton id={todoItem.id} onDelete={this.handleDelete} />
                </div>
            </form>)
        })
    }
}

export default TableItems;

