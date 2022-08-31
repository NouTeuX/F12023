const MIN = 60;
const HOURS = 60 * MIN;
const DAYS = 24 * HOURS;

function refresh() {
    const countDown = document.querySelector('#count')
    const launchDate = Date.parse(countDown.dataset.time) / 1000
    const difference = launchDate - Date.now() / 1000

    const diff = {
        days: Math.floor(difference / DAYS),
        hours: Math.floor(difference % DAYS / HOURS),
        minutes: Math.floor(difference % HOURS / MIN),
        seconds: Math.floor(difference % MIN)
    }

    document.querySelector('#day').innerHTML = diff.days
    document.querySelector('#hour').innerHTML = diff.hours
    document.querySelector('#min').innerHTML = diff.minutes
    document.querySelector('#sec').innerHTML = diff.seconds


    window.setTimeout(() => {

        window.requestAnimationFrame(refresh)
    },
        1000)
}

refresh();



