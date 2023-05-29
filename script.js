const buttonStart = document.querySelector('#start');
const timerItem = document.querySelector('#pomodoro-time');
let timerId;

buttonStart.addEventListener('click', function() {


    if (buttonStart.textContent === 'stop') {
        clearInterval(timerId);
        buttonStart.textContent = 'start';
    } else {
        buttonStart.textContent = 'stop';

        timerId = setInterval(() => {

            let minutes = timerItem.textContent.split(":")[0];
            let seconds = timerItem.textContent.split(":")[1];

            if (seconds > 0) {
                seconds--;
            };

            if (seconds < 10) {
                seconds = `0${seconds}`;
            };

            /*Не понимаю, почему это же не работает с минутами :(
            if (minutes < 10) {
                minutes = `0${minutes}`;
            };*/

            if (seconds == 0 && minutes > 0) {
                minutes--;
                seconds = 59;
            };

            if (seconds == 0 && minutes == 0) {
                clearInterval(timerId);
                timerItem.innerHTML = '25:00';
                buttonStart.textContent = 'start';
            };

            timerItem.textContent = `${minutes}:${seconds}`;

        }, 10);
    };
});


const buttonBreak = document.querySelector('#break');
const buttonReset = document.querySelector('#reset');

/*buttonReset.addEventListener('click', function() {
    clearInterval(timerId);
    timerItem.innerHTML = '25:00';
});


buttonBreak.addEventListener('click', function() {
    clearInterval(timerId);
    timerItem.innerHTML = '05:00';
});*/