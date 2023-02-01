
const API_URL = "https://api.adviceslip.com/advice ";
const title = document.getElementById("title");
const queote = document.getElementById("queote");

 

const queotef = async () => {
    const respuesta = await fetch(API_URL);
    const datos = await respuesta.json();
    advance(datos.slip.id, datos.slip.advice);
}

function advance(id, advice) {
  title.textContent = `“ADIVICE # ${id}”`;
  queote.textContent = `“${advice}”`;
}




