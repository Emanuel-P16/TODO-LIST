
//Html Objects

const list = document.querySelector(".lista")
const submit = document.querySelector(".submit")

//EventsListeners

list.addEventListener("click", deleteTask)
submit.addEventListener("click",addTask)

//Functions

function addTask(e){
   // e.preventDefault()
    const input = document.querySelector(".input")
    const inputValue = input.value
    if (inputValue === "") {
      alert ("ingrese un valor")
    } else {
      const newElement = document.createElement("li");
      newElement.innerText = inputValue
      newElement.className = "element"
      list.appendChild(newElement)
      input.value = ""
    }
    
    
}
 function deleteTask(e){
    const elementRemoved = e.target
     list.removeChild(e.target)
    
}
