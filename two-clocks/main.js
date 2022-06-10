const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hourBox = document.querySelector('.hour-box')
const minBox = document.querySelector('.min-box')
const secBox = document.querySelector('.sec-box')

const stillTime=(timer, timerBox)=>{
    if(timer < 10){
        timerBox.innerHTML = `0${timer}`
    }
    else{
        timerBox.innerHTML = timer
    }
}

const setDate  =()=> {
    const now = new Date()
    const seconds = now.getSeconds()
    stillTime(seconds, secBox)
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    stillTime(mins, minBox)
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours()
    stillTime(hour, hourBox)
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);

setDate();
