import AddButton from './AddButton.tsx';
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
                    <div className="td">
                        Done
                        </div>
                        <div className="td">
                        <div></div>
                        <AddButton/>
                        </div>
                </div>
            </div>
        );
    }
}

export default HeadRow;