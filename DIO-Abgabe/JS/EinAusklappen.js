document.addEventListener("DOMContentLoaded", function () {
  const collapseText = document.querySelector(".collapse-text");
  const toggleButton = document.getElementById("toggle-button");

  toggleButton.addEventListener("click", function () {
    if (collapseText.style.maxHeight) {
      collapseText.style.maxHeight = null;
      toggleButton.textContent = "Mehr anzeigen";
    } else {
      collapseText.style.maxHeight = collapseText.scrollHeight + "px";
      toggleButton.textContent = "Weniger anzeigen";
    }
  });
});
