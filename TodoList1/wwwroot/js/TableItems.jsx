import DeleteButton from './DeleteButton.jsx';

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
                                Id: todoItem.id,
                                Title: this.parentElement.children[1].innerText,
                                IsDone: todoItem.isDone
                            })
                        });
                    }
                });

            }
        }
        function editCheckbox(element) {
            if (element.target.parentElement.parentElement.children[1].firstChild.type == "text")
                element.target.parentElement.parentElement.children[3].firstChild.click();

            fetch("/TodoItems/EditJson", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Id: element.target.parentElement.parentElement.firstChild.firstChild.data,
                    Title: element.target.parentElement.parentElement.children[1].innerText,
                    IsDone: element.target.parentElement.parentElement.children[2].firstChild.checked
                })
            });
            location.reload();
        }
        function onClick(element) {
            if (element.target.firstChild != null) {
                var str = element.currentTarget.innerText.trim();
                element.currentTarget.firstChild.remove();

                element.currentTarget.lastChild.style.display = "inline-block";

                element.currentTarget.lastChild.value = str;


                var tr = element.currentTarget.parentElement;
                tr.classList += (" editing");
                jQuery(tr).find("BUTTON:nth-child(1)").text("save");

                console.log(element.currentTarget.previousSibling.innerText);
            }

        }
        return (
            this.state.ToDoListData.map((todoItem, index) => {
                var className = "td title" + (todoItem.isDone ? " green" : "");
                return (<form className="tr" key={index}>
                            <label className='labelId' >{todoItem.id}</label>

                            <div className={className} onClick={onClick}>
                                <label ref={
                                    function (el) {
                                        todoItem._LabelTitle = el;
                                }}>{todoItem.title}</label>
                                <input type="text" className="edit-input" />
                            </div>
                            
                            <div className="td">
                                <input type="checkbox" checked={todoItem.isDone} onClick={editCheckbox} />
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

