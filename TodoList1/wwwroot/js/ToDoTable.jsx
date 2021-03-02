import HeadRow from './HeadRow.jsx';
import BodyTable from './BodyTable.jsx';

class ToDoTable extends React.Component {
    render() {
        return (
            <table className="table">
                <HeadRow />
                <BodyTable/>
            </table>
        )
    }
}
export default ToDoTable;