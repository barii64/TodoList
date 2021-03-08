import AddButton from './AddButton.jsx';

class CreateBlock extends React.Component {
    constructor() {
        super();
        this.state = { hidden: false };
    }
    toggle = () => {
        //console.log(this.state.hidden);

        this.setState({
            hidden: !this.hidden
        });
        //document.getElementById("CreateBlock").style.display = "none";
        //document.getElementById("AddItemButton").style.display = "block";
        //  this.forceUpdate();
    }
    //componentDidMount(){
    //        document.getElementById("CreateBlock").style.display = "none";
    //    }

    //document.getElementById("CreateBlock").style.display = "table-row";
    render() {
        if (!this.state.hidden) {
            return (
                <>
                <form className="tr" id="CreateBlock" action="/ToDoItems/Create" method="post">
                    <div className="td">
                        <textarea id="createInput" name="Title" />
                    </div>
                    <div className="td" ><input id="IsDone" value="true" type="checkbox" name="IsDone" /></div>
                    <div className="td">
                        <input type="submit" value="Create" className="btn btn-success" />
                        <input id="cancelButton" type="button" value="Сancel" className="btn btn-danger" onClick={() => { this.toggle(); }} />
                        </div>
                </form >
                </>);
        }
        return ReactDOM.createPortal(<AddButton />,
            document.querySelector(".thead .tr .td:nth-of-type(3) div"));
}
}

export default CreateBlock;