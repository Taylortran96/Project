setInterval(setClock,1000)

const hourContainer = document.querySelector('[data-hour-container')
const minuteContainer = document.querySelector('[data-minute-container')
const secondContainer = document.querySelector('[data-second-container')


function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio +currentDate.getHours())/12;
    setRotation(secondContainer,secondsRatio);
    setRotation(minuteContainer,minutesRatio);
    setRotation(hourContainer,hoursRatio);

}

function setRotation (element, rotationsRatio) {
    element.style.setProperty('--rotation', rotationsRatio*360)
}
setClock()