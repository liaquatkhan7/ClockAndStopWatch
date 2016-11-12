var miliSeconds = 0;
var seconds = 0;
var min = 0;
var hour = 0;
var fullTimer;
function count() {
    miliSeconds++;
    
    if(miliSeconds <= 1000){
            
            if( miliSeconds === 30 ){
                seconds++;
                    
                    if( seconds === 30){
                        seconds = 0;
                        min++;
                            if( min === 30){
                                    min = 0;
                                    hour++;
                            }
                    }
            }
         
    }
    else {
        miliSeconds = 0;
       
    }
    
    document.getElementById("counter").innerHTML = hour + " : " + min + " : " + seconds + " : " + miliSeconds;
    
}


function startNow (){
    fullTimer = setInterval (count, 1);
}

function restart(){
    miliSeconds = 0;
    seconds = 0;
    min = 0;
    hour = 0;
}

function stop(){
    clearTimeout(fullTimer);
}

function reset () {
    clearInterval(fullTimer);
    document.getElementById("counter").innerHTML = "00" + " : " + "00" + " : " + "00" + " : " + "00";
}




setInterval(timeNow);
function timeNow () {
    var time = new Date();
    var timeHour = time.getHours();
    var timeMin = time.getMinutes();
    var timeSecond = time.getSeconds();
    document.getElementById("clock").innerHTML = timeHour + ":" + timeMin + ":" + timeSecond ;
}

// timeNow();







