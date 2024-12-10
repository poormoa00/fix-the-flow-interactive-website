document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dag-datum a");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Verwijder de `active` klasse van alle knoppen
            buttons.forEach(btn => btn.classList.remove("active"));

            // Voeg de `active` klasse toe aan de geklikte knop
            button.classList.add("active");
        });
    });
});
