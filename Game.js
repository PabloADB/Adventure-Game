// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function(event) {
  // Obtener referencia al botón de inicio
  var iniciarBtn = document.getElementById("iniciar-btn");
  iniciarBtn.addEventListener("click", function() {
    window.location.href = "AD.html";
  });
});
