var currentTime = new Date();
var currentHour =currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
if(currentMinutes < 10){
    console.log(currentHour + ":0" + currentMinutes);
}
else{
    console.log(currentHour + ":" + currentMinutes);
}