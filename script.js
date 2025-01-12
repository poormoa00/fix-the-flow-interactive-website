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
           
            radioImages.forEach(image => image.classList.remove("expanded"));

            
            img.classList.add("expanded");
        });
    });
});
