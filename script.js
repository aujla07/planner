// var that captures the time
let currenttime= moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currenttime)
// document.querySelector("#currentDay").innerHTML=currenttime
setInterval(function(){ 
     currenttime= moment().format("MMMM Do YYYY, h:mm:ss a");
// console.log(currenttime)
    $("#currentDay").text(currenttime)
 }, 1000);
