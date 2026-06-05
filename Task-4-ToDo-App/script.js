const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");
const addBtn = document.getElementById("addBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateUI(){

taskList.innerHTML = "";

let completed = 0;

tasks.forEach((task,index)=>{

if(task.completed){
completed++;
}

const li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span>${task.text}</span>

<div class="actions">

<button class="complete-btn"
onclick="toggleTask(${index})">
✓
</button>

<button class="delete-btn"
onclick="deleteTask(${index})">
🗑
</button>

</div>
`;

taskList.appendChild(li);

});

counter.innerText = `Total Tasks: ${tasks.length}`;

let progress =
tasks.length === 0
? 0
: (completed / tasks.length) * 100;

progressBar.style.width = progress + "%";

saveTasks();
}

function addTask(){

const text = taskInput.value.trim();

if(text === ""){
alert("Please enter a task");
return;
}

tasks.push({
text:text,
completed:false
});

taskInput.value = "";

updateUI();
}

function toggleTask(index){

tasks[index].completed =
!tasks[index].completed;

updateUI();
}

function deleteTask(index){

tasks.splice(index,1);

updateUI();
}

function filterTasks(type){

const items =
document.querySelectorAll("li");

items.forEach((item,index)=>{

if(type === "all"){
item.style.display = "flex";
}

else if(type === "completed"){
item.style.display =
tasks[index].completed
? "flex"
: "none";
}

else{
item.style.display =
!tasks[index].completed
? "flex"
: "none";
}

});

}

addBtn.addEventListener(
"click",
addTask
);

updateUI();
