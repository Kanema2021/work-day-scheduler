
const date = new Date();
const day = moment().format('dddd MMMM Do YYYY h:mm:ss a');
document.getElementById("currentDay").innerHTML = day;


function saveTasks(){
const textArea = document.querySelector(".textarea");
const btn = document.querySelector(".saveBtn");
let task = localStorage.getItem("task");
let hourlyTask = JSON.parse(task) || [];

if(task){
    hourlyTask = JSON.parse(task);
    } else {
    hourlyTask = [];
    }

for (let i = 0; i < hourlyTask.length; i++){
    textArea.textContent = hourlyTask[i]
    }

btn.addEventListener("click", function(event){
    event.preventDefault()
    const currentValue = textArea.value
    hourlyTask.push(currentValue)
    localStorage.setItem("task".JSON.stringify(hourlyTask))
    window.location.reload()
    });
}
saveTasks();



function timeBlocks() {
    const today = new Date ();
    const timeNow = today.getHours();
  
    for (let i = 8; i <= 17; i++) {
        if (i == timeNow) {
            document.getElementById("hour" + i).setAttribute("class", "present");
        } else if (i < timeNow) {
            document.getElementById("hour" + i).setAttribute("class", "past");
        } else if (i > timeNow) {
            document.getElementById("hour" + i).setAttribute("class", "future");
        }
    }
}
timeBlocks();
















// const currentHour =  moment().hour();

// alert(`Here is the scheduele for today: ${localStorage.getItem(‘hour’)}`)
//         const choice = prompt(‘Which entry would you like to update?’)
//         localStorage.setItem(‘scheduele’,choice);
//         // update the entry
//     }
//     saveToSomeSlot();
    
//     function saveToTimeSlot(){
//         alert('Here is the schedule for today: ${localStorage.getItem('schedule')}')
//         const choice = prompt('which entry would you like to update?')
        
//     }




    
