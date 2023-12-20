let timer;
let Hari = new Date().getDay();
let Jam = new Date().getHours();
let Menit = new Date().getMinutes();
let Detik = new Date().getSeconds();
let compareData = new Date();
compareData.setDate(compareData.getDate() + 7);

console.log(Hari);
console.log(compareData);

timer = setInterval(function(){
    timeBetweenDates(compareData);
}, 1000)

function timeBetweenDates(toDate){
    let dateEntered = toDate;
    let now = new Date();
    var difference = dateEntered.getTime() - now.getTime();
    
    if(difference <= 0){
        clearInterval(timer);
    }else{
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60) - 22;
        let days = 0;


        hours %= 24;
        minutes %=60;
        seconds %= 60;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}