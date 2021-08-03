
//Html Objects

const list = document.querySelector(".lista")

const listElement = document.querySelector(".elementContainer")

const deleteTsk = document.querySelectorAll(".deleteTsk")

const submit = document.querySelector(".submit")

//deleteTsk.addEventListener("click", deleteTask)
submit.addEventListener("click",addTask)
deleteTsk.forEach(function(task){

    task.addEventListener("click",function(task){
      console.log(task.target.parentElement)
      task.target.parentElement.remove()
    })
})

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

 function deleteTask(task){
  console.log(task)
    
    
   
}
