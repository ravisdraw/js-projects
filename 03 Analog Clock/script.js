const hours = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const second = document.querySelector('.sec')

function getTime() {
    const time = new Date();
    const hrs = time.getHours() / 12;
    const min = time.getMinutes() / 60;
    const sec = time.getSeconds() / 60;

    hours.style.setProperty('--rotation', hrs * 360);
    mins.style.setProperty('--rotation', min * 360);
    second.style.setProperty('--rotation', sec * 360);

}

getTime();
setInterval(getTime, 1000);