import AddButton from './AddButton.jsx';
class HeadRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "thead">
                <div className="tr">
                        <div className="td">
                            Title
                        </div>
                    <div className="td" onClick={this.props.rerenderParentCallback}>
                        Done
                        </div>
                        <div className="td">
                            <div></div>
                        <AddButton rerenderParentCallback={this.props.rerenderParentCallback} addTodoItem={this.props.addTodoItem}  />
                        </div>
                </div>
            </div>
        );
    }
}

export default HeadRow;