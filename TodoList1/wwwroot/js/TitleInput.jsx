﻿class TitleInput extends React.Component {
    constructor(props) {
        super(props);
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
        var str = this.props.todoItem.isDone ? "td title green" : "td title";
        return (
            <div className={str} onClick={this.onClick}>
                <label ref={this._label}>{this.props.todoItem.title}</label>
                <input type="text" className="edit-input" ref={this._input}/>
            </div>

        )
    }
}

export default TitleInput;