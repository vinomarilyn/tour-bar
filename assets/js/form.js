let starValue = 0;
let disabledBtn = document.getElementById("disabledBtn");

disabledBtn.disabled = true;

function addValueFunction(valuePar){
    document.getElementById("amount").value;
    if(valuePar.value == 'increase'){
           starValue++;
    }else{
        starValue--;
    }
    document.getElementById("amount").textContent = 
    starValue;
    if(starValue == 0){
        disabledBtn.disabled = true;
    }else{
        disabledBtn.disabled = false;
    }

}
const formularioReserva = document.querySelector("#formReserver")
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
    const contador = document.querySelector("#numero").value
    const paquete1 = document.querySelector("#inlineCheckbox1").value
    const paquete2 = document.querySelector("#inlineCheckbox2").value
    const paquete3 = document.querySelector("#inlineCheckbox3").value
    
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Gracias! ${nombre} reservaste el dia ${fecha}, ${contador} paquetes.
    Nos vemos ${nombre}, para vivir una experiencia inolvidable`
}
console.log(formularioReserva)