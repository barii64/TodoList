class CreateBlock extends React.Component {
    constructor() {
        super();
        this.state = { hidden: true };
    }

    toggle() {
        document.getElementById("CreateBlock").style.display = "none";
        document.getElementById("AddItemButton").style.display = "block";
    }
    componentDidMount(){
            document.getElementById("CreateBlock").style.display = "none";
        }
    render() {
        return (<form className="tr" id="CreateBlock"  action="/ToDoItems/Create" method="post">
           <div className="td">
            <textarea id="createInput" name="Title" />
                </div>
            <div className="td" ><input id="IsDone" value="true" type="checkbox" name="IsDone" /></div>
            <div className = "td">
                <input type="submit" value="Create" className="btn btn-success" />
                <input id="cancelButton" type="button" value="Сancel" className="btn btn-danger" onClick={() => {this.toggle();}} />
            </div>
        </form >
                    )
}
}

export default CreateBlock;