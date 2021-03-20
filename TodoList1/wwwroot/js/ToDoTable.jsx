import HeadRow from './HeadRow.jsx';
import BodyTable from './BodyTable.jsx';

class ToDoTable extends React.Component {
    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);

        this.child = React.createRef();
    }
    rerenderParentCallback() {
        this.child.current.child.current.refresh();
    }

    render() {
        console.log(`Parent rendered.`);
        return (
            <div className = "table">
                <HeadRow rerenderParentCallback={this.rerenderParentCallback}/>
                <BodyTable ref={this.child}/>
            </div>
        )
    }
}
export default ToDoTable;