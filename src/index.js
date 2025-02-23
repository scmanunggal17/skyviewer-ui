document.getElementById("set-loc-btn").addEventListener("click", () => {
  const lat = prompt("Enter Latitude: ");
  const lon = prompt("Enter Longitude");

  if (lat && lon) {
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
  } else {
    console.log("Input was canceled or empty.");
  }
});
