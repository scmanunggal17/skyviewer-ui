document.getElementById("submit-set-loc").addEventListener("click", () => {
  const latitude = document.getElementById("latitude").value;
  const longitude = document.getElementById("longitude").value;
  const errorDialog = document.getElementById("error-dialog");

  if (!/^-?\d+(\.\d+)?$/.test(latitude) || !/^-?\d+(\.\d+)?$/.test(longitude)) {
    errorDialog.style.display = "block";
    setTimeout(() => {
      errorDialog.style.display = "none";
    }, 5000);
    return;
  }
  window.NodeFn.setLocation(latitude, longitude);
});

document.getElementById("set-loc-btn").addEventListener("click", () => {
  const setLocDialog = document.querySelector(".set-loc-dialog");

  if (setLocDialog.style.display === "flex") {
    setLocDialog.style.display = "none";
  } else {
    setLocDialog.style.display = "flex";
  }
});

document.getElementById("cancel-set-loc").addEventListener("click", () => {
  document.querySelector(".set-loc-dialog").style.display = "none";
});
