class EditButton extends React.Component {
    render() {
        function edit(todoItem) {
            var tr = jQuery(editButton).parent().parent();
            if (!tr.hasClass("editing")) {
                tr.addClass("editing");
                tr.find("DIV.td:nth-child(even)").each(function () {
                    var $this = jQuery(this);
                    if (!$this.hasClass("action")) {
                        var value = jQuery(this).text();
                        $this.text("");
                        $this.append('<input type="text" value="' + value + '" />');
                    } else {
                        editButton.innerText = "save";
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
                        /*location.reload();*/
                    }
                });
            }
        }
        var editButton;
        return (
            <button type="button" onClick=
                {e => edit(this.props.todoItem)}

                ref={
                    function (el) {
                        editButton= el;
                    }
                }

            >edit</button>
        )
    }
}

export default EditButton;