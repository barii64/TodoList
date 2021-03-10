﻿class CheckBoxItem extends React.Component {
    render() {
        function editCheckbox(todoItem) {
            //if (todoItem.target.parentElement.parentElement.children[1].firstChild.type == "text")
            //    todoItem.target.parentElement.parentElement.children[3].firstChild.click();

            fetch("/TodoItems/EditJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Id: todoItem.id,
                    Title: todoItem.title,
                    IsDone: !todoItem.isDone
                })
            });
            location.reload();
        }
        return (
            <input type="checkbox" checked={this.props.todoItem.isDone} onClick={e => editCheckbox(this.props.todoItem)} />
        )
    }
}

export default CheckBoxItem;