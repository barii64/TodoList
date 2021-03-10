import DeleteButton from './DeleteButton.jsx';
import CheckBoxItem from './CheckBoxItem.jsx';
import TitleInput from './TitleInput.jsx';

class TableItems extends React.Component {
    constructor() {
        super();
        this.state = {
            ToDoListData: []
        }
        axios.get("/TodoItems/Get").then(response => {
            this.setState({
                ToDoListData: response.data
            });
        });
    };

    render() {
        function edit(todoItem) {
            var tr = jQuery(todoItem._EditButton).parent().parent();
            if (!tr.hasClass("editing")) {
                tr.addClass("editing");
                tr.find("DIV.td:nth-child(even)").each(function () {
                    var $this = jQuery(this);
                    if (!$this.hasClass("action")) {
                        var value = jQuery(this).text();
                        $this.text("");
                        $this.append('<input type="text" value="' + value + '" />');
                    } else {
                        todoItem._EditButton.innerText = "save";
                    }
                });
            } else {
                tr.removeClass("editing");
                tr.find("DIV.td:nth-child(even)").each(function () {
                    if (!jQuery(this).hasClass("action")) {
                        var value = jQuery(this).find("INPUT").val();
                        jQuery(this).find("INPUT").remove();
                        jQuery(this).append('<label>' + value + '</label>' +
                            '<input type="text" style="display:none;"/>');
                    } else {
                        jQuery(this).find("BUTTON:nth-child(1)").text("edit");
                        console.log(
                            this.parentElement.firstChild.firstChild.data,
                            this.parentElement.children[1].innerText,
                            this.parentElement.children[2].firstChild.checked
                        );

                        fetch("/TodoItems/EditJson", {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                Id: this.parentElement.firstChild.firstChild.data,
                                Title: this.parentElement.children[1].innerText,
                                IsDone: todoItem.isDone
                            })
                        });
                        location.reload();
                    }
                });
            }
        }
        
        return (
            this.state.ToDoListData.map((todoItem, index) => {
                
                return (<form className="tr" key={index}>
                            <label className='labelId' >{todoItem.id}</label>

                            <TitleInput todoItem={todoItem} />

                            
                            <div className="td">
                                <CheckBoxItem todoItem={todoItem}/>
                            </div>

                            <div className="td action">
                                <button type="button" onClick=
                                    {e => edit(todoItem)}
                                    ref={
                                    function (el) {
                                        todoItem._EditButton = el;
                                    }}>edit</button>
                                <DeleteButton id={todoItem.id}/>
                            </div>
                        </form>)
            })
        )
    }
}

export default TableItems;

