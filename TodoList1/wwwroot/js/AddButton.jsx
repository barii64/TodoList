import CreateBlock from './CreateBlock.jsx';

class AddButton extends React.Component {
    constructor() {
        super();
        this.state = { hiddenButton: false };
        this.showCreateBlock = this.showCreateBlock.bind(this);
        this.createBlockElement = React.createRef();
    };
    showCreateBlock() {
        this.state.hiddenButton = !this.state.hiddenButton;
        this.forceUpdate();
        //document.getElementById("AddItemButton").style.display = "none";
    };
    render() {
        if (!this.state.hiddenButton) {
            return (
                <form>
                    <input id="AddItemButton" type="input" value="Add"
                        className="btn btn-primary" onClick={() => {
                            this.showCreateBlock();
                        }} />
                </form>
            )
        }
        else {
            return ReactDOM.createPortal(
                <CreateBlock ref={this.createBlockElement} rerenderParentCallback={this.props.rerenderParentCallback} addTodoItem={this.props.addTodoItem}  />,
                document.querySelector(".tbody > div"));
        }
    }
}
function mapStateToProps(hiddenButton) {
    return {
        hiddenButton: state.hiddenButton,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoItem: function (title, checkbox) {
            fetch("/TodoItems/CreateJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Title: title,
                    IsDone: checkbox
                })
            });
            return fetch("/TodoItems/Get", {
                method: "GET"
            }).then(res => res.json())
                .then(response => {
                    dispatch({ type: actionTypes.GET_TODOITEMS, items: response });
                });
        }
    }
}
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);

export default connectedComponent;