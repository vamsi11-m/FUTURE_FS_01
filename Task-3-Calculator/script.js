const display =
document.getElementById("display");

const history =
document.getElementById("history");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value =
display.value.slice(0,-1);
}

function calculate(){

try{

let expression =
display.value;

let result =
eval(expression);

let li =
document.createElement("li");

li.textContent =
`${expression} = ${result}`;

history.prepend(li);

display.value = result;

}
catch{

display.value = "Error";

}

}

document.addEventListener(
"keydown",
function(event){

if(
"0123456789+-*/.%"
.includes(event.key)
){
append(event.key);
}

if(event.key === "Enter"){
calculate();
}

if(event.key === "Backspace"){
deleteLast();
}

if(event.key === "Escape"){
clearDisplay();
}

});
