//$(document).ready(function () {
//    $(".spinner-load").fadeOut(1000, ()=> {
//        $(this).addClass(".d-none");
//    });
//});

window.onload = function () {
    var contenedor = document.querySelector('.spinner-load');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 1800,
    origin: "bottom",
    distance: "-150px"
});


sr.reveal('.div-desc', {
    duration: 1800,
    origin: "left",
    distance: "150px"
});


sr.reveal('.img-desc', {
    duration: 1800,
    origin: "right",
    distance: "150px"
});



