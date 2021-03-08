
class TableItems extends React.Component {
    constructor() {
        super();
        this.state = {
            ToDoListData: []
        }
        axios.get("https://localhost:44329/TodoItems/Get").then(response => {
            //console.log(response.data);  
            this.setState({
                ToDoListData: response.data
            });
        });
    };

    render() {
        function deleteJson(element) {
            fetch("/TodoItems/Delete/" + element.parentElement.parentElement.firstChild.firstChild.data, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    Id: element.parentElement.parentElement.firstChild.firstChild.data
                })
            });
            location.reload();
        }
        function edit(element) {
            var tr = jQuery(element).parent().parent();
            if (!tr.hasClass("editing")) {
                tr.addClass("editing");
                tr.find("DIV.td:nth-child(even)").each(function () {
                    if (!jQuery(this).hasClass("action")) {
                        var value = jQuery(this).text();
                        jQuery(this).text("");
                        jQuery(this).append('<input type="text" value="' + value + '" />');
                    } else {
                        jQuery(this).find("BUTTON:nth-child(1)").text("save");
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
                                IsDone: this.parentElement.children[2].firstChild.checked
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
            this.state.ToDoListData.map((p, index) => {
                return (<form className="tr" key={index}>
                    <label className='labelId' >{p.id}</label>
                    {p.isDone ?
                        (<div className="td title green" onClick={onClick}>
                            <label>{p.title}</label>
                            <input type="text" className="edit-input" />
                        </div>) :
                        (<div className="td title" onClick={onClick}>
                            <label>{p.title}</label>
                            <input type="text" className="edit-input" />
                        </div>)}

                    <div className="td">
                        <input type="checkbox" checked={p.isDone} onClick={editCheckbox} /></div>
                    <div className="td action">
                        <button type="button" onClick=
                            {e => edit(e.target)}
                        >edit</button>
                        <button type="button" onClick={e => deleteJson(e.target)}>delete</button>
                    </div>
                </form>)
            })
        )
        var CheckBoxs = document.querySelectorAll('input[type="checkbox"]');

        for (let val of CheckBoxs) {
            if (val.checked == true)
                val.parentElement.parentElement.bgColor = "green"
        }
    }
}
export default TableItems;

