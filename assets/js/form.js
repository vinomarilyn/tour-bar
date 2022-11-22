const formularioReserva = document.querySelector("#formReserva")
/* crear el evento */
formularioReserva.addEventListener("submit", validarFormularioReserva)

//funciones
function validarFormularioReserva(e){
    e.preventDefault();
    const nombre = document.querySelector("#name").value
    const apellido = document.querySelector("#apellido").value
    const mail = document.querySelector("#email").value
    const celular = document.querySelector("#celular").value
    const fecha = document.querySelector("#date").value
    const contador = Number(document.querySelector("#numero").value)
    const paquete1 = document.querySelector("#inlineCheckbox1").checked
    const paquete2 = document.querySelector("#inlineCheckbox2").checked
    const paquete3 = document.querySelector("#inlineCheckbox3").checked

    let precio = 0;
    if (paquete1){
        if (paquete1.checked == true){ 
            precio = precio * 15000 * contador 
         } 
    }
    if (paquete2){
        if (paquete2.checked == true){
            precio += 19000*contador
         }
    }
    if (paquete3){
        if (paquete3.checked == true){
            precio += 29000*contador
         }
    }
    
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Gracias! ${nombre} reservaste el dia ${fecha}, ${contador} paquetes, 
    precio final: ${precio}.
    Nos vemos ${nombre}, para vivir una experiencia inolvidable`
}

