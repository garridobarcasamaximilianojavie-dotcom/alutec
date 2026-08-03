// ==========================
// ALUTEC
// script.js
// ==========================

console.log("ALUTEC cargado correctamente.");

// Animación suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// Mensaje de bienvenida en la consola
window.addEventListener("load", () => {
    console.log("Bienvenido al sitio web de ALUTEC.");
});