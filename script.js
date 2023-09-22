setInterval(findTimeLeft, 1000);


function findTimeLeft () {
    const deadline = new Date("2081-12-11");
    const diff = deadline.getTime() - Date.now();

    let daysLeft = diff / 86400000;
    document.getElementById("year").innerHTML = fill(Math.floor(daysLeft / 365));
    daysLeft %= 365;
    
    document.getElementById("month").innerHTML = fill(Math.floor(daysLeft / 30));
    daysLeft %= 30;
    
    document.getElementById("day").innerHTML = fill(Math.floor(daysLeft));
    let secondsLeft = (daysLeft - Math.floor(daysLeft)) * 86400;
    
    document.getElementById("hour").innerHTML = fill(Math.floor(secondsLeft / 3600));
    secondsLeft %= 3600;
    
    document.getElementById("minute").innerHTML = fill(Math.floor(secondsLeft / 60));
    secondsLeft %= 60;
    
    document.getElementById("second").innerHTML = fill(Math.floor(secondsLeft));
    
    
    const progress = (diff / (80 * 365 * 86400000)) * 100;
    document.getElementById("indicator").style.height = `${progress}%`;
}


function fill (num) {
    return (num < 10) ? ('0' + num) : num;
}