/*class Terapia{
    constructor(informacion_sesion){
    this.id = informacion_sesion.id;
    this.tiposesion = informacion_sesion.tiposesion ;
    this.duracion= informacion_sesion.duracion ;
    this.valor= informacion_sesion.valor;
    this.problematicatratar= informacion_sesion.problematicatratar;
    
}
modelo(){alert( `Esta es el tipo de sesion ${this.tiposesion},que precisa el paciente ${this.id} la duracion ${this.duracion}, el valor ${this.valor}, y la problematica a tratar ${this.problematicatratar}`);}
}
    

const tipo_sesion = prompt("Que tipo de sesion selecciono el paciente? ");
const duracion = prompt ("Que Tiempo estimado, tiene la sesion ");
const valor= prompt ("Que valor tiene la terapia");
const problematicatratar = prompt("Que problematica tiene el paciente");
const id = prompt("Asignar ID");

const Sesion1 = new Terapia(tipo_sesion, duracion , valor, problematicatratar,id);




alert(Sesion1);
*/



/*class Paciente{
    constructor(informacion_paciente){
    this.nombre = informacion_paciente.nombre;
    this.apellido = informacion_paciente.apellido;
    this.modalidad = informacion_paciente.modalidad ;
    this.dia = informacion_paciente.dia;
    this.horario = informacion_paciente.horario ;
}
;}
const paciente1 = new Paciente(nombre, apellido, dia,horario,modalidad);
*/





const nombre = prompt("Ingrese su nombre?");


const apellido = prompt("Ingrese su apellido?");

let tipoSesion= prompt("Espacio Fibra, posee dos modalidades de sesion, Presencial y Online, ingrese cual desea");
while ( tipoSesion !== "presencial" && tipoSesion!=="online "){
    tipoSesion = prompt("Modalidad no valida. Por favor ingresar presencial u online. ").toLocaleLowerCase();
}
const turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");

let horario = parseInt(prompt("Espacio Fibra Tiene una disponibilidad horario de 15 a 21 hs, ingrese el horario que prefiere EJ---19"));
while(horario <15 || horario >20){
    horario = parseInt(prompt("El horario ingresado no es valido, por favor ingresar un horario entre las 15 y las 21 horas por favor "));
}
const confirmar = prompt (`  Desea confirmar la cita para el ${turno} en horario ${horario} y modalidad ${tipoSesion}, a nombre de ${nombre} ${apellido} ? `);

const diasHabiles = ['lunes','martes','miercoles','jueves','viernes'];


function cita (){
    if(tipoSesion ===  "presencial" || " online"){
        return alert(`La modalidad seleccionada es ${tipoSesion}`);
    }
    else if ( horario <21 || horario >15 ){
        return alert(`El horario elegido es ${horario}`);
    }

    else if ( diasHabiles.includes(turno.toLocaleLowerCase())){
        return alert("El dia seleccionado, no es valido. Espacio Fibra solo esta abierto de Lunes a Viernes")
    }

    else{ 
        alert( ` Gracias, por confiar en Espacio Fibra, ${nombre} ${apellido}, el dia seleccionado es ${turno}, en el horario ${horario} y la modalidad sera ${tipoSesion},`);}

};

cita ();




























/*const pacientes =[

    {nombre: "jose", apellido:"zaragoza", dia:"lunes", horario:"15hs", modalidad:"online"},
    {nombre: "carlos", apellido:"catamarca", dia:"martes", horario:"14hs", modalidad:"presencial"},
    {nombre: "sofia", apellido:"gala", dia:"miercoles", horario:"16hs", modalidad:"presencial"},
    {nombre: "arturo", apellido:"duro", dia:"jueves", horario:"19hs", modalidad:"online"},
    {nombre: "esteban", apellido:"quito", dia:"lunes", horario:"20hs", modalidad:"presencial"},
    {nombre: "camila", apellido:"camilin", dia:"viernes", horario:"16hs", modalidad:"online"},
    {nombre: "juana", apellido:"loca", dia:"martes", horario:"17hs", modalidad:"online"},
    {nombre: "nicolas", apellido:"rodriguez", dia:"jueves", horario:"15hs", modalidad:"presencial"},
    {nombre: "miguel", apellido:"cambaceres", dia:"miercoles", horario:"20hs", modalidad:"presencial"},
    {nombre: "emma", apellido:"rioja", dia:"lunes", horario:"17hs", modalidad:"online"},
];



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
