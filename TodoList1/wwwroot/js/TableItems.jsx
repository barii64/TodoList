class TableItems extends React.Component {
    constructor() {
        super();
        this.state = {
            ToDoListData: []
        }
    }

    componentDidMount() {
        axios.get("https://localhost:44329/TodoItems/Get").then(response => {
            //console.log(response.data);  
            this.setState({
                ToDoListData: response.data
            });
        });
    }
    render() {
        return (
                    this.state.ToDoListData.map((p, index) => {
                        return <tr key={index}><td>{p.title}</td><td>{p.isDone.toString()}</td></tr>; 
                    })
        )
    }
}

export default TableItems;

