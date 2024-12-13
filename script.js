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


document.addEventListener("DOMContentLoaded", () => {
    const radioImages = document.querySelectorAll(".radio-img");

    radioImages.forEach(img => {
        img.addEventListener("click", () => {
            // Verwijder de 'expanded' klasse van alle afbeeldingen
            radioImages.forEach(image => image.classList.remove("expanded"));

            // Voeg de 'expanded' klasse toe aan de aangeklikte afbeelding
            img.classList.add("expanded");
        });
    });
});
