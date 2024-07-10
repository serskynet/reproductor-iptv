document.addEventListener("DOMContentLoaded", function() {
    // Crear el menú desplegable
    var menuDesplegable = document.createElement("select");
    menuDesplegable.id = "opciones";
  
    // Crear opciones del menú
    var opciones = [
      { text: "Menu", value: "" },
      { text: "ir a reproducro de video", value: "./index.html" },
      { text: "ir a reproductor de audio", value: "./componentes/reproductorDeAudio.html" },
      { text: "ir a pagina web.", value: "#" },
      
    ];
  
    opciones.forEach(function(opcion) {
      var opcionElement = document.createElement("option");
      opcionElement.textContent = opcion.text;
      opcionElement.value = opcion.value;
      menuDesplegable.appendChild(opcionElement);
    });
  
    // Añadir evento para redireccionar al usuario cuando cambia la opción seleccionada
    menuDesplegable.addEventListener("change", function() {
      var selectedOption = this.value;
      if (selectedOption !== "") {
        window.location.href = selectedOption;
      }
    });
  
    // Agregar el menú desplegable al documento
    document.getElementById("menu_desplegable").appendChild(menuDesplegable);
  });
  