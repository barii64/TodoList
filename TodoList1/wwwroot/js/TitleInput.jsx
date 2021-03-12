class TitleInput extends React.Component {
    constructor(props) {
        super(props);
        var str = this.props.todoItem.isDone ? " green" : "";

        this.state = {
            className: "td title" + str
        };
        this._input = React.createRef();
        this._label = React.createRef();

        this.onClick = this.onClick.bind(this);

    }
    onClick(TitleElement) {
        if (TitleElement.target.nodeName != "LABEL")
            return;

        this._input.current.value = this._label.current.innerText;

        this._label.current.hidden = "true";

        this._input.current.style.display = "inline-block";

        this._input.current.classList.add("editing")

        this.props.EditButton.editButton.innerText = "save";
    }

    render() {
        return (
            <div className={this.state.className} onClick={this.onClick}>
                <label ref={this._label}>{this.props.todoItem.title}</label>
                <input type="text" className="edit-input" ref={this._input}/>
            </div>

        )
    }
}

export default TitleInput;