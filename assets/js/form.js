const nombre = document.querySelector("#name")
const apellido = document.querySelector("#apellido")
const email = document.querySelector("#email")
//const emailErrorMsg = document.querySelector("#email")
const celular = document.querySelector("#celular")
const fecha = document.querySelector("#date")

const formularioReserva = document.querySelector("#formReserva")
//const regEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//const alertEmail = document.querySelector("#alertEmail")
const respuesta = document.getElementById("respuesta");
const mensajeExito = () =>{
    respuesta.classList.remove('d-none')
}
const alertContadorOk = () =>{
    alertContador.classList.remove('d-none')
}
/* crear el evento */
const alertContador = document.getElementById("alertContador")
function opcion1(){
    const contador = Number(document.querySelector("#numero").value)
    const paqueteFull = document.querySelector("#inlineCheckbox1")

    let paqueteGeneral = " "
    if(paqueteFull.checked == true){
        paqueteGeneral = "Full"
    }

    let precio = 0;
    precio = precio + (29000 * contador);
   alertContadorOk()
   alertContador.textContent = `Para ${contador} personas,el paquete ${paqueteGeneral} tendra un precio final de: ${precio} `
}
function opcion2(){
    const contador = Number(document.querySelector("#numero").value)
    const paquetePlus = document.querySelector("#inlineCheckbox2")
    let paqueteGeneral = " "
    if(paquetePlus.checked == true){
        paqueteGeneral = "Plus"
    }
   
    let precio = 0;
    precio = precio + (19000 * contador);
   alertContadorOk()
   alertContador.textContent = `Para ${contador} personas, el paquete ${paqueteGeneral} tendra un precio final de: ${precio} `
}
function opcion3(){
    const contador = Number(document.querySelector("#numero").value)
    const paqueteBasi = document.querySelector("#inlineCheckbox3")
    let paqueteGeneral = " "
    if(paqueteBasi.checked == true){
        paqueteGeneral = "Básico"
    }

    let precio = 0;
    precio = precio + (15000 * contador);
   alertContadorOk()
   alertContador.textContent = `Para ${contador} personas, el paquete ${paqueteGeneral} tendra un precio final de: ${precio} `
}


formularioReserva.addEventListener("submit", (e)=> {

    e.preventDefault();
    
    const contador = Number(document.querySelector("#numero").value)
    const paquete1 = document.querySelector("#inlineCheckbox1").checked
    const paquete2 = document.querySelector("#inlineCheckbox2").checked
    const paquete3 = document.querySelector("#inlineCheckbox3").checked


    respuesta.classList.add('d-none');
    let precio = 0;
    let paqueteGeneral = " "

    if (paquete1 == true){ 
        precio = precio + (29000 * contador);
        paqueteGeneral = "Full"
     } 
    
    if (paquete2 == true){
        precio =precio +(19000* contador);
        paqueteGeneral = "Plus"
         }
    if (paquete3 == true){
        precio = precio +(15000* contador);
        paqueteGeneral = "Básico"
         }

    mensajeExito()
    
    respuesta.textContent = `Gracias! ${nombre.value} reservaste el dia ${fecha.value},  ${contador} paquetes ${paqueteGeneral}, 
    Precio final: $ ${precio}.
    Nos vemos ${nombre.value}, para vivir una experiencia inolvidable`
})
