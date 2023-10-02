function toggleMenu() {
    const nav = document.querySelector('.header-nav');
    const burgerImage = document.querySelector('.burger img');
    
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        burgerImage.src = "../Img/Cerrar.svg"; // Por ejemplo, esta sería la imagen cuando el menú está abierto
    } else {
        nav.style.display = 'none';
        burgerImage.src = "../Img/Menu Hamburguesa.svg"; // La imagen original del menú cerrado
    }
}
