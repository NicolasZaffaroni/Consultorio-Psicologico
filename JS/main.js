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
    this.turnoconfirmado= false ;
    
}
calendario (){
    if ( dia ==="sabado"|| dia === "domingo"){ 
        return alert("Los fines de semana Espacio Fibra permanece cerrado");}       
    else if ( horario <15 || horario >20 ){
        return alert("El horario disponible para seleccionar una cita es de 15 a 20hs");}
    else if ( modalidad === "online" && modalidad === "presencial"){
        return modalidad => 
            {let index1 = pacientes_online.push(modalidad);
            let  index2 = pacientes_presencial.push(modalidad);
            if (index1==="online" ){
                return alert("A seleccionado la modalidad online");
            }
            
            else if (index2==="presencial"){
                return alert("A seleccionado la modalidad presencial");
            }
        
            else {
                return alert("Disculpas, solo ofrecemos dos modalidades: online o presencial.");
            }
        }
    }
    else if(confirmar === "no" ){
        return alert("Entendido. Si desea solicitar una cita personalizada, por favor contáctenos a través del formulario de contacto. ¡Gracias por considerarnos!");}
    else{   this.turnoconfirmado=true;
            alert( ` Gracias, por confiar en Espacio Fibra, ${nombre}, el dia seleccionado es ${dia}, en el horario ${horario} y la modalidad sera ${modalidad},`)
            ;}
};}
const nombre = prompt("Indique su nombre ?");

const apellido = prompt ("Cual es su apellido ?");

const dia = prompt(" Espacio Fibra a tiende de Lunes a Viernes indique que día será más conveniente para usted");

const horario =  parseInt(prompt(" Espacio fibra atiende de 15hs a 20hs indique que franja horaria en términos de una hora le convendría, ej-- 19 "));
const modalidad = prompt("Que tipo de sesión le convendría espaxio fibra pose dos modalidades Online y presencial");


const confirmar = prompt (`  Desea confirmar la cita para el ${dia} en horario ${horario} y modalidad ${modalidad}, a nombre de ${nombre} ${apellido} ? `);


const paciente1 = new Paciente(nombre, apellido, dia,horario,modalidad, confirmar);







paciente1.calendario();
alert(`${nombre},${apellido}${dia}${horario}${modalidad}`)


const pacientes_presencial = [];
const pacientes_online = []
















// idea crear lista con funcion para que si elige dia y hora al pero es dificil, arrancar por online o presencial 



//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
//var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

//const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

//metodos()entre parentesis 
//propiedades . punto
