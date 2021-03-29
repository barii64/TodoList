import CreateBlock from './CreateBlock.jsx';

const { connect } = ReactRedux;

function mapStateToProps(state) {
    return {
        hiddenAddButton: state.hiddenAddButton,
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
                    dispatch({ type: "GET", items: response });
                });
        },
        hideAddButton() {
            dispatch({ type: hideAddButtonAction.type })
        }
    }
}

var hideAddButtonAction = { type: "HIDEADDBUTTON" };

class AddButton extends React.Component {
    constructor() {
        super();

        this.showCreateBlock = this.showCreateBlock.bind(this);
        this.createBlockElement = React.createRef();
    };
    showCreateBlock() {

        

        this.forceUpdate();
        //document.getElementById("AddItemButton").style.display = "none";
    };
    render() {
        if (!this.props.hiddenAddButton) {
            return (
                <form>
                    <input id="AddItemButton" type="input" value="Add"
                        className="btn btn-primary" onClick={() => {
                            this.props.hideAddButton(); 
                        }} />
                </form>
            )
        }
        else {
            return ReactDOM.createPortal(
                <CreateBlock ref={this.createBlockElement}/>,
                document.querySelector(".tbody > div"));
        }
    }
}


var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);

export default connectedComponent;