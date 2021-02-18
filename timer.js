document.addEventListener("DOMContentLoaded", ()=>{
    var timeLeftDisplay = document.getElementById("tempoRimanente");
    var btnStart = document.getElementById("btnStart");
    let timeLeft = 90;

    function countDown(){
        setInterval(function(){
        if(timeLeft <= 0 ){
            clearInterval(timeleft = 0);
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
        }, 1000);
    }
btnStart.addEventListener("click", countDown);
})
