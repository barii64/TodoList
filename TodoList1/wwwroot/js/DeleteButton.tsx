


//const { connect } = ReactRedux;

var deleteAction = { type: "DELETE" };



type MyComponentProps = {
    id: number;
};


class DeleteButton extends React.Component<MyComponentProps> {
    render() {
        return (
            <button type="button" onClick={() => {
                //this.props.deleteTodoItem(this.props.id);
            }}> delete</button >
        )
    }
}

function mapDispatchToProps(dispatch: { TodoListElems: Array<ITodoItem> }) {
    return {
        deleteTodoItem: function (id: number) {
            fetch("/TodoItems/Delete/" + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }
            });
            return this.dispatch({ type: deleteAction.type, items: id });
        }
    }
}

export default (DeleteButton);