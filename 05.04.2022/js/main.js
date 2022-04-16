let dragItem = document.querySelectorAll(".drag-item")

let dropArea = document.querySelector("#dropArea")

for (let i = 0; i < dragItem.length; i++) {
    dragItem[i].addEventListener("dragstart", function (e) {
        this.style.background = "red";
        e.dataTransfer.setData("dragId", this.id)
    })
}

dropArea.addEventListener("dragover", function (e) {
    this.style = "background:green";
    e.preventDefault()
})


dropArea.addEventListener("dragleave", function () {
    this.style = "background: transparent";
})

dropArea.addEventListener("drop", function (j) {
    var myId = j.dataTransfer.getData("dragId")
    console.log(myId);
    dragItem = document.getElementById(myId)
    dropArea.appendChild(dragItem)
})

// ----------------------------------------