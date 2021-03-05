import HeadRow from './HeadRow.jsx';
import BodyTable from './BodyTable.jsx';

class ToDoTable extends React.Component {
    render() {
        return (
            <div className = "table">
                <HeadRow />
                <BodyTable/>
            </div>
        )
    }
}
export default ToDoTable;