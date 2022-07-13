'use strict'

const day = document.querySelector('.day')
const time = document.querySelector('.time')
const year = document.querySelector('.year')

console.log(day);
setInterval(() => day.textContent = dayName(), 100)

function dayName() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut']

    return days[new Date().getDay()]
}

dayName()

setInterval(() => time.textContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`, 100)

setInterval(() => year.textContent = new Date().getFullYear(), 1000);