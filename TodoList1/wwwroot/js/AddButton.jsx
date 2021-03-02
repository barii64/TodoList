class AddButton extends React.Component {
    constructor() {
        super();
        this.state = { hidden: false };
    }
    showCreateBlock() {
        document.getElementById("CreateBlock").style.display = "table-row";
        document.getElementById("AddItemButton").style.display = "none";
    }
    render() {
        return (
            <form onSubmit="stopLoad(event)">
                <input id="AddItemButton" type="button" value="Add" className="btn btn-primary" onClick={() => { this.showCreateBlock(); }}  />
            </form>
        )
    }
}
export default AddButton;