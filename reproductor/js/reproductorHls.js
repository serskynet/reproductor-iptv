document.addEventListener('DOMContentLoaded', function() {
    // Referencia al campo de entrada y al botón en el HTML
    //var urlInput = document.getElementById('urlInput');
    
    var cambiarCanal1 = document.getElementById('cambiarCanal1');
    var cambiarCanal2 = document.getElementById('cambiarCanal2');
    var cambiarCanal3 = document.getElementById('cambiarCanal3');
    var cambiarCanal4 = document.getElementById('cambiarCanal4');

    var canal1  =   7;
    var canal2  =   8;
    var canal3  =   9;
    var canal4  =   10;

    cambiarCanal1.addEventListener('click', function() {

        var cambiar = canal1;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal2.addEventListener('click', function() {

        var cambiar = canal2;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal3.addEventListener('click', function() {

        var cambiar = canal3;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });

    cambiarCanal4.addEventListener('click', function() {

        var cambiar = canal4;

        console.log("canal".cambiar);
        reproductor(cambiar);

    });
    

    function reproductor(cambiar){

        // Captura el valor de la URL del campo de entrada
        //var url = urlInput.value;
        // Asigna la URL capturada a la variable playlistUrl
        var playlistUrl = 'https://iptv-org.github.io/iptv/countries/co.m3u';

        // Array para almacenar la información de los canales
        var channels = [];

        // Realizar una solicitud GET para obtener la lista M3U
        fetch(playlistUrl)
            .then(function(response) {
                // Verificar si la respuesta es exitosa (código de estado 200)
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                // Leer el cuerpo de la respuesta como texto
                return response.text();
            })
            .then(function(data) {
                // Dividir el contenido de la lista M3U por líneas
                var lines = data.split('\n');

                // Variables para almacenar información temporal del canal
                var currentChannel = {};
                var isExtInfLine = false;

                // Iterar sobre cada línea de la lista M3U
                lines.forEach(function(line) {
                    // Si la línea comienza con "#EXTINF", es una línea de información del canal
                    if (line.startsWith('#EXTINF')) {
                        // Establecer la bandera para indicar que esta es una línea de información del canal
                        isExtInfLine = true;
                        // Parsear la línea para obtener información adicional sobre el canal
                        var parts = line.split(',');
                        currentChannel.name = parts[1]; // El segundo elemento es el nombre del canal
                        // Buscar el logo o imagen del canal en la línea
                        var match = line.match(/tvg-logo="([^"]+)"/);
                        if (match) {
                            currentChannel.logoUrl = match[1]; // Asignar la URL del logo o imagen del canal
                        }
                    } else if (isExtInfLine) {
                        // Si la línea no comienza con "#EXTINF" pero la bandera está establecida, es la URL del canal
                        currentChannel.url = line; // La URL del canal
                        // Agregar el canal al vector de canales
                        channels.push(currentChannel);
                        // Restablecer la información del canal actual
                        currentChannel = {};
                        isExtInfLine = false;
                    }
                });

                // Imprimir los canales obtenidos
                console.log(channels);

                // Recorrer cada canal manualmente

               // for (var i = 0; i < channels.length; i++) {
                    
                   
                   
                    var channel = channels[cambiar];
                    console.log('Canal ' + (0 + 1) + ':'+cambiar);
                    console.log('Nombre: ' + channel.name);
                    console.log('URL: ' + channel.url);
                    console.log('Logo/Imagen URL: ' + channel.logoUrl);
                    console.log('-------------------------------------');
               // }
             

                // Seleccionar el primer canal para reproducir
                var player = videojs('myVideo');
                player.src({
                    src: channel.url, // URL del primer canal
                    type: 'application/x-mpegURL'
                });

            })
            .catch(function(error) {
                // Capturar y manejar errores
                console.error('Hubo un problema con la solicitud:', error);
            });

    }

});
