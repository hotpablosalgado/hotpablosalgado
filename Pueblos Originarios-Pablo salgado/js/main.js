const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* EventListener para la flecha derecha*/
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth
/* Accedemos al indicador activo y lo guardamos dentro de una variable*/
    const indicadorActivo = document.querySelector('.indicadores .active');
    /* Preguntamos si el indicador activo tiene un elemento a su derecha*/
    if(indicadorActivo.nextSibling) {
        /* En caso de que sí lo tenga accedemos a la variable de indicadorActivo y le designamos la clase active*/
        indicadorActivo.nextSibling.classList.add('active');
        /* Como le asignamos el Indicador activo al nuevo elemento, se la removemos al viejo dando el efecto del cambio de página en los indicadores*/
        indicadorActivo.classList.remove('active');
    }
})

/* Event Listener para la flecha Izquierda*/
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
/* Accedemos al indicador activo y lo guardamos dentro de una variable*/
	const indicadorActivo = document.querySelector('.indicadores .active');
    /* Preguntamos si el indicador activo tiene un elemento a su izquierda*/
	if(indicadorActivo.previousSibling){
        /* En caso de que sí lo tenga accedemos a la variable de IndicadorActivo y le designamos la clase active*/
		indicadorActivo.previousSibling.classList.add('active');
        /* Como le designamos el Indicador activo al nuevo elemento, se la removemos al viejo dando el efecto de cambio de página en los indicadores*/
		indicadorActivo.classList.remove('active');
	}
});

/* Paginación */

/* Calculo de Páginas dividiendo la cantidad de películas entre 5 (películas que entran en una página)*/

const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');
/* Si el número de páginas es igual a 0 se le asigna la clase activo y así este primer indicador se torna de un color rojo que indica que estamos en la primer página*/
	if(i === 0){
		indicador.classList.add('active');
	}
/* Realizamos una función que al hacer click en algún indicador se multiplique el número de páginas x el ancho de la fila y se le asigne a fila y así nos mueva a la página cleckeada*/
	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;
/* Buscamos que indicador tiene la clase activo y se la removemos*/
		document.querySelector('.indicadores .active').classList.remove('active');
        /* Accedemos al indicador e (el q fue clickeado) y le asignamos el estado activo para que se actualice y se torne de un color rojo indicando el cambio de página*/
		e.target.classList.add('active');
	});
}

/* Hover para añadir la expansión de la imagen al pasar el cursor sobre la película*/

/* Iteramos por cada una de las peliculas*/
peliculas.forEach((pelicula) => {
    /* Por cada película agregamos un EventListener para que cuando pasemos el cursor obtengamos el elemento a cual le pasamos el cursor*/
pelicula.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
        /* Luego de un tiempo ejecuta este código para que busque cada película y le quite la clase de hover a cada una para que si pasemos el cursor por una película a las demás se les elimine esa clase*/
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
        /* Luego al elemento que le pasamos el cursor le asignamos la clase de hover para que sea el único que la tenga*/
        elemento.classList.add('hover');
    }, 50);
});
});
/* acá sólo hacemos que al quitar el mouse sobre la película a esta se le quite la clase de hover para que pueda volver a su estado normal*/
fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula=> pelicula.classList.remove('hover'));
})