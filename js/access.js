function showAccessingMessage() {
  // Display the accessing overlay
  document.getElementById("accessing-overlay").style.display = "block";
  // Start fake progress animation
  var width = 1;
  var interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      // Hide the accessing overlay after 2 seconds and show "COMING SOON" message
      setTimeout(function () {
        document.getElementById("accessing-overlay").style.display = "none";
        showComingSoonMessage();
      }, 2000);
    } else {
      width++;
      document.getElementById("progressBar").style.width = width + "%";
      document.getElementById("accessing-loading-percentage").innerHTML =
        width + "%";
    }
  }, 20);
}

function showGrantedMessage() {
  // Display the granted overlay
  document.getElementById("granted-overlay").style.display = "block";
  // Display the granted box
  document.getElementById("granted-box").style.display = "block";
  // Hide the password field
  document.getElementById("password-label").style.display = "none";
  document.getElementById("password-container").style.display = "none";
  // Hide the granted overlay and box after 2 seconds
  setTimeout(function () {
    document.getElementById("granted-overlay").style.display = "none";
    document.getElementById("granted-box").style.display = "none";
    showAccessingMessage(); // Call function to show accessing message after granted message disappears
  }, 2000);
}

document
  .getElementById("sipassword")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword();
    }
  });

function checkPassword() {
  const password = document.getElementById("sipassword").value;
  if (password === "123") {
    showGrantedMessage();
  } else {
    showIncorrectMessage();
  }
}

function showIncorrectMessage() {
  // Hide the "Enter Password" text and password input field
  document.getElementById("password-label").style.display = "none";
  document.getElementById("password-container").style.display = "none";
  // Display the incorrect overlay
  document.getElementById("incorrect-overlay").style.display = "block";
  // Display the incorrect box
  document.getElementById("incorrect-box").style.display = "block";
  // Hide the incorrect overlay and box after 2 seconds
  setTimeout(function () {
    // Restore the "Enter Password" text and password input field
    document.getElementById("password-label").style.display = "block";
    document.getElementById("password-container").style.display = "inline";
    document.getElementById("incorrect-overlay").style.display = "none";
    document.getElementById("incorrect-box").style.display = "none";
  }, 2000);
}

function showComingSoonMessage() {
  const comingSoonOverlay = document.createElement("div");
  comingSoonOverlay.id = "coming-soon-overlay";
  comingSoonOverlay.style.position = "fixed";
  comingSoonOverlay.style.top = "0";
  comingSoonOverlay.style.left = "0";
  comingSoonOverlay.style.width = "100%";
  comingSoonOverlay.style.height = "100%";
  comingSoonOverlay.style.display = "flex";
  comingSoonOverlay.style.alignItems = "center";
  comingSoonOverlay.style.justifyContent = "center";
  comingSoonOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  comingSoonOverlay.style.zIndex = "1000";

  const comingSoonText = document.createElement("div");
  comingSoonText.id = "coming-soon-text";
  comingSoonText.textContent = "COMING SOON";
  comingSoonText.style.fontSize = "48px";
  comingSoonText.style.color = "#ffffff";

  comingSoonOverlay.appendChild(comingSoonText);
  document.body.appendChild(comingSoonOverlay);
}
