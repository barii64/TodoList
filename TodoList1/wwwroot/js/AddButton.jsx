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
    handleClick = () => {
        this.createBlockElement.current.toggle();
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
                <CreateBlock ref={this.createBlockElement} />,
                document.querySelector(".tbody > div"));
        }
    }
}



export default AddButton;