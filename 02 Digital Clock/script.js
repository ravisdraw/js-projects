const hr = document.querySelectorAll('.h');
const m = document.querySelectorAll('.m');
const s = document.querySelectorAll('.s');
const txt = document.querySelector('.txt');

function getTime() {
    const currentdate = new Date();
    const hour = currentdate.getHours() < 12 ? currentdate.getHours() : currentdate.getHours()-12;
    const min = currentdate.getMinutes();
    const sec = currentdate.getSeconds();

    var hourval = hour < 10 ? '0' + hour : hour;
    var minval = min < 10 ? '0' + min : min;
    var secval = sec < 10 ? '0' + sec : sec;

    hourval = hourval.toString();
    minval = minval.toString();
    secval = secval.toString();

    hr[0].innerHTML = hourval[0];
    hr[1].innerHTML = hourval[1];

    m[0].innerHTML = minval[0];
    m[1].innerHTML = minval[1];

    s[0].innerHTML = secval[0];
    s[1].innerHTML = secval[1];

    const text = currentdate.getHours() < 12 ? 'AM' : 'PM';

    txt.innerHTML = text;
    // console.log(hourval, minval, secval, text);

}

setInterval(getTime, 1000);