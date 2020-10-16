// var that captures the time
let currenttime= moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currenttime)
// document.querySelector("#currentDay").innerHTML=currenttime
setInterval(function(){ 
     currenttime= moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log(currenttime)
    $("#currentDay").text(currenttime)
 }, 1000);


  


// function to change background color based on time


// sets stored tasks from local storage to inputs


// function to save content entered into input 

        // sets array to local storage
       

