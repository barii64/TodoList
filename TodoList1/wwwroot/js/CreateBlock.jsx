import AddButton from './AddButton.jsx';

class CreateBlock extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            hidden: false
        };

        this.id = React.createRef();
        this.title = React.createRef();
        this.isDone = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.create = this.create.bind(this);

    }

    toggle = () => {
        this.setState({
            hidden: !this.hidden
        });
    }

    create = (e) => {
        fetch("/TodoItems/CreateJson", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                Title: this.title.current.value,
                IsDone: this.isDone.current.checked
            })
        });
        e.preventDefault();
        this.props.rerenderParentCallback();
    };

    render() {
        if (!this.state.hidden) {
            return (
                <>
                    <form className="tr" id="CreateBlock">
                        <div className="td">
                            <textarea id="createInput" name="Title" ref={this.title} />
                        </div>
                        <div className="td" ><input id="IsDone" type="checkbox" name="IsDone" ref={this.isDone} /></div>
                        <div className="td">
                            <input type="submit" value="Create" className="btn btn-success" onClick={(e) => { this.toggle(); this.create(e);  }} />
                            <input id="cancelButton" type="button" value="Сancel" className="btn btn-danger" onClick={() => { this.toggle(); }} />
                        </div>
                    </form >
                </>);
        }
        return ReactDOM.createPortal(<AddButton rerenderParentCallback={this.props.rerenderParentCallback}/>,
            document.querySelector(".thead .tr .td:nth-of-type(3) div"));
    }
}

export default CreateBlock;