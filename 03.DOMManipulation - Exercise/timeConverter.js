function attachEventsListeners() {

    let daysBtnElement = document.getElementById('daysBtn')
    let hoursBtnElement = document.getElementById('hoursBtn')
    let minutesBtnElement = document.getElementById('minutesBtn')
    let secondsBtnElement = document.getElementById('secondsBtn')

    let daysInputElement = document.getElementById('days')
    let hoursInputElement = document.getElementById('hours')
    let minutesInputElement = document.getElementById('minutes')
    let secondsInputElement = document.getElementById('seconds')

    daysBtnElement.addEventListener('click', convertFromDays)
    hoursBtnElement.addEventListener('click', convertFromHours)
    minutesBtnElement.addEventListener('click', convertFromMinutes)
    secondsBtnElement.addEventListener('click', convertFromSeconds)

    function convertFromDays() {
        hoursInputElement.value = Number(daysInputElement.value) * 24
        minutesInputElement.value = Number(hoursInputElement.value) * 60
        secondsInputElement.value = Number(minutesInputElement.value) * 60
    }

    function convertFromHours() {
        daysInputElement.value = Number(hoursInputElement.value) / 24
        minutesInputElement.value = Number(hoursInputElement.value) * 60
        secondsInputElement.value = Number(minutesInputElement.value) * 60
    }

    function convertFromMinutes() {
        hoursInputElement.value = Number(minutesInputElement.value) / 60
        daysInputElement.value = Number(hoursInputElement.value) / 24
        secondsInputElement.value = Number(minutesInputElement.value) * 60
    }

    function convertFromSeconds() {
        minutesInputElement.value = Number(secondsInputElement.value) / 60
        hoursInputElement.value = Number(minutesInputElement.value) / 60
        daysInputElement.value = Number(hoursInputElement.value) / 24
    }
}
