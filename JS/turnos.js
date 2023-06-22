
//BOTON PARA CONSULTAR 
botonConsulta.addEventListener("click", () => {
    let consultaTurno = document.getElementById("apellido")?.value;
    let formularios = [];
    let turnoPactado = localStorage.getItem("formularios");

    if (turnoPactado) {
    formularios = JSON.parse(turnoPactado);
    console.log("entramos1");
    }

    let turnoEncontrado = formularios.some((turno) => turno.apellido === consultaTurno);
//SOLO MUESTRA EL TURNO QUE CUMPLA CON LAS CONDICIONES
    if (turnoEncontrado) {
        let paciente = formularios.find(paciente =>paciente.apellido===consultaTurno);
        let contenedorMensaje = document.getElementById("contenedorMensaje");
    


//MUESTRA EL TURNO
    let div = document.createElement("div");
    div.innerHTML = `
        <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
        <li class="mensaje">Su turno es el día: ${paciente.date}</li>
        <li class="mensaje">En la Modalidad: ${paciente.sesion}</li>
        <li class="mensaje">En el horario: ${paciente.horario}</li>
        <li class="mensaje">Confirmado en el ${paciente.email}</li>
    `;
    contenedorMensaje.append(div);

    let contenedorCancelar = document.getElementById("contenedorCancelar");
//BOTON PARA CANCELAR TURNO
    let divCancelar = document.createElement("divCancelar");
    divCancelar.innerHTML = `
        <label for="cancelar">Cancele su turno !</label>
        <input type="submit" id="botonElimina" class="btnContacto" value="Cancelar">
    `;
    contenedorCancelar.append(divCancelar);
    let botonElimina = document.getElementById("botonElimina");
    setInterval("location.reload()", 5000);
//SE ELIMINA EL TURNO DEL LOCALSTORAGE 
    botonElimina.addEventListener("click", () => {
        consultaTurno = document.getElementById("apellido")?.value;
            formularios = [];
            turnoPactado = localStorage.getItem("formularios");
            if(turnoPactado){
                formularios =  JSON.parse(turnoPactado);
                console.log("entramos2");}
                turnoEncontrado =  formularios.some((turno)=>turno.apellido ===consultaTurno);
                if (turnoEncontrado){
                    turnoEncontrado =  formularios.findIndex((turno)=>turno.apellido ===consultaTurno);
                if (turnoEncontrado !==-1){
                    Swal.fire({
                        title: 'Estas seguro que, quiere cancelar tu turno ?',
                        text: "Si el turno, es menos de 24hs, se solicitara el abono del mismo!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si, quiero cancelarlo!',}).then((result) =>{
                            if (result.isConfirmed) {
                            localStorage.removeItem("formulario");
                            formularios.splice(turnoEncontrado, 1);
                            console.log("ELIMINADO",formularios);
                            localStorage.setItem("formularios", JSON.stringify(formularios))
                            Swal.fire(
                                'Cancelado!',
                                'Esperamos poder volver a brindarle, otro turno, en el futuro!.',
                                'success',)
                                setInterval("location.reload()",3000)  }});// SE CIERRAN LOS IF PRA ELIMINAR TURNO DE LOCALSTORAGE
                        }else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'No está cargado ese turno, enviamos un mensaje, en nuestra seccion de contacto y  a la brevedad lo solucionaremos!',
                                footer: '<a href="./sesion.html">Solicita tu turno nuevamente!</a>'
                            })
                            setInterval("location.reload()",5000);}
                            }
                    });
    //MUESTRA EL TURNO EN "SERVIDOR" CARGADO PREVIAMENTE MEDIANTE UNA PROMESA
    } else {
    fetch("../JS/pacientes.json")
        .then((response) => response.json())
        .then((pacientes) => {
        let paciente = pacientes.find((paciente) => paciente.apellido === consultaTurno);
        if (paciente) {
            let contenedorMensaje = document.getElementById("contenedorMensaje");

            let div = document.createElement("div");
            div.innerHTML = `
            <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
            <li class="mensaje">Su turno es el día: ${paciente.date}</li>
            <li class="mensaje">En la Modalidad: ${paciente.sesion}</li>
            <li class="mensaje">En el horario: ${paciente.horario}</li>
            <li class="mensaje">Confirmado en el ${paciente.email}</li>
            `;
            contenedorMensaje.append(div);
            setInterval("location.reload()", 5000);
        } else {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No está cargado ese turno, enviamos un mensaje en nuestra seccion de contacto y a la brevedad lo solucionaremos!',
            footer: '<a  class="elseTurno" href="./sesion.html">Solicita tu turno nuevamente!</a>'
            });
            setInterval("location.reload()", 3000);
        }
        });
    }
    } )
;