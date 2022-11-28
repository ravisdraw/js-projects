const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const hour = document.querySelectorAll('.hrs');
const min = document.querySelectorAll('.mins');
const sec = document.querySelectorAll('.sec');
const millisec = document.querySelectorAll('.millisec');


let h = m = s = ms = 0;
let startTimer;

btnStart.addEventListener('click', () => {
    startTimer = setInterval(() => {
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
        if(s==60){
            s = 0;
            m++;
        }
        if(m==60){
            m=0;
            h++;
        }
        updateValues();
    }, 10);
    btnStart.classList.remove('active');
    btnStart.disabled = true;
    btnStart.classList.add('disable-btn');
    btnStop.classList.add('deactive');
    btnStop.disabled = false;
    btnStop.classList.remove('disable-btn');
    btnReset.classList.remove('reactive');
    btnReset.disabled = true;
    btnReset.classList.add('disable-btn');
});

btnStop.addEventListener('click', () => {
    clearInterval(startTimer);
    btnStop.classList.remove('deactive');
    btnStart.classList.add('active');
    btnStart.disabled = false;
    btnStart.classList.remove('disable-btn');
    btnReset.classList.add('reactive');
    btnReset.disabled = false;
    btnReset.classList.remove('disable-btn');
});

btnReset.addEventListener('click', () => {
    h = m = s = ms = 0;
    updateValues();
    btnReset.classList.remove('reactive');
    btnReset.disabled = true;
    btnReset.classList.add('disable-btn');
    btnStop.disabled = true;
    btnStop.classList.add('disable-btn');
});



function updateValues() {

    //Format digits

    ph = h < 10 ? '0' + h : h;
    pm = m < 10 ? '0' + m : m;
    ps = s < 10 ? '0' + s : s;
    pms = ms < 10 ? '0' + ms : ms;

    ph = ph.toString();
    pm = pm.toString();
    ps = ps.toString();
    pms = pms.toString();

    hour[0].innerText = ph[0];
    hour[1].innerText = ph[1];

    min[0].innerText = pm[0];
    min[1].innerText = pm[1];

    sec[0].innerText = ps[0];
    sec[1].innerText = ps[1];

    millisec[0].innerText = pms[0];
    millisec[1].innerText = pms[1];
}