

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
        let contenedorCancelar = document.getElementById("contenedorCancelar");
        
    
        let divCancelar = document.createElement("divCancelar");
        divCancelar.innerHTML = `
        <label for="cancelar">Cancele su turno !</label>
        <input type="submit" id="botonElimina" class="input" value="Cancelar">
        `;
        contenedorCancelar.append(divCancelar);
        let botonElimina = document.getElementById("botonElimina");
        setInterval("location.reload()",10000);
//BOTON PARA REMOVER ITEM Y MOSTRAR UN MENSAJE 

        botonElimina.addEventListener("click", () => {
            consultaTurno = document.getElementById("apellido")?.value;
            formularios = [];
            turnoPactado = localStorage.getItem("formularios");
            if(turnoPactado){
                formularios =  JSON.parse(turnoPactado);
                console.log("entramos2");}
                turnoEncontrado =  formularios.findIndex((turno)=>turno.apellido ===consultaTurno);
            if (turnoEncontrado !==-1){
                Swal.fire({
                    title: 'Estas seguro que, quiere cancelar tu turno ?',
                    text: "Si el turno, es menos de 24hs, se solicitara el abono del mismo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, quiero cancelarlo!',
                    
                }).then((result) => {
                    if (result.isConfirmed) {
                    formularios.splice(turnoEncontrado, 1);
                    console.log("ELIMINADO",formularios);
                    localStorage.setItem("formularios", JSON.stringify(formularios))
                    Swal.fire(
                        'Cancelado!',
                        'Esperamos poder volver a brindarle, otro turno, en el futuro!.',
                        'success',
                        
                        
                    )
                    setInterval("location.reload()",2000);
                    }
                })
                console.log(formularios);
                
                ;
                }});

    if(turnoEncontrado){
            fetch("../JS/pacientes.json")
        .then(response => response.json())
        .then((pacientes)=>{botonConsulta.addEventListener("click",() =>{
            let consultaTurno = document.getElementById("apellido")?.value;
            let paciente = pacientes.find(paciente =>paciente.apellido===consultaTurno);
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
            setInterval("location.reload()",10000)
    
} )
});
    }
//ELSE POR SI NO SE ENCUENTRA EL TURNO 
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No está cargado ese turno, enviamos un mensaje, en nuestra seccion de contacto y  a la brevedad lo solucionaremos!',
            footer: '<a  class="elseTurno" href="./sesion.html">Solicita tu turno nuevamente!</a>'
        })
        
        setInterval("location.reload()",3000);}//AGREGAR PROMESA PARA QUE SE RECARGUE POST 10 SEGUNDOS.
    
    });

    

//BUSCA TURNO EN JSON CON PROMESA 


