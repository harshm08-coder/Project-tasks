function addTask(){
    let task = document.getElementById("ui").value;

    if(task==="")
        return ;
    
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.onclick = function(){
        span.style.textDecoration = "line-through";
    };

    let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("ui").value="";
}