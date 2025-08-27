const boton = document.getElementById("botonJs");
const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function() {
      if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
      } else {
        mensaje.style.display = "none";
      }
    });