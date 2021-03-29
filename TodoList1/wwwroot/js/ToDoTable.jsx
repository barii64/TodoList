import HeadRow from './HeadRow.jsx';
import TableItems from './TableItems.jsx';

const { connect } = ReactRedux;




class ToDoTable extends React.Component {

    render() {
        return (
            <div className="table">
                <HeadRow/>
                <div className="tbody">
                    <div></div>
                    <TableItems/>
                </div>
            </div>
        )
    }
}



export default ToDoTable;