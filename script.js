
///Pseudocode:


const date = new Date();
const day = moment().format('dddd MMMM Do YYYY h:mm:ss a');
document.getElementById("currentDay").innerHTML = day;


const input = document.querySelector("#hour8");
const btn = document.querySelector("#saveButton");
let task = localStorage.getItem("task");

const hourlyTask = JSON.parse(task);

if(task){
    hourlyTask = JSON.parse(task);
} else {
    task =[];
}

for (let i = 0; i < task.length; i++){
    const hour8 = document.querySelector("#hour8")
    hour8.textContent = task[i]


}












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



// color code the time blocks

// function timeOfDay
// const present = moment(). hour();
// $(".time-block").each(function(){

// }
// )

    // figure out what is the time now.
    // compare the time with each block.
    // color the blocks accordingly
// handle save
    // set up a js representation of the scheduele
    // set up event listener
    // handle the update
    // sync with storage
    // console.log(moment().format(‘dddd’));
    // function createTimeBlocks(){
        // 9:00 - 17:00
        // for (let i = 9; i <= 17; i++) {
        //     console.log(i + ‘:00’)
            // generateOneBlock(timeSlot)
    //     }
    // }
    // at 5 i woke up
    // at 7 I ate
    // at 9 I took a nap
    // {
    //     “5”: ‘I woke up’,
    //     “7": ‘I ate’
    // }
    // [‘I woke up’, ‘’, ‘I ate’];
    // createTimeBlocks();
    // function saveToSomeSlot(){
    //     // super important please watch the !!!!lecture office hours!!!!
    //     // if first time user init the database
    //     // if not get the existing data base
    //     if(!localStorage.getItem(‘scheduele’)){
    //         localStorage.setItem(‘scheduele’, ‘New time user, welcom!’);
    //     }
    //     alert(`Here is the scheduele for today: ${localStorage.getItem(‘scheduele’)}`)
    //     const choice = prompt(‘Which entry would you like to update?’)
    //     localStorage.setItem(‘scheduele’,choice);
    //     // update the entry
    // }
    // saveToSomeSlot();
    
    // function saveToTimeSlot(){
    //     alert('Here is the schedule for today: ${localStorage.getItem('schedule')}')
    //     const choice = prompt('which entry would you like to update?')
        
    // }

    // function hourlyTimeBlocks(){
// //     7:00 - 16:00
//     for (let i = 7; i<=16; i++) {  
    
//     // const tasks = document.createElement ("tasks");
//     // const submitButton = document.createElement("submitButton");
//     // tasks.classList.add("col-md-10", "description");
//     // submitButton.classList.add("col-md-1", "saveBtn");
//     // submitButton.innerText = "Submit"

// //     scheduleContainer.append(tasks);
// //     scheduleContainer.append(submitButton)
// // }
    

// }
    



// create time blocks