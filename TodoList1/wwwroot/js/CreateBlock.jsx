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
        return (
            <tr id="CreateBlock">
                <form action="/ToDoItems/Create" method="post"/>
                    <td><textarea id="createInput" value="Title" name="Title"></textarea></td>
                    <td><input id="IsDone" value="true" type="checkbox" name="IsDone"/></td>
                        <td>
                    <input type="submit" value="Create" className="btn btn-success" />
                    <input id="cancelButton" type="submit" value="Сancel" className="btn btn-danger" onClick={() => {this.toggle();}} />
                    </td>
            </tr>
  )
}
}

export default CreateBlock;