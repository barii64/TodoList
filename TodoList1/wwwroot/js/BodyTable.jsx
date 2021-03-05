import CreateBlock from './CreateBlock.jsx';
import TableItems from './TableItems.jsx';

class BodyTable extends React.Component {
        render() {
            return (
                <div className="tbody">
                    <CreateBlock />
                    <TableItems />
                </div>
            )
    }
   
 }


export default BodyTable;