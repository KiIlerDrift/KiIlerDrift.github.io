// Add this script to handle copying address on click
document.addEventListener("DOMContentLoaded", function () {
  var cryptoAddresses = document.querySelectorAll(".crypto-address-text");

  cryptoAddresses.forEach(function (address) {
    address.addEventListener("click", function () {
      var textArea = document.createElement("textarea");
      textArea.value = address.innerText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Optional: Provide visual feedback
      address.classList.add("address-copied");
      setTimeout(function () {
        address.classList.remove("address-copied");
      }, 1000);
    });
  });
});
