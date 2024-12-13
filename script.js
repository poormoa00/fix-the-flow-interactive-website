document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".dag-datum a");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
           
            buttons.forEach(btn => btn.classList.remove("active"));

            
            button.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const radioImages = document.querySelectorAll(".radio-img");

    radioImages.forEach(img => {
        img.addEventListener("click", () => {
            // Als de afbeelding al de 'expanded' klasse heeft, verwijder deze
            if (img.classList.contains("expanded")) {
                img.classList.remove("expanded");
            } else {
                // Verwijder de 'expanded' klasse van alle andere afbeeldingen
                radioImages.forEach(image => image.classList.remove("expanded"));

                // Voeg de 'expanded' klasse toe aan de aangeklikte afbeelding
                img.classList.add("expanded");
            }
        });
    });
});
