// const date =new Date();
// const time = date.getTime();
// const fullYear = date.getFullYear();
// const month = date.getMonth();
// const date2 = date.getDate();
// const hour = date.getHours();
// const min = date.getMinutes();

// const day = date.getDay();

function showHour() {
    
    const date = new Date();
    const session = document.getElementById('session');

    let hour = date.getHours();

    if(hour == 0) {
        hour = 12;
    }

    if(hour > 12) {
        hour -= 12;
        session.innerText = 'PM'
    }

    const hourText = document.getElementById('hour');
    hourText.innerText = hour < 10 ? '0'+hour : hour;

    setTimeout(showHour,1000)
}

function showMin() {
    const date = new Date();

    const min = date.getMinutes();

    const minText = document.getElementById('miniute');
    minText.innerText = min < 10 ? '0'+min : min;

    setTimeout(showMin,1000)
}

function showSec() {
    const date = new Date();

    const sec = date.getSeconds();

    const secText = document.getElementById('second');

secText.innerText = sec < 10 ? '0'+sec : sec;

    setTimeout(showSec,1000)
}

showHour();
showMin();
showSec();
// console.log(date);
// console.log(time);
// console.log(fullYear);
// console.log(month);
// console.log(date2);
// console.log(hour);
// console.log(min);
// console.log(day);

// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";
    
//     if(h == 0){
//         h = 12;
//     }
    
//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + ":" + m + ":" + s + " " + session;
//     // document.getElementById("MyClockDisplay").innerText = time;
//     // document.getElementById("MyClockDisplay").textContent = time;
//     console.log(time);
//     setTimeout(showTime, 1000);
// }

// showTime();
