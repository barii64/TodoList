import AddButton from './AddButton.jsx';
class HeadRow extends React.Component {
    render() {
        return (
            <div className = "thead">
                <div className="tr">
                        <div className="td">
                            Title
                        </div>
                        <div className="td">
                        Done
                        </div>
                        <div className="td">
                            <div></div>
                            <AddButton />
                        </div>
                </div>
            </div>
        );
    }
}

export default HeadRow;