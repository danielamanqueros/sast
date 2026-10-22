// Archivo de ejemplo para la práctica SAST.
// Vulnerabilidad intencional: inserción directa de datos en innerHTML.
// No uses este patrón en aplicaciones reales.

function mostrarMensaje(mensaje) {
  const salida = document.getElementById("salida");

  // INSEGURO: si mensaje contiene HTML malicioso, el navegador podría interpretarlo.
  salida.innerHTML = mensaje;
}

mostrarMensaje("Hola, práctica SAST");
