const questions = document.querySelectorAll(".title-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        if (answer.classList.contains("active")) {
            answer.classList.remove("active");
        } else {
            removerClaseActive();
            answer.classList.add("active");
        }
    });
});

function removerClaseActive() {
    questions.forEach(q => {
        q.nextElementSibling.classList.remove("active");
    });
}

//Boton flotante desaparece
document.addEventListener("scroll", function() {
    var ftContainer = document.querySelector(".ft-container");
    var floatingButton = document.querySelector(".floating-button");
    
    var ftContainerTop = ftContainer.getBoundingClientRect().top;
    var ftContainerBottom = ftContainer.getBoundingClientRect().bottom;

    if (ftContainerBottom < 0 || ftContainerTop > window.innerHeight) {
        floatingButton.style.display = "none";
    } else {
        floatingButton.style.display = "flex";
    }
});

// Función para el menú hamburguesa
function toggleMenu() {
    const nav = document.querySelector('.nav-container');
    const burgerImage = document.querySelector('.burger img');
    
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
        burgerImage.src = "../Img/Cerrar.svg"; // Por ejemplo, esta sería la imagen cuando el menú está abierto
    } else {
        nav.style.display = 'none';
        burgerImage.src = "../Img/Menu Hamburguesa.svg"; // La imagen original del menú cerrado
    }
}//
