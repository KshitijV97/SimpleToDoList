var addToDo = document.getElementById("addToDo");
var todoInput = document.getElementById("addInput");
var todoList = document.getElementById("todolist");

addToDo.addEventListener("click",function(){
    // console.log(toDoInput.value);
   
    var todoText = todoInput.value;

    if(todoInput.value == ""){
        window.alert("Please enter some text");
        return;
    }
    
    todoInput.value="";

    var todo = document.createElement("DIV");
    todo.classList.add("todo"); 
    todo.innerHTML = todoText;

    var removeBTN = document.createElement("BUTTON");
    removeBTN.classList.add("remove-btn");
    removeBTN.innerHTML="REMOVE";
    removeBTN.addEventListener("click",function(){
        todo.parentNode.removeChild(todo);
    });

    todo.append(removeBTN);
    todolist.append(todo);
    
});