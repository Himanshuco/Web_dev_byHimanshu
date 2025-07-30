let inputval = document.querySelector("input");
let i = 0;
function addTodo() {
    if(inputval.value=="" ){
        alert("Please enter something!");
        return;
    }
    let val = inputval.value;
    let divel = document.createElement("div");
    divel.classList.add("todo-del");
    divel.innerHTML = `<h3>${val}</h3> <button onClick = "deletet(${i})" class="todo-${i}"> Delete</button>
    <button onclick="editodo(${i})" class=todo-${i}>Edit</button>`
    document.querySelector(".todoadd").appendChild(divel);
    inputval.value = "";
    i++;
}
function deletet(i) {
    let todo = document.querySelector(`.todo-${i}`);
    if (todo) {
        todo.parentElement.remove();
    }
}

function editodo(i) {
    let todo = document.querySelector(`.todo-${i}`);
    let h3 = todo.parentElement.querySelector("h3");
    if (h3) {
        inputval.value = h3.textContent;
    }
    currentlyEditingH3.textContent = inputval.value;
    currentlyEditingH3 = null;

}