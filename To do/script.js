let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");
addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div")
    card.className="card"
    card.innerText="Test Card"
    card.setAttribute("contenteditable",true) //pointer will be editable zone automatically.
    todoContainer.append()
}