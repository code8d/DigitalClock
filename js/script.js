'use strict'

const day = document.querySelector('.day')
const time = document.querySelector('.time')
const year = document.querySelector('.year')

setInterval(() => day.textContent = dayName(), 1)

function dayName() {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut']

    return days[new Date().getDay()]
}

setInterval(() => time.textContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`, 1)

setInterval(() => year.textContent = new Date().getFullYear(), 1);