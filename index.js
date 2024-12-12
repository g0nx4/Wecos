document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Activa la animación
            } else {
                entry.target.classList.remove("show"); // Restablece para permitir que se repita
            }
        });
    }, { threshold: 0.1 }); // Actúa cuando el 10% del elemento es visible

    elements.forEach(element => observer.observe(element));
});
