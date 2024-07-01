function updateClock() {
    let current = new Date();
    
    // Update time
    let time = current.toLocaleTimeString();
    let currentTime = document.getElementById("time");
currentTime.innerHTML = time;
    
    // Update date
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = current.toLocaleDateString('en-US', options);
    let currentDate = document.getElementById("date");

currentDate.innerHTML = date;
}


updateClock();

// call it every second
setInterval(updateClock, 1000);
