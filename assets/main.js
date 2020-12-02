let grid = document.querySelector('.grid');
if (grid) {

	$('.grid').masonry({
		// options
		itemSelector: '.grid-item',
		gutter: 10,
		originCenter: true,
	});
}

let menu = document.querySelector('.burger');
if (menu) {
	menu.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.add('active');
	})
}

let close = document.querySelector('nav .close');
if (close) {
	close.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.remove('active');
		document.querySelector('.contacto').style.display = "none";
	})
}


let close_contacto = document.querySelector('.contacto .close');
if (close_contacto) {
	close_contacto.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.contacto').style.display = "none";
	})
}


let contacto = document.querySelector('.seccion-contacto .container button');
if (contacto) {
	contacto.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.contacto').style.display = "block";
	})
}



//hover galeria
let large = document.querySelectorAll('.large, .short');
if (large) {
	for (var i = 0; i <= large.length - 1; i++) {
		large[i].addEventListener('mouseout', function(e) {
			img = e.target.getAttribute('data-init');
			e.target.setAttribute('src', img);
		});
	}

	for (var j = 0; j <= large.length - 1; j++) {
		large[j].addEventListener('mouseover', function(e) {
			img = e.target.getAttribute('data-finish');
			e.target.setAttribute('src', img);
		});
	}
}


//CLICK A CADA PROYECTO EN PORTAFOLIO
let largeClick = document.querySelectorAll('.large');
if (largeClick) {
	for (var i = 0; i <= largeClick.length - 1; i++) {
		largeClick[i].addEventListener('click', function(e) {
			modal = e.target.parentElement.parentElement.getAttribute('data-modal');
			console.log(e.target)

			$(".modal[data-modal="+modal+"]").css('opacity', '1');
			$(".modal[data-modal="+modal+"]").css('pointerEvents', 'auto');
		});
	}
}


//EFECTO DE ALICK AL MENU
itemMenu = document.querySelectorAll('header nav a');
if (itemMenu) {
	for (var i = 0; i <= itemMenu.length - 1; i++) {
		itemMenu[i].addEventListener('click', function(e) {
			$('nav').removeClass();
		});
	}
}



//Efecto de Filtrado
categorias = document.querySelectorAll('.categorias a');
if (categorias) {
	for (var i = 0; i <= categorias.length - 1; i++) {
		categorias[i].addEventListener('click', function(e) {
			e.preventDefault();
			let cat = e.target.getAttribute('data-cat');
			if (cat != 'todas') {
				$('.filtro').css('display', 'block');
				$('.large[data-cat="'+cat+'"] .filtro, .short[data-cat="'+cat+'"] .filtro').css('display', 'none');
				return false;
			}

			$('.filtro').css('display', 'none');

		});
	}
}



//Efecto scroll
let secLogo = document.querySelector('.section-logo');
if (secLogo) {


	let section1 = document.querySelector('.section-logo').offsetTop;
  	let section2 = document.querySelector('.seccion-info').offsetTop;
  	let section3 = document.querySelector('.seccion-portafolio').offsetTop;
  	let section4 = document.querySelector('.seccion-research').offsetTop - 100;
  	let section5 = document.querySelector('.seccion-contacto').offsetTop - 100;
  	$(".submenu ul li a").css('background', 'none');


	if (window.scrollY < section2) {
		if (!$('#main').hasClass('negro')) {
			$('#main').removeClass();
			$('#main').addClass('negro');
		}

		$("a[href='#section_logo']").css('background', '#fff');

 	}

	if (window.scrollY >= section2 && window.scrollY < section3) {

		if (!$('#main').hasClass('azul_marino')) {
			$('#main').removeClass();
			$('#main').addClass('azul_marino');
		}

		$("a[href='#section_info']").css('background', '#fff');
		$("header > div > a > figure > img").attr('src', 'assets/img/logo.png');


	}

	if (window.scrollY >= section3 && window.scrollY < section4) {

		if (!$('#main').hasClass('azul')) {
			$('#main').removeClass();
			$('#main').addClass('azul');
		}

		$("a[href='#seccion_portafolio']").css('background', '#fff');

	}


	if (window.scrollY >= section4 && window.scrollY < section5) {

		if (!$('#main').hasClass('verde_agua')) {
			$('#main').removeClass();
			$('#main').addClass('verde_agua');
		}

		$("a[href='#seccion_research']").css('background', '#fff');

	}

	if (window.scrollY >= section5) {

		if (!$('#main').hasClass('verde_claro')) {
			$('#main').removeClass();
			$('#main').addClass('verde_claro');
		}


		$("a[href='#seccion_contacto']").css('background', '#fff');
	}





	window.onscroll = function (e) {

	  	let section1 = document.querySelector('.section-logo').offsetTop;
	  	let section2 = document.querySelector('.seccion-info').offsetTop;
	  	let section3 = document.querySelector('.seccion-portafolio').offsetTop;
	  	let section4 = document.querySelector('.seccion-research').offsetTop - 100;
	  	let section5 = document.querySelector('.seccion-contacto').offsetTop - 100;
	  	$(".submenu ul li a").css('background', 'none');


		if (window.scrollY < section2) {
			if (!$('#main').hasClass('negro')) {
				$('#main').removeClass();
				$('#main').addClass('negro');
			}

			$("a[href='#section_logo']").css('background', '#fff');
			$("header > div > a > figure > img").attr('src', 'assets/img/logo-blanco.png');

	 	}

		if (window.scrollY >= section2 && window.scrollY < section3) {

			if (!$('#main').hasClass('azul_marino')) {
				$('#main').removeClass();
				$('#main').addClass('azul_marino');
			}

			$("a[href='#section_info']").css('background', '#fff');
			$("header > div > a > figure > img").attr('src', 'assets/img/logo-blanco.png');



		}

		if (window.scrollY >= section3 && window.scrollY < section4) {

			if (!$('#main').hasClass('azul')) {
				$('#main').removeClass();
				$('#main').addClass('azul');
			}

			$("a[href='#seccion_portafolio']").css('background', '#fff');
			$("header > div > a > figure > img").attr('src', 'assets/img/logo.png');

		}


		if (window.scrollY >= section4 && window.scrollY < section5) {

			if (!$('#main').hasClass('verde_agua')) {
				$('#main').removeClass();
				$('#main').addClass('verde_agua');
			}

			$("a[href='#seccion_research']").css('background', '#fff');

		}

		if (window.scrollY >= section5) {

			if (!$('#main').hasClass('verde_claro')) {
				$('#main').removeClass();
				$('#main').addClass('verde_claro');
			}


			$("a[href='#seccion_contacto']").css('background', '#fff');
		}
	}



	let portafolio = document.querySelector('.seccion-portafolio button');
	if (portafolio) {
		portafolio.addEventListener('click', function() {
			window.location.href = 'portafolio.html';
		})
	}


}
