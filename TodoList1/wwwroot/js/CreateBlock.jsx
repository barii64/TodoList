import AddButton from './AddButton.jsx';
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
        },
        hideAddButton() {
            dispatch({ type: hideAddButtonAction.type })
        }
    };
}
var hideAddButtonAction = { type: "HIDEADDBUTTON" };

class CreateBlock extends React.Component {
    constructor(props) {
        super(props);
  
        this.id = React.createRef();
        this.title = React.createRef();
        this.isDone = React.createRef();

    }

    render() {
        if (this.props.hiddenAddButton) {
            return (
                <>
                    <form className="tr" id="CreateBlock">
                        <div className="td">
                            <textarea id="createInput" name="Title" ref={this.title} />
                        </div>
                        <div className="td" ><input id="IsDone" type="checkbox" name="IsDone" ref={this.isDone} /></div>
                        <div className="td">
                            <input type="button" value="Create" className="btn btn-success" onClick={
                                (e) => {
                                    this.props.hideAddButton();
                                    this.props.addTodoItem(this.title.current.value, this.isDone.current.checked);
                                }} />
                            <input id="cancelButton" type="button" value="Сancel" className="btn btn-danger" onClick={() => { this.props.hideAddButton(); }} />
                        </div>
                    </form >
                </>);
        }
        return ReactDOM.createPortal(<AddButton/>,
            document.querySelector(".thead .tr .td:nth-of-type(3) div"));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlock);