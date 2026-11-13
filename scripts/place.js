// Static weather values (°C and km/h) matching the displayed content
const temperature = 9;
const windSpeed = 12;

// Wind chill (metric, °C and km/h) in one line
const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

// Only calculate when conditions are viable: temp <= 10 °C and wind > 4.8 km/h
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}\u00B0C`;
}
document.getElementById("windchill").textContent = windChill;

// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
