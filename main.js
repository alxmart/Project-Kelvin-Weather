
//Creating variable and set to 293 (forecast today is 293)
const kelvin = 0;

//convert Kelvin to Celsius by subtracting 273 from the kelvin variable
let celsius = (kelvin - 273);

//equation to calculate Fahrenheit,
let fahrenheit = (celsius * (9/5) + 32);

//Using method to round down the Fahrenheit temperature
fahrenheit = (Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)






