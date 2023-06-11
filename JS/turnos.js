
//BOTON PARA CONSULTAR 
let botonConsulta = document.getElementById("botonConsulta");

//BOTON CONSULTA CONSULTA  SI SE ENCUENTRA POR EL VALOR NOMBRE 
botonConsulta.addEventListener("click",() =>{
    let consultaTurno = document.getElementById("apellido")?.value;
    let formularios = [];
    let turnoPactado = localStorage.getItem("formularios");
    

// SI SE ENCUENTRA SE PASA EL DATO JSON A ARRAY
    if(turnoPactado){
    formularios =  JSON.parse(turnoPactado);
    console.log("entramos1");}

let turnoEncontrado = formularios.some((turno)=>turno.apellido === consultaTurno)
//CON EL JSON YA HECHO ARRAY SE CREA UN ELEMENTO Y SE MUESTRA EL TURNO CONSULTADO
    if (turnoEncontrado) {
        let paciente = formularios.find(paciente =>paciente.apellido===consultaTurno);
        let contenedorMensaje = document.getElementById("contenedorMensaje");
    
        let div = document.createElement("div");
        div.innerHTML = `
        <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
        <li class="mensaje">Su turno es el dia: ${paciente.date}</li>
        <li class="mensaje">En la Modalidad: ${paciente.sesion}</li>
        <li class="mensaje">En el horario: ${paciente.horario}</li>
        <li class="mensaje">Confirmado en el ${paciente.email}</li>
        `;
        contenedorMensaje.append(div);
    
//CONTENEDOR CON BOTON PARA REMOVER ITEM 
        //let contenedorCancelar = document.getElementById("contenedorCancelar");
        let botonElimina = document.getElementById("botonElimina");
    
        /*let divCancelar = document.createElement("divCancelar");
        divCancelar.innerHTML = `
        <label for="cancelar">Cancele su turno !</label>
        <input type="button" id="botonElimina" class="input" value="Cancelar">
        `;
        contenedorCancelar.append(divCancelar);*/
//BOTON PARA REMOVER ITEM Y MOSTRAR UN MENSAJE 

        botonElimina.addEventListener("click", () => {
            consultaTurno = document.getElementById("apellido")?.value;
            formularios = [];
            turnoPactado = localStorage.getItem("formularios");
            if(turnoPactado){
                formularios =  JSON.parse(turnoPactado);
                console.log("entramos2");}
                turnoEncontrado =  formularios.some((turno)=>turno.apellido ===consultaTurno);
            if (turnoEncontrado){
                let pacienteCancelado = formularios.find(pacienteCancelado =>pacienteCancelado.apellido===consultaTurno);
                console.log("entramos3");
                localStorage.removeItem("formularios");
                let contenedorTurnocancelado = document.getElementById("contenedorTurnocancelado");
                let div = document.createElement("div");
                div.innerHTML = `<h2 class="titulo">Estimad@ ${pacienteCancelado.nombre}</h2>
                <li class="mensaje">Su turno en el dia: ${pacienteCancelado.date}</li>
                <li class="mensaje">En la Modalidad: ${pacienteCancelado.sesion}</li>
                <li class="mensaje">En el horario: ${pacienteCancelado.horario}</li>
                <li class="mensaje">Confirmado en el ${pacienteCancelado.email}</li>
                <li class="mensaje">Fue cancelado conn exito, esperamos poder brindarle otro turno o si tiene otro tipo de consulta, hacerla mediante la seccion contacto y en la brevedad, nos comunicaremos con usted!</li>`;
                contenedorTurnocancelado.append(div)
                console.log(formularios);
                ;
                }});
//ELSE POR SI NO SE ENCUENTRA EL TURNO 
    } else {
        let contenedorTurnoninexistente = document.getElementById("contenedorTurnoinexistente");
        let divTurnoinexistente = document.createElement("div");
        divTurnoinexistente.innerHTML = `
        <p>No está cargado ese turno, ve a nuestra sección de sesión y solicita el tuyo o envía tu mensaje por la sección de contacto y a la brevedad lo solucionaremos!</p>
        `;
        contenedorTurnoninexistente.append(divTurnoinexistente)
        location.reload();}//AGREGAR PROMESA PARA QUE SE RECARGUE POST 10 SEGUNDOS.
    
    });





