const formularioContacto = document.querySelector("#formContact")
/* crear el evento */
formularioContacto.addEventListener("submit", validarFormulario)

//funciones
function validarFormulario(e){
    e.preventDefault();
    const nombreC = document.querySelector("#nombre").value
    const mailC = document.querySelector("#emailC").value
    console.log(nombreC,mailC)

    const respuestaContacto = document.getElementById("respuestaC");
    respuestaContacto.textContent = `¡Gracias! ${nombreC}, tu mensaje se envio.`
}
console.log(formularioContacto)
