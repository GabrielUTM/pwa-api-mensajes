console.log("Script app.js cargado"); //verificación que el archivo se está cargando

const API_URL = "https://api.gameofthronesquotes.xyz/v1/random";

function fetchQuote() {
  console.log("Intentando obtener una cita"); //verificación que se llama a la funcion

  fetch(API_URL)
    .then((response) => {
      console.log("Respuesta recibida: ", response); //mostrar la respuesta en consola

      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("datos obtenidos:", data);
      displayQuote(data)
    })
    .catch((error) => console.log("Error al obtener la cita:", error));
}

function displayQuote(quoteData) {
  const container = document.getElementById("games-container");
  container.innerHTML = `<p><strong>${quoteData.character.name}: "${quoteData.sentence}"</strong></p>`;
  console.log("cita mostrada correctamente");
}
fetchQuote();
