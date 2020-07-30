'use strict'

var list = [];
var listP =[];
var listType;
var type = false;

//ON START, CHECKS IF LOCALSTORAGE CONTAINS SOMETHING
function start(){
    
        var storedlistp = localStorage.getItem("listP");
        if(storedlistp != null){
            listP = storedlistp.split(",");
            console.log(listP)
            listType = "olist"
            
            listP.forEach((task, index) => {
                addOitem(task);
                });
        }

        var storedlist = localStorage.getItem("list");
        if(storedlist != null){
            list = storedlist.split(",");
            console.log(list)
            listType = "ulist"
    
            list.forEach((task, index) => {
                addUitem(task);
                });
        }

    }
   


//BUTTON FUNCTIONS
function TogglePriority(){
    type = !type;
    console.log("El tipo de prioridad ha cambiado "+type)
}

var input = document.getElementById("Task");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click();
  }
});
//---------------------


//LIST FUNCTIONS
function addTask(){
    var input = document.getElementById("Task");
    var newTask = input.value;

    if (newTask.length > 0){
        if (type == false) {
            listType = "ulist"
            list.push(newTask);
            localStorage.setItem("list", list);
            addUitem(newTask);
        }
        else {
            listType = "olist"
            listP.push(newTask);
            localStorage.setItem("listP", listP);
            addOitem(newTask);
        }
    }
    else {alert("Debes ingresar una nueva tarea")}
}



function addOitem (task){
    var button = document.createElement("button");
    button.setAttribute("class",`closeTask`);
    button.setAttribute("onmouseover", "delTask()");
    var buttontxt = document.createTextNode("X");
    button.append(buttontxt);
    var listElem = document.getElementById(listType);
    var li = document.createElement("li");
    li.append(task);
    li.appendChild(button);
    listElem.append(li);
}

function addUitem (task){
    var button = document.createElement("button");
    button.setAttribute("class", "closeTask");
    button.setAttribute("onmouseover", "delTask()");
    var buttontxt = document.createTextNode("X");
    button.append(buttontxt);
    var listElem = document.getElementById(listType);
    var li = document.createElement("li");
    li.append(task)
    li.appendChild(button)
    listElem.append(li);
}




function cleanList(){

    var ulist = document.getElementById("ulist");
    var olist = document.getElementById("olist");

    if (ulist.childElementCount != 0){
        for (let i=0; i <= ulist.childElementCount; i++){
            ulist.removeChild(ulist.childNodes[0]); 
            if(ulist.childElementCount !=0){
                for (let i=0; i <= ulist.childElementCount; i++){
                ulist.removeChild(ulist.childNodes[0]);}
            }else{break};
        };
    };
    if (olist.childElementCount != 0){
        for (let i=0; i <= olist.childElementCount; i++){
            olist.removeChild(olist.childNodes[0]); 
            if(olist.childElementCount !=0){
                for (let i=0; i <= olist.childElementCount; i++){
                olist.removeChild(olist.childNodes[0]);}
            }else{break};
        };
    };

    localStorage.clear("listP", "list");
    list.length = 0;
    listP.length = 0;

};




function delTask(){
    var button = document.getElementsByClassName("closeTask");
    console.log("Borrado")
    for (let i = 0; i < button.length; i++){
        console.log(i)
    button[i].onclick = function() {
        console.log(i)
        console.log(button[i])
        var li = this.parentElement;
        li.style.display = "none";
        }
    }
}



    

