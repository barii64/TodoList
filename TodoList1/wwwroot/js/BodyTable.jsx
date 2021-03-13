import CreateBlock from './CreateBlock.jsx';
import TableItems from './TableItems.jsx';
import AddButton from './AddButton.jsx';

class BodyTable extends React.Component {
    constructor(){
        super();
        this.child = React.createRef();
    }

    render() {
        console.log(`BodyTable rendered.`);
            return (
                <div className="tbody">
                    <div></div>
                    <TableItems ref={this.child}/>
                </div>
            )
    }
   
 }


export default BodyTable;