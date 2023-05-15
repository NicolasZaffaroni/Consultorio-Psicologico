



//CREAR PACIENTE 
class Paciente{
    constructor(nombre,apellido,tipoSesion,turno,horario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.tipoSesion = tipoSesion ;
    this.turno = turno;
    this.horario = horario ;
}
;}

//Pacientes existentes (OBJETOS)
const pacienteZaragoza = new Paciente( "jose","zaragoza", "online","lunes",15);
const pacienteCatamarca = new Paciente( "carlos","catamarca", "presencial", "martes",15);
const pacienteGala = new Paciente("sofia", "gala", "presencial","miercoles",16);
const pacienteDuro = new Paciente("arturo", "duro","online", "jueves",17);
const pacienteQuito = new Paciente( "esteban","quito", "presencial","lunes",20);
const pacienteLoca = new Paciente("juana", "loca", "online", "martes",17);
const pacienteRodriguez = new Paciente("nicolas", "rodriguez","presencial","jueves",15);
const pacienteCambaceres = new Paciente("miguel", "cambaceres","presencial","miercoles",20);
const pacienteRioja = new Paciente("emma", "rioja", "online","lunes",17);
const pacienteCamilin = new Paciente("camila", "camilin", "online", "viernes",16);




//Lista de Pacientes Vacia (ARRAYS)
const pacientes =[];

//Subida de pacientes a la lista (OBJETOS, SUMADOS AL ARRAY MEDIANTE METODO PUSH)
pacientes.push(pacienteZaragoza);
pacientes.push(pacienteCatamarca);
pacientes.push(pacienteGala);
pacientes.push(pacienteDuro);
pacientes.push(pacienteQuito);
pacientes.push(pacienteLoca);
pacientes.push(pacienteRodriguez);
pacientes.push(pacienteCambaceres);
pacientes.push(pacienteRioja);
pacientes.push(pacienteCamilin);


//CHEQUEO DE QUE LOS OBJETOS ESTEN BIEN 
console.log(pacientes);







function menu() {
    alert('Bienvenido a Espacio Fibra ');
    let opcion = parseInt(
    prompt(
        'Ingrese una opción: 1)Nuevo turno   2) Cancelacion de turno  3) Modificación de turno  4) Consulta su turno  5) Salir'
    )
    );
    return opcion;
}


// FUNCION PARA NUEVO PACIENTE(OBJETO )
function nuevoTurno(){
let nombre = prompt("Ingrese su nombre?");
let apellido = prompt("Ingrese su apellido?");
let tipoSesion= prompt("Espacio Fibra, posee dos modalidades de sesion, Presencial y Online, ingrese cual desea");
while ( tipoSesion !== "presencial" && tipoSesion!=="online"){
    tipoSesion = prompt("Modalidad no valida. Por favor ingresar presencial u online. ");
}
let  diasDescanso = ['sabado','domingo'];
let turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");
while( diasDescanso.includes(turno)){
    turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");
}

let horario = parseInt(prompt("Espacio Fibra Tiene una disponibilidad horario de 15 a 21 hs, ingrese el horario que prefiere EJ---19"));
while(horario <15 || horario >20){
    horario = parseInt(prompt("El horario ingresado no es valido, por favor ingresar un horario entre las 15 y las 21 horas por favor "));
    
}
let confirmar = prompt (`  Desea confirmar la cita para el ${turno} en horario ${horario} y modalidad ${tipoSesion}, a nombre de ${nombre} ${apellido} ? `);
    if(confirmar === "no" ){
        return alert("Entendido. Si desea solicitar una cita personalizada, por favor contáctenos a través del formulario de contacto. ¡Gracias por considerarnos!");}
    else{ 
            alert( ` Gracias, por confiar en Espacio Fibra, ${nombre} ${apellido}, el dia seleccionado es ${turno}, en el horario ${horario} y la modalidad sera ${tipoSesion},`)
            ;}

let paciente = new Paciente(nombre,apellido,tipoSesion,turno,horario);
pacientes.push(paciente);
console.log(pacientes);
}




function  cancelacionTurno() {
    apellido = prompt('Ingrese su apellido, por favor ');
    while ( pacientes.includes(apellido)){
        apellido = prompt('Ese apellido, no se encuentra en nuesta base de datos. Ingrese su apellido, nuevamente por favor ');
    }
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    indice = pacientes.indexOf(paciente); 
    pacientes.splice(indice, 1); 
    if (paciente){
        let mensaje = `
        Estimad@ ${paciente.nombre}
        Su turno del dia :${paciente.turno} 
        En la Modalidad: ${paciente.tipoSesion}
        En el horario ${paciente.horario}
        Fue cancelado,
        esperamos poder volver a brindarle nuevamente un turno.
        `
        alert (mensaje)};
    console.log(pacientes);
}


//Función para modificar   un turno:

function modificacionTurno() {
    apellido = prompt('Ingrese su apellido, por favor ');
    while ( pacientes.includes(apellido)){
        apellido = prompt('Ese apellido, no se encuentra en nuesta base de datos. Ingrese su apellido, nuevamente por favor ');
    }
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    indice = pacientes.indexOf(paciente); 
    let nombre = prompt("Ingrese su nombre?");
    let apellido = prompt("Ingrese su apellido?");
    let tipoSesion= prompt("Espacio Fibra, posee dos modalidades de sesion, Presencial y Online, ingrese cual desea");
while ( tipoSesion !== "presencial" && tipoSesion!=="online"(tipoSesion)){
    tipoSesion = prompt("Modalidad no valida. Por favor ingresar presencial u online. ");
}
let  diasDescanso = ['sabado','domingo'];
let turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");
while( diasDescanso.includes(turno)){
    turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");
}

let horario = parseInt(prompt("Espacio Fibra Tiene una disponibilidad horario de 15 a 21 hs, ingrese el horario que prefiere EJ---19"));
while(horario <15 || horario >20){
    horario = parseInt(prompt("El horario ingresado no es valido, por favor ingresar un horario entre las 15 y las 21 horas por favor")); }

    let pacienteModificado = new Paciente(nombre, apellido, tipoSesion, turno,horario);
    pacientes.splice(indice, 1, pacienteModificado); 
    console.log(pacientes);
    if (pacienteModificado){
        let mensaje = `
        Estimad@ ${pacienteModificado.nombre}
        Su nuevo turno es el  dia :${pacienteModificado.turno}
        En la Modalidad: ${pacienteModificado.tipoSesion}
        En en el nuevo horario de ${pacienteModificado.horario}
        `
        alert (mensaje)};
}


  //Función para consultar un turno:

function consultaTurno() {
    apellido = prompt('Ingrese su apellido, por favor ');
    while ( pacientes.includes(apellido)){
        apellido = prompt('Ese apellido, no se encuentra en nuesta base de datos. Ingrese su apellido, nuevamente por favor ');
    }
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    if (paciente){
        let mensaje = `
        Estimad@ ${paciente.nombre}
        Su turno es el dia :${paciente.turno}
        En la Modalidad: ${paciente.tipoSesion}
        En el horario ${paciente.horario}
        `
        alert (mensaje)};
}

  //Función para salir del programa:

function finalizar() {
    alert('Gracias por Confiar en Espacio Fibra');
}








let opcion = menu();
while(menu !=5) { 
switch (opcion) {
case 1:
    nuevoTurno();
    break;
case 2:
    cancelacionTurno();
    break;
case 3:
    modificacionTurno();
    break;
case 4:
    consultaTurno();
    break;
case 5:
    finalizar();
    break;
default:
    alert('Opción incorrecta');
    break;
}
opcion = menu();
}






















//forEach para recorrer los array 
//pacientes.forEach(item =>{
//    console.log(item) 
//} );




//find encuentra el primer elemento que cumpla la condición
/*
let modalidad= prompt("ingrese la modalidad de su turno");
const encontrado = pacientes.find(turno => turno.modalidad === modalidad);

if (encontrado) {
let mensaje = `
    Nombre: ${encontrado.nombre}
    Apellido: ${encontrado.apellido}
    Dia: ${encontrado.dia}
    Modalidad: ${encontrado.modalidad}
    Horario: ${encontrado.horario}
`;

alert(mensaje);
} else {
alert("Producto no encontrado");
}


*/

//filter encuentra los elementos que cumplan la condicion dada
/* EN ESTE EJEMPLO SOLO MUESTRA LOS TURNOS CON LAS MODALIDAD QUE ES INGRESADA POR EL USUARIO
let modalidad= prompt("ingrese la modalidad de su turno");
const encontrado = pacientes.filter((turno) => turno.modalidad.includes(modalidad) );

encontrado.forEach ((turno) => {
let mensaje = `
    Nombre: ${turno.nombre}
    Apellido: ${turno.apellido}
    Dia: ${turno.dia}
    Modalidad: ${turno.modalidad}
    Horario: ${turno.horario}
`;

    alert(mensaje);
} );

*/







// idea crear lista con funcion para que si elige dia y hora al pero es dificil, arrancar por online o presencial 



//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
//var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

//const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

//metodos()entre parentesis 
//propiedades . punto
