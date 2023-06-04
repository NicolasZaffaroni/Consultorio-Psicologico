

let botonConsulta = document.getElementById("botonConsulta");

botonConsulta.addEventListener("click",() =>{
    let consultaTurno = document.getElementById("nombre").value;
    let turnoPactado = localStorage.getItem("formulario");

    if(turnoPactado){
    let formulario = JSOn.parse(turnoPactado);  }


    else if (consultaTurno[formulario]){
        let contenedorMensaje= document.getElementById("contenedorMensaje")

    let div = document.createElement("div");
    div.innerHTML = `
    <h2 class="titulo">Estimad@ ${formulario.nombre}</h2>
    <li class ="mensaje">Su turno es el dia :${formulario.turno}</li>
    <li class ="mensaje">En la Modalidad: ${formulario.tipoSesion}</li>
    <li class ="mensaje">En el horario ${formulario.horario}</li>
    `
    contenedorMensaje.appendChild(div)} 
    location.reload();
    });

