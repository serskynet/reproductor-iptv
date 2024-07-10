
function reproductor(cambiar){

   var urlCanal = cambiar;

    fetch(urlCanal)
        .then(function(response) {
            // Verificar si la respuesta es exitosa (código de estado 200)
            console.log("conexion exitosa.")
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            // Leer el cuerpo de la respuesta como texto
            return response.text();
        })
        .then(function() {
           
            
                console.log('Canal: ');
               

            // Seleccionar el primer canal para reproducir
            var player = videojs('myVideo');
            player.src({
                src: urlCanal, // URL del primer canal
                type: 'application/x-mpegURL'
            });

        })
        .catch(function(error) {
            // Capturar y manejar errores
            console.error('Hubo un problema con la solicitud:', error);
        });

}
