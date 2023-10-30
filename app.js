let [second, minute, hour] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let timer = null;

function watch(){
    second++;
    if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
    }
    let hr = hour < 10 ? "0" + hour : hour;
    let sec = second < 10 ? "0" + second : second;
    let min = minute < 10 ? "0" + minute : minute;

    displayTime.innerHTML = hr + ":" + min +":" + sec;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(watch,1000);
}

function watchStop(){
    clearInterval(timer);
    timer = null;
    document.getElementById("start").innerText = "CONTINUE";
}

function watchReset(){
    clearInterval(timer);
    timer = null;
    [second, minute, hour] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
    document.getElementById("start").innerText = "START";
}
    
