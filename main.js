
//Html Objects

const list = document.querySelector(".lista")

const listElement = document.querySelector(".elementContainer")

//const deleteTaskButton = document.querySelectorAll(".deleteTaskButton")

const submit = document.querySelector(".submit")

document.body.addEventListener("click",function(event){
  if (event.target.className == "deleteTaskButton"){
    console.log("asd")
    event.target.parentElement.remove()
  }
})
document.body.addEventListener("click",function(event){
  if (event.target.className == "editTsk"){
    console.log("soy edit")
    
  }
})
//deleteTaskButton.addEventListener("click", deleteTask)
submit.addEventListener("click",addTask)
/*deleteTaskButton.forEach(function(task){

    task.addEventListener("click",function(task){
      
      task.target.parentElement.remove()
    })
})*/

//Functions

function addTask(e){
   // e.preventDefault()
    const input = document.querySelector(".input")
    const inputValue = input.value
    if (inputValue === "") {
      alert ("ingrese un valor")
    } else {

      const newLi = document.createElement("li");
      //newLi.innerText = inputValue
      newLi.className = "element"
      
      const newDiv = document.createElement("div");
      
      newDiv.className="elementContainer"
      
      const newDelBtn = document.createElement("button");
      newDelBtn.className = "deleteTaskButton"
      newDelBtn.innerText = "X"

      const newEditBtn = document.createElement("button");
      newEditBtn.className = "editTsk"
      newEditBtn.innerText = "E"

      const newInput = document.createElement("input");
      newInput.disabled = true
      newInput.value = inputValue
      newInput.style = "color: black"
      newInput.type = "text"
      newLi.appendChild(newInput)
      newDiv.appendChild(newLi)
      
      newDiv.appendChild(newEditBtn)
      newDiv.appendChild(newDelBtn)
      
      list.appendChild(newDiv)
      
      
      input.value = ""
      /*const deleteTaskButton = document.querySelectorAll(".deleteTaskButton")
      deleteTaskButton.forEach(function(task){

        task.addEventListener("click",function(task){
          
          task.target.parentElement.remove()
        })
    })*/
    }
    
    
}

 function deleteTask(task){
  console.log(task)
    
    
   
}
