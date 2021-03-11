class TitleInput extends React.Component {
    constructor(props) {
        super(props);
        var str = this.props.todoItem.isDone ? " green" : "";

        this.state = {
            className: "td title" + str
        };
    } 
    onClick(element) {
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
    render() {
        return (
            <div className={this.state.className} onClick={this.onClick}>
                <label>{this.props.todoItem.title}</label>
                <input type="text" className="edit-input" />
            </div>

        )
    }
}

export default TitleInput;