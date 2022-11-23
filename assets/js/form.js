const nombre = document.querySelector("#name")
const apellido = document.querySelector("#apellido")
const email = document.querySelector("#email")
//const emailErrorMsg = document.querySelector("#email")
const celular = document.querySelector("#celular")
const fecha = document.querySelector("#date")
const contador = Number(document.querySelector("#numero").value)
const paquete1 = document.querySelector("#inlineCheckbox1")
const paquete2 = document.querySelector("#inlineCheckbox2")
const paquete3 = document.querySelector("#inlineCheckbox3")


const formularioReserva = document.querySelector("#formReserva")
//const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const alertEmail = document.querySelector("#alertEmail")

const respuesta = document.getElementById("respuesta");

const mensajeExito = () =>{
    respuesta.classList.remove('d-none')
}

/* crear el evento */
formularioReserva.addEventListener("submit", (e)=> {
    e.preventDefault();
    respuesta.classList.add('d-none');
    let precio = 0;
    let paqueteGeneral = " ";

    if (paquete1.checked == true){ 
        precio = precio + (29000 * contador);
        paqueteGeneral = "Full"
     } 
    
    if (paquete2.checked == true){
        precio =precio +(19000* contador);
        paqueteGeneral = "Plus"
         }
    if (paquete3.checked == true){
        precio = precio +(15000* contador);
        paqueteGeneral = "Básico"
         }

    mensajeExito()
    
    respuesta.textContent = `Gracias! ${nombre.value} reservaste el dia ${fecha.value},  ${contador.value} paquetes ${paqueteGeneral}, 
    Precio final: $ ${precio}.
    Nos vemos ${nombre.value}, para vivir una experiencia inolvidable`
})
