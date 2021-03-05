import AddButton from './AddButton.jsx';
import ToDoTable from './ToDoTable.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <ToDoTable/>
            </div>
        )

    }
    }
ReactDOM.render(<App />, document.getElementById('root'));
