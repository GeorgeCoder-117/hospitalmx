$(document).ready(function(){
	$('.scroll-up').hide();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){ //this --> esta ventana .. scrollTop -->posicion arriba de la ventana 100-->pixeles de arriba a abajo
			$('.scroll-up').show('1000'); //fadeIn -->mostrar de nuevo
		}

		else {
			$('.scroll-up').hide('1000'); // fadeOut -->  desaparezca  1000 --> efecto de aparición en tiempo
		}
	});

	$('.scroll-up').click(function(){
		$('body, html').animate({
			scrollTop: 0 //Para que regrese al Inicio de arriba
		},200); // 200 velocidad de efecto hacia arriba
	});

});

/*=============== SHOW RESPONSIVE HEADER NAV MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

//SLIDER DE INICIO
let indice = 1;

showSlides(indice); // Posición dónde se encuentra el elemento, inciia en 1 (1 imagen)

function moveSlide(n) {
    showSlides(indice += n); // Para avanzar o mover de posición el elemento
}

function slidePosition() { // Para posicionar el elemento con las barras
    showSlides(indice = n)
}

setInterval(function time() {
    showSlides(indice += 1) //concatenación
}, 60000);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slider');
    let barras = document.getElementsByClassName('circle');

    if (n > slides.length) { // Si n pasa del limite de posiciones se regresa a la posicion(1)
        indice = 1;
    }

    if (n < 1) { // si n es menor a la posicióon mínima 1 se cambia a la última posición dependiendo tamaño del slider
        indice = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice - 1].style.display = 'block';
    barras[indice - 1].className += ' active'; // Para concatenar la Clase en este caso se le agrega espacio para que no quede junto
}

// PLUGIN SWIPER SLIDER SECCION INFO 1
var swiper = new Swiper(".container_info1", {
	spaceBetween:24,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
    breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 48,
		},
	},
});

/*=============== VALUE ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.value__accordion-header');
	accordionHeader.addEventListener('click', () => {

		const openItem = document.querySelector('.accordion-open')
		toggleItem(item);
		if(openItem && openItem !== item) {
			toggleItem(openItem);
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.value__accordion-content');

	if(item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style');
		item.classList.remove('accordion-open');
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
		item.classList.add('accordion-open');
	}
}