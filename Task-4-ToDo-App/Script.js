let taskList = document.getElementById("taskList");

function addTask(){

let input = document.getElementById("taskInput");

if(input.value === ""){
alert("Please enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML = `
<span onclick="toggleTask(this)">
${input.value}
</span>

<span class="delete-btn"
onclick="deleteTask(this)">
Delete
</span>
`;

taskList.appendChild(li);

saveTasks();

input.value = "";
}

function toggleTask(element){
element.classList.toggle("completed");
saveTasks();
}

function deleteTask(element){
element.parentElement.remove();
saveTasks();
}

function saveTasks(){
localStorage.setItem(
"tasks",
taskList.innerHTML
);
}

function showTasks(){
taskList.innerHTML =
localStorage.getItem("tasks") || "";
}

showTasks();
