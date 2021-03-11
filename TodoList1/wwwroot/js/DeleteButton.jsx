class DeleteButton extends React.Component {

    deleteJson(id) {
        fetch("/TodoItems/Delete/" + id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        });
    }
    render() {
        return (
            <button type="button" onClick={() =>
            {
                this.props.onDelete(this.props.id);
                this.deleteJson(this.props.id);
            }}> delete</button >
        )
    }
}

export default DeleteButton;