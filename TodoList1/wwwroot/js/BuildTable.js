document.getElementById("CreateBlock").classList.add("hidden")


AddItemButton.onclick = function () {
    document.getElementById("CreateBlock").classList.add("visible")
    document.getElementById("AddItemButton").classList.add("hidden")
}
function stopLoad(event) {
    event.preventDefault();
    console.log("stopped form submit");
}

$('table.colorchange input[type=checkbox]').click(function () {
    $(this).closest('tr').toggleClass("highlight", this.checked);
});

var CheckBoxs = document.getElementsByTagName("input");

for (let val of CheckBoxs) {
    if (val.checked == true)
        val.parentElement.parentElement.bgColor = "green"
}