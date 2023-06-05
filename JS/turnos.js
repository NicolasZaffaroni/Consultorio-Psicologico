
//BOTONES PARA CONSULTAR Y ELIMINAR TURNO
let botonConsulta = document.getElementById("botonConsulta");
let botonElimina = document.getElementById("botonElimina");
//BOTON CONSULTA CONSULTA  SI SE ENCUENTRA POR EL VALOR NOMBRE 
botonConsulta.addEventListener("click",() =>{
    let consultaTurno = document.getElementById("apellido")?.value;
    let formularios = [];
    let turnoPactado = localStorage.getItem("formularios");
// SI SE ENCUENTRA SE PASA EL DATO JSON A ARRAY
    if(turnoPactado){
    formularios =  JSON.parse(turnoPactado);
    console.log("entramos1");}

//CON EL JSON YA HECHO ARRAY SE CREA UN ELEMENTO Y SE MUESTRA EL TURNO CONSULTADO
    if (formularios.apellido === consultaTurno){
        console.log("entramos2");
        formularios.forEach(paciente =>{
            let contenedorMensaje= document.getElementById("contenedorMensaje")
        
            let div = document.createElement("div");
            div.innerHTML = `
            <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
            <li class ="mensaje">Su turno es el dia :${paciente.date}</li>
            <li class ="mensaje">En la Modalidad: ${paciente.sesion}</li>
            <li class ="mensaje">En el horario ${paciente.horario}</li>
            <li class ="mensaje">Confirmado en la direccion de email ${paciente.email}</li>
            `
            contenedorMensaje.append(div)
            } ) };

//BOTON PARA ELIMINAR EL LOCALSTORAGE
    botonElimina.addEventListener("click",() =>{
        localStorage.clear();
        alert("turno eliminado");
        location.reload();} ) }) ;

    



