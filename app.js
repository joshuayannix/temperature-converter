const celsiusInput = document.querySelector('#celsius > input')
const farenheitInput = document.querySelector('#farenheit > input')
const kelvinInput = document.querySelector('#kelvin > input')

const roundNum = num => {
  return Math.round(num * 100) / 100
}

const celsiusConverter = () => {
  var cTemp = Number(celsiusInput.value)
  var fTemp = (cTemp * (9 / 5) + 32);
  var kTemp = cTemp + 273.15;
  farenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

const farenheitConverter = () => {
  var fTemp = Number(farenheitInput.value)
  var cTemp = (fTemp - 32) * (5 / 9);
  var kTemp = (fTemp + 459.67) * 5 / 9;
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

const kelvinConverter = () => {
  var kTemp = Number(kelvinInput.value);
  var cTemp = kTemp - 273.15;
  var fTemp = (cTemp * (9 / 5) + 32);
  celsiusInput.value = roundNum(cTemp);
  farenheitInput.value = roundNum(fTemp);
}

const main = () => {
  celsiusInput.addEventListener('input', celsiusConverter)
  farenheitInput.addEventListener('input', farenheitConverter)
  kelvinInput.addEventListener('input', kelvinConverter)
}

main()
