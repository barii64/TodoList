import TitleInput from './TitleInput.jsx';
import EditButton from './EditButton.jsx';
import CheckBoxItem from './CheckBoxItem.jsx';
import DeleteButton from './DeleteButton.jsx';


class LineElement extends React.Component {
    constructor() {
        super();

        this.state = {
            hidden: false,
            isEditing: false
        }

        this._TitleInput = React.createRef();
        this._EditInput = React.createRef();

        this.handleEdit = this.handleEdit.bind(this);
        this.handleIsDone = this.handleIsDone.bind(this);
    }



    handleEdit = item => {
        this.setState({ isEditing: !this.state.isEditing });
    };

    handleIsDone = item => {
        this.props.rerenderParentCallback();
    };

    render() {
        if (!this.state.hidden) {
            return (
                <form className="tr" >
                    <TitleInput todoItem={this.props.item} ref={this._TitleInput} EditButton={this._EditInput} />

                    <div className="td">
                        <CheckBoxItem todoItem={this.props.item} onChangeIsDone={this.handleIsDone} />
                    </div>

                    <div className="td action">
                        <EditButton todoItem={this.props.item} ref={this._EditInput} titleField={this._TitleInput}/>
                        <DeleteButton id={this.props.item.id}/>
                    </div>
                </form>
                )
            }
        else {
            return null;
        }
    }
}

export default LineElement;
