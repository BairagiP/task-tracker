const taskForm=document.getElementById("task_form");
const taskList=document.getElementById("task_list");
let taskcount=1;
// console.log(taskForm,taskList)
taskForm.addEventListener("submit",function(event){
event.preventDefault();
const taskInput=document.getElementById("task_input");
const taskText=taskInput.value.trim();

//console.log(taskText);


if(taskText!==""){
//new task creation
const taskItem=document.createElement("li");
taskItem.classList.add("task_item");
taskItem.textContent=`${taskcount}- ${taskText}`;


taskItem.addEventListener("click",function(){
console.log("completed");
this.classList.toggle("completed");
});




// new li item is add into main one
taskList.appendChild(taskItem);

//increament count
taskcount++;

taskInput.value="";

}



});