// Warten, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  // Elemente abrufen
  const checkboxes = document.querySelectorAll('input[name="tag"]');
  const resetButton = document.getElementById("resetButton");
  const projektGrid = document.getElementById("projekt-grid");

  // Event Listener für Checkboxen hinzufügen
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", filterProjects);
  });

  // Event Listener für den Reset-Button hinzufügen
  resetButton.addEventListener("click", resetFilters);

  // Funktion zum Filtern der Projekte
  function filterProjects() {
    // Array zum Speichern der ausgewählten Tags
    const selectedTags = [];

    // Alle ausgewählten Tags abrufen
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        selectedTags.push(checkbox.value);
      }
    });

    // Alle Projekt-Tiles anzeigen
    Array.from(projektGrid.children).forEach(function (tile) {
      tile.style.display = "block";
    });

    // Wenn keine Tags ausgewählt sind, beende die Funktion hier
    if (selectedTags.length === 0) {
      return;
    }

    // Alle Projekt-Tiles überprüfen
    Array.from(projektGrid.children).forEach(function (tile) {
      const tags = Array.from(tile.querySelectorAll(".tag"));

      // Überprüfen, ob der Tile mindestens einen ausgewählten Tag enthält
      if (!tags.some((tag) => selectedTags.includes(tag.textContent))) {
        tile.style.display = "none";
      }
    });
  }

  // Funktion zum Zurücksetzen der Filter
  function resetFilters() {
    // Alle Checkboxen zurücksetzen
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });

    // Alle Projekt-Tiles anzeigen
    Array.from(projektGrid.children).forEach(function (tile) {
      tile.style.display = "block";
    });
  }
});
