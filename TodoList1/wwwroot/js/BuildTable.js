document.getElementById("CreateBlock").classList.add("hidden")


AddItemButton.onclick = function () {
    document.getElementById("CreateBlock").classList.toggle("visible")
    document.getElementById("AddItemButton").classList.add("hidden")
}
cancelButton.onclick = function () {
    document.getElementById("CreateBlock").classList.toggle("visible")
    document.getElementById("AddItemButton").classList.toggle("hidden")
}
function stopLoad(event) {
    event.preventDefault();
}

var CheckBoxs = document.getElementsByTagName("input");

for (let val of CheckBoxs) {
    if (val.checked == true)
        val.parentElement.parentElement.bgColor = "green"
}