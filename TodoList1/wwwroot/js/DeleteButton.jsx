class DeleteButton extends React.Component {
    render() {
        function deleteJson(id) {
            fetch("/TodoItems/Delete/" + id, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                }
            });
            location.reload();
        }
        return (
            <button type="button" onClick={e => deleteJson(this.props.id)}>delete</button>
        )
    }
}

export default DeleteButton;