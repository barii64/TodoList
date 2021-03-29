//import DeleteButton from './DeleteButton.jsx';
//import CheckBoxItem from './CheckBoxItem.jsx';
//import TitleInput from './TitleInput.jsx';
//import EditButton from './EditButton.jsx';
import LineElement from './LineElement.jsx';
const { connect } = ReactRedux;


function mapStateToProps(state) {
    return {
        TodoItemsValue: state.TodoListElems,
    };
}


var getAction = { type: "GET" };


function mapDispatchToProps(dispatch) {
    return {
        getTodoItems: function () {
            return fetch("/TodoItems/Get", {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: getAction.type, items: response });
                });
        },

    };
}

class TableItems extends React.Component {
    constructor() {
        super();

        this.createTasks = this.createTasks.bind(this);
    };
    componentDidMount() {
        this.props.getTodoItems();
    }
    createTasks(item, index) {
        return (
            <LineElement item={item} index={index} />
        )
    }


    render() {
        var listItems = this.props.TodoItemsValue.map(this.createTasks);

        return (<>{listItems}</>)
    }
}
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(TableItems);


export default connectedComponent;

