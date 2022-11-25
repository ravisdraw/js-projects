const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");

function timer() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`);
    const currentDate = new Date();
    const diff = newYear - currentDate;
    /*
    1000ms = 1s
    60s = 1min
    60min = 1hr
    24hr = 1day
     */
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    day.innerHTML = d < 10 ? "0" + d : d;
    hour.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(timer, 1000);