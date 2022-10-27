const ONE_SECOND = 1000;

function addZero(value) {
    if (value < 10) {
        //return `0${value}`;
        return String(value).padStart(2, "0");
     } else {
        return value;
    }
}

function main() {

    const $clock = document.querySelector('#clock');

    setInterval(function() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    $clock.textContent = `${currentHour}:${currentMinutes}:${currentSeconds}`;
}, ONE_SECOND);
}

window.addEventListener('load', main);