function obtenerDatos() {
    fetch('https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6')
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            const contenedor = document.getElementById('juegos');
            datos.results.forEach(juego => {
                
                // Crear un elemento de contenedor para cada juego
                const juegoElemento = document.createElement('div');
                juegoElemento.classList.add('juego');

                // Agregar imagen del juego
                const imagen = document.createElement('img');
                imagen.src = juego.background_image;
                juegoElemento.appendChild(imagen);

                // Agregar nombre del juego
                const nombre = document.createElement('h2');
                nombre.textContent = juego.name;
                juegoElemento.appendChild(nombre);

                // Agregar fecha de lanzamiento
                const fecha = document.createElement('p');
                fecha.textContent = `Fecha de lanzamiento: ${juego.released}`;
                juegoElemento.appendChild(fecha);

                // Agregar puntuación
                const puntuacion = document.createElement('p');
                puntuacion.textContent = `Puntuación: ${juego.rating}`;
                juegoElemento.appendChild(puntuacion);

                // Agregar plataformas
                const plataformas = document.createElement('p');
                plataformas.textContent = `Plataformas: ${juego.platforms.map(plataforma => plataforma.platform.name).join(', ')}`;
                juegoElemento.appendChild(plataformas);

                // Agregar el elemento del juego al contenedor principal
                contenedor.appendChild(juegoElemento);
            });
        })
}

obtenerDatos();
