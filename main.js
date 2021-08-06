// RANDOM TASKS OBJECT
const randomTask = [{
  id: 1,
  task: "Learn Basic Programming and Objects",
},
{
  id : 2,
  task: "Make a witcher theme",

},
{
  id: 3,
  task: "Exercise 3 hours",
},
{
  id: 4,
  task: "Make dinner",
},
{
  id: 5,
  task: "Go to the movie",
},]
//Html Objects

const list = document.querySelector(".lista")
const listContainer = document.querySelector(".listContainer")
const listElement = document.querySelector(".elementContainer")

//const deleteTaskButton = document.querySelectorAll(".deleteTaskButton")

const submit = document.querySelector(".submit")
const times = 2;
defaultTodos(randomTask,times)

document.body.addEventListener("click",function(event){
  if (event.target.className == "deleteTaskButton"){
    deleteTask(event)
  }
})
document.body.addEventListener("click",function(event){
  if (event.target.className == "editTsk"){
  
      editTask(event);
    
  }
})
document.body.addEventListener("keyup",function(event){
  if (event.key === "Enter"){
    event.target.disabled = true;
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
      newInput.className = "inputLi"
      newLi.appendChild(newInput)
      newDiv.appendChild(newLi)
      
      newDiv.appendChild(newEditBtn)
      newDiv.appendChild(newDelBtn)
      
      list.appendChild(newDiv)
      
      
      input.value = ""
      
    } // End of Else
    
    
} // End of addTask Function

 function deleteTask(event){
  event.target.parentElement.remove()
    
    
   
}

function editTask(event){
 
   if (event.target.parentElement.querySelector(".inputLi").disabled === true){
       event.target.parentElement.querySelector(".inputLi").disabled = false
  } else{ 
     event.target.parentElement.querySelector(".inputLi").disabled = true}

  
}

function defaultTodos (randomTask,times){
  
  let displayDefaults = randomTask.map(function(task){
    return `<div class="elementContainer">
    <li class="element">   <input type="text" value="${task.task}" class="inputLi" disabled style="color: black;" > </li>
    <button class="editTsk">E</button>
    <button class="deleteTaskButton">X</button>  
</div>`
  })
  
  let randomTasks =displayDefaults.sort(() => Math.random() - Math.random()).slice(0, 3)
  randomTasks = randomTasks.join("")  //console.log(displayDefaults)
  listContainer.innerHTML = randomTasks
  
}