// Set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// Get temperature and wind speed
const temperature = 8; // Static value in °C
const windSpeed = 15; // Static value in km/h

// Check if conditions for wind chill calculation are met
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("wind-chill").textContent = `${windChill}°C`;
} else {
  document.getElementById("wind-chill").textContent = "N/A";
}
