document.addEventListener("DOMContentLoaded", function() {
  var textElement = document.getElementById("randomText");
  function updatePosition() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - textElement.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - textElement.offsetHeight));
    textElement.style.left = randomX + "px";
    textElement.style.top = randomY + "px";
  }
  updatePosition();
  setInterval(function() {
    updatePosition();
  }, 5000);
});


