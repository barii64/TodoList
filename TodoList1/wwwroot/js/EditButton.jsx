class EditButton extends React.Component {
    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
    }

    edit(todoItem) {
        var input = this.props.titleField._input.current;
        var label = this.props.titleField._label.current;

        if (!input.classList.contains("editing")) {
            input.classList.add("editing");
            var labelContent = label.innerText;
            input.value = labelContent;
                    //$this.text("");
                    //input._input.current.value = value
            label.hidden = true;
            input.hidden = false;
            input.style.display = "block";
            this.editButton.innerText = "save";
        } else {
            input.classList.remove("editing");
            label.hidden = "";
            this.editButton.innerText = "edit";
            label.innerText = input.value;
            input.style.display = "none"
            fetch("/TodoItems/EditJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Id: this.props.todoItem.id,
                    Title: label.innerText,
                    IsDone: this.props.todoItem.isDone
                })
            });
                    /*location.reload();*/
           
        }
    }
    render() {
        return (
            <button type="button" onClick=
                {e => this.edit(this.props.todoItem)}

                ref={(el) => this.editButton = el}

            >edit</button>
        )
    }
}

export default EditButton;