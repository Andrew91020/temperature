function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function describeTemperature(fahrenheit) {
  const celcius = convertToCelsius(fahrenheit);

  let temperature;

  if (celcius < 0) {
    temperature = "very cold";
  } else if (celcius < 20) {
    temperature = "cold";
  } else if (celcius < 30) {
    temperature = "warm";
  } else if (celcius < 40) {
    temperature = "hot";
  } else if (celcius >= 40) {
    temperature = "very hot";
  }

  return `${celcius} is your deg celcius and it is ${temperature} outside!`;
}

const fahrenheit = prompt("Deg Fahrenheit.");
const temperature = describeTemperature(fahrenheit);
alert(temperature);
