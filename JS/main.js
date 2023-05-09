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



class Paciente{
    constructor(informacion_paciente){
    this.nombre = informacion_paciente.nombre;
    this.apellido = informacion_paciente.apellido;
    this.modalidad = informacion_paciente.modalidad ;
    this.dia = informacion_paciente.dia;
    this.horario = informacion_paciente.horario ;
}
;}
const nombre = prompt("Indique su nombre ?");

const apellido = prompt ("Cual es su apellido ?");

let dia = prompt(" Espacio Fibra a tiende de Lunes a Viernes indique que día será más conveniente para usted");
const dias  = ["Lunes",'Martes','Miercoles','Jueves','Viernes'];

const horario =  parseInt(prompt(" Espacio fibra atiende de 15hs a 20hs indique que franja horaria en términos de una hora le convendría, ej-- 19 "));
const modalidad = prompt("Que tipo de sesión le convendría espaxio fibra pose dos modalidades Online y presencial");


const confirmar = prompt (`  Desea confirmar la cita para el ${dia} en horario ${horario} y modalidad ${modalidad}, a nombre de ${nombre} ${apellido} ? `);




function calendario(){
    while( dias.indexOf(dia)=== -1){
        return dia = prompt(" Los dias sabado y domingo Espacio Fibra permanecera, cerrado, por favor vuelva a ingresar un dia de lunes a viernes");}       
    while( horario <15 || horario >20 ){
        alert("El horario disponible para seleccionar una cita es de 15 a 20hs");}
    if (modalidad !== "online"  ||  modalidad !== "presencial") {
            return alert("Lo sentimos, solo ofrecemos dos modalidades: online o presencial.");}
    else if(confirmar === "no" ){
        return alert("Entendido. Si desea solicitar una cita personalizada, por favor contáctenos a través del formulario de contacto. ¡Gracias por considerarnos!");}
    else{ 
            alert( ` Gracias, por confiar en Espacio Fibra, ${nombre} ${apellido}, el dia seleccionado es ${dia}, en el horario ${horario} y la modalidad sera ${modalidad},`)
            ;}

}



const paciente1 = new Paciente(nombre, apellido, dia,horario,modalidad);







calendario();







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
