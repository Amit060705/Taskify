const today = new Date();
const day = today.getDate();
const year = today.getFullYear();
const button = document.querySelector("button");
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const month = monthNames[today.getMonth()];
const formattedDate = `${day} ${month}, ${year}`
const enter = document.getElementById("todo");
const input = document.querySelector("input");
let taskId=0;
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const value = input.value.trim();
        if (value === "") {
            alert("enter something first!"); // replace with your logic
            return;
        }
        const currentId=taskId++;
        const task= document.createElement("div");
        task.className='task';
        task.id = 'task-' + currentId;
        task.draggable=true;
        task.ondragstart=drag;
        task.innerHTML = `
        <div class="card">
                            <div style="padding: 10px; width: 95%;">
                                <div style="display: flex; flex-direction: column; align-items: flex-start;">
                                    <h3 style="margin: 5px 0px; display: flex; width: 100%; justify-content: space-between;">
                                        <span>${input.value}</span>
                                        <span><img src="x-close-delete.svg" alt="delete" style="width: 30px; height: 30px; margin-top: -7px; cursor:pointer;" onclick="deleteTodo(${currentId})"></span> 
                                    </h3>
                                    <p>Todo description</p>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <div style="display: flex; gap: 5px;">
                                        <div style="background-color: rgba(255, 166, 0, 0.76); border-radius: 10px; padding:4px 6px; color: white;">medium</div>
                                        <div style="display: flex;">
                                            <img src="clock-137.png" alt="clock" style="width: 20px; height: 20px; margin-top: 3px;">
                                            <div class="time" style="margin-top: 4px;">${formattedDate}</div>
                                        </div>
                                    </div>
                                    <div>1 hr ago</div>
                                </div>
                            </div>
                        </div>
        `
        enter.appendChild(task);
        input.value = ""; // clear the input
    }
})
function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("text",ev.target.id);
}
function drop(ev){
    ev.preventDefault();
    const data=ev.dataTransfer.getData("text");
    const task=document.getElementById(data);
    ev.target.closest('.card-container').appendChild(task);
}
function deleteTodo(index) {
  const element=document.getElementById("task-"+index);
  element.parentNode.removeChild(element);
}
// function deleteTodo(element) {
//   const task = element.closest('.task');
//   if (task) task.remove();
// }use deleteTodo(this)
//use this on this types
