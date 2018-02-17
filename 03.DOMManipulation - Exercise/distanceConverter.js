function attachEventsListeners() {
    let distancesMap = {
        'kmToMeters': 1000,
        'mToMeters': 1,
        'cmToMeters': 0.01,
        'mmToMeters': 0.001,
        'miToMeters': 1609.34,
        'yrdToMeters': 0.9144,
        'ftToMeters': 0.3048,
        'inToMeters': 0.0254

    }

    let convertButtonElement = document.getElementById('convert')
    let inputDistanceElement = document.getElementById('inputDistance')
    let outputDistanceElement = document.getElementById('outputDistance')
    let selectInitialMetricElement = document.getElementById('inputUnits')
    let selectResultMetricElement = document.getElementById('outputUnits')

    convertButtonElement.addEventListener('click', convertUnits)

    function convertUnits() {
        let inputDistance = inputDistanceElement.value
        let initialSelectedMetric = selectInitialMetricElement.value
        let resultSelectedMetric = selectResultMetricElement.value

        let initialToMeters = inputDistance * distancesMap[initialSelectedMetric + 'ToMeters']

        outputDistanceElement.value = initialToMeters / distancesMap[resultSelectedMetric + 'ToMeters']
    }
}