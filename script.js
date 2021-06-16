
    const date = new Date();
    const day = moment().format('dddd MMMM Do YYYY h:mm:ss a');
    document.getElementById("currentDay").innerHTML = day;

    const textArea = document.querySelector("textarea");
    const btn = document.querySelector(".saveBtn");

btn.addEventListener("click", function(event){
    event.preventDefault()

    const currentValue = hour8.value
    hourlyTask.push(currentValue)
    localStorage.setItem("hour8",JSON.stringify(hourlyTask))
    window.location.reload()
});
    
    const timeSlots = ["hour8", "hour9", "hour10", "hour11", "hour12","hour13", "hour14", "hour15", "hour16", "hour17"] 
    
    let task = localStorage.getItem("hour8");
    let hourlyTask = JSON.parse(task) || [];

function loadSavedTasks(){
    for (let i = 0; i < hourlyTask.length; i++){
        textArea.textContent = hourlyTask[i]
        if(task){
    hourlyTask = JSON.parse(task);
        } else {
            hourlyTask = [];
        }
    }
}
loadSavedTasks();



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




    
