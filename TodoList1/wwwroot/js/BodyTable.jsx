import CreateBlock from './CreateBlock.jsx';
import TableItems from './TableItems.jsx';

class BodyTable extends React.Component {
    render() {
        return (
            <tbody>
                 <CreateBlock />
                <TableItems />
            </tbody>
        )
    }
} 

export default BodyTable;