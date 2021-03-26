const { connect } = ReactRedux;


var deleteAction = { type: "DELETE" };

function mapDispatchToProps(dispatch) {
    return {
        deleteTodoItem: function (id) {
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

class DeleteButton extends React.Component {
    render() {
        return (
            <button type="button" onClick={() =>
            {
                this.props.deleteTodoItem(this.props.id);
            }}> delete</button >
        )
    }
}

export default connect(mapDispatchToProps)(DeleteButton);