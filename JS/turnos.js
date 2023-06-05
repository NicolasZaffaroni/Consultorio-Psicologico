
//BOTONES PARA CONSULTAR Y ELIMINAR TURNO
let botonConsulta = document.getElementById("botonConsulta");
let botonElimina = document.getElementById("botonElimina");
//BOTON CONSULTA CONSULTA  SI SE ENCUENTRA POR EL VALOR NOMBRE 
botonConsulta.addEventListener("click",() =>{
    let consultaTurno = document.getElementById("name").value;
    let turnoPactado = localStorage.getItem("formulario");
// SI SE ENCUENTRA SE PASA EL DATO JSON A ARRAY
    if(turnoPactado){
    let formulario = JSOn.parse(turnoPactado); 
    console.log(formulario);}

//CON EL JSON YA HECHO ARRAY SE CREA UN ELEMENTO Y SE MUESTRA EL TURNO CONSULTADO
    else if (consultaTurno===formulario){
        let contenedorMensaje= document.getElementById("contenedorMensaje")

    let div = document.createElement("div");
    div.innerHTML = `
    <h2 class="titulo">Estimad@ ${formulario.nombre}</h2>
    <li class ="mensaje">Su turno es el dia :${formulario.date}</li>
    <li class ="mensaje">En la Modalidad: ${formulario.sesion}</li>
    <li class ="mensaje">En el horario ${formulario.horario}</li>
    `
    contenedorMensaje.append(div)} 

//BOTON PARA ELIMINAR EL LOCALSTORAGE
    botonElimina.addEventListener("click",() =>{
        localStorage.clear();
        alert("turno eliminado");
        location.reload();
    });

    
    });


