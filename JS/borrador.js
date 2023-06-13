


/*
/*
alert("Adivinamos cuantos años Tenes!");
let año_de_nacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
alert(   2023 - año_de_nacimiento +"ES TU EDAD"); */

const { Console } = require("console");

/*let edad = 18;
if(edad >=18){
    console.log("eres mayor");
}else{
    console.log("eres menor");
}*/


/* let nombre = prompt("Ingrese su nombre ");

if(nombre===""){
    alert("Ingrese de nuevo su nombre");
}else{
    let mensaje = "Hola"+ nombre;
    alert(mensaje)
} */


/*let respuesta = prompt("Terminaste la tarea");

if(respuesta.toLocaleLowerCase()=== "Si"){
alert("Si podes salir");
}else{
alert("No, primero tenes que terminar");
}*/

/* let Saliste = parseInt(prompt("Como saliste en la carrera"));


if(Saliste < 2){
    alert("Felicitaciones Saliste primero, sos el rey");

}else if( Saliste <3){
    alert("Felicitacione saliste segundo, estas en el podio, sos bueno pero no tanto");

}else if ( Saliste <4){
    alert("Felicitacione saliste tercero estas en el podio, sos menos malo que los demas");

}else if (Saliste >3){
    alert("No clasificaste, al podio");
}else{
    alert("No figuras como participante, la proxima anotate");
} */

/*let plato_principal= prompt("ingrese que quiere de plato principal ");
let guarnicion = prompt("Ingrese que quiere de guarnicion");


if(plato_principal != "" && guarnicion !=""){
//let combo ="Perfecto elegiste el combo de" + plato_principal + "con" + guarnicion

; alert(combo);}else{
    alert("No esta dentro del menu y hay que abonarlo diferente")
}*/




/*
IDENTIFICADOR DE EDAD QUE CREE APLICANDO &&

let numero_mayor=parseInt(prompt("Ingrese su edad "))
if (numero_mayor <18 && numero_mayor >14 ){
    alert("SOS MENOR DE EDAD, PERO MEDIO BOLUDON");
}else if (numero_mayor >17){
    alert("YA SOS MAYOR ");
}
else if (numero_mayor <14){
    alert("SOS UN BEBE");
}else{
    alert("INGRESA TU EDAD CAPO");
}*/



//comandos  alt+1=||    fn+{=``           
/*let numero= parseInt(prompt("Ingrese un numero"))
for(let i=1 ; i <=10; i++){
    let resultado = numero *i;
    alert(`${numero} * ${i} = ${resultado}`);
}*/



/*CALCULADORA QUE CREE

let numero_1 =parseInt(prompt("Ingrese un numero"))
let numero_2 =parseInt(prompt("Ingrese un numero"))
let operacion = parseInt( prompt("Ingrese la operacion que quiera hacer"))
let suma = parseInt(numero_1 +  numero_2)
let resta = parseInt(numero_1 - numero_2)
let divicion = parseInt(numero_1 / numero_2)
let multiplicacion = parseInt(numero_1 * numero_2)
if(suma === numero_1 +  numero_2){
    alert(`${suma}RESULTADO`);
}else if ( resta=== numero_1 - numero_2){
    alert(`${resta}RESULTADO`);
}else if ( divicion=== numero_1 / numero_2){
    alert(`${divicion}RESULTADO`); }
else if ( multiplicacion=== numero_1 * numero_2){
    alert(`${multiplicacion} RESULTADO`); }
else {
    alert("DATOS INCORRETOS POR FAVOR VUELVA A CAGARLOS ")
};*/
//comandos  alt+1=||    fn+{=`` &&(y) ||(o)



/*FOR
EJ --SE LE ASIGNA UN TURNO A UN NOMBRE
for( let turno =1; turno <=7 ; turno++){
    let nombre = prompt("Ingrese su nombre");
    alert(`Su turno es el-->${turno} Nombre del paciente-->${nombre}`)
}alert("NO HAY MAS TURNOS")*/



/*BREAK
for(let i= 0 ; i <10; i++){
    if( i === 5){
        break;
    }
    console.log(i);
}

console.log("SE TERMINO EL PROCESO")
*/
//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor 

/*CONTINUE SE SALTA EL 6 O EL PARAMETRO
for(let i= 0 ; i <10; i++){
    
    if( i === 6){
        continue;
    }
    console.log(i);
} */


/* BUCLE POR NUMERO PAR O IMPAR 
PAR % 0
IMPAR % 1
for(let i= 0 ; i < 20; i++){

    
    if( i % 2 === 1){
        continue;
    }

    console.log(i);
}
*/

//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente) 

/*
BUCLE WHILE SE REPITE SIEMPRE QUE LA CONDICION SEA VERDADERA 
let usuario = prompt("Ingrese el usuario");

while(usuario !="camila"){
    alert("Usuario Incorrecto")
    usuario=prompt("Ingrese el usuario");
}alert("BIENVENIDA CAMILA!!")*/



//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente) 
//BUCLE WHILE SE REPITE SIEMPRE QUE LA CONDICION SEA VERDADERA



/*let CHISTE = prompt("QUE TOMA LA VACA?");

while(CHISTE !="AGUA"){
    alert("MALLL")
    alert(`LA VACA NO TOMA ${CHISTE}`)
    CHISTE=prompt("QUE TOMA LA VACA?");
}alert("JAJAJAJA SI TOMA AGUA ES UNA VACA!!")*/



/*
SWITCH
let plato="pescado"
switch(plato){
    case "helado":
        console.log("Postre");
        break;
    case "croquetas":
        console.log("Entrada");
        break;
    case "pastas":
        console.log("Plato principal");
        break;
    default:
        console.log("eso no esta en el menu")
}
*/


//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
/*
SWITCH + WHILE
let plato= prompt("Que desea comer?");

while(plato !="la cuenta") {
    switch(plato){
        case "postre":
            alert("LAS OPCIONES DE POSTRE SON HELADO Y FLAN");
            break;

        case "entrada":
            alert("LAS OPCIONES DE ENTRADA SON PICADA Y QUESO");
            break;

        case "plato":
            alert("LAS OPCIONES DE PRINCIPAL SON FIDEOS O CARNE CON PAPAS");
            break;

        default:
            alert(" SI TERMINO PIDA LA CUENTA ");
}
plato= prompt("Que desea comer ");

}*/



/*  CALCULADORA CON SWITCH Y WHILE
EJ DE CLASE 
let operacion= prompt("Que operacion quiere hacer? indique la misma con los simbolos +,-,/,*, y para finalizar #");

let resultado = 0

while(operacion !="#")
{
    let numero_1 = Number(prompt("Ingrese un numero"));

    let numero_2= Number(prompt("Ingrese un numero"));

    switch(operacion){
    case "+":
        resultado =numero_1 + numero_2;
            break;
    case "-":
        resultado =numero_1 - numero_2;
            break;

    case "/":
        resultado =numero_1 / numero_2;
            break;

    case "*":
        resultado =numero_1 * numero_2;
        break

    default:
        alert("INGRESE NUEVAMENTE SUS NUMEROS, PORFAVOR ")
}
    alert(`El resultado de la operacion es ${resultado}`);

    operacion= prompt("Que operacion quiere hacer? indique la misma con los simbolos +,-,/,*, y para finalizar #");

} */



/*EJERCICIO DE CLASE 
SE DECLARA UNA VARIABLE Y SE LE SUMA SIEMPRE i HASTA QUE PASE 10 VECES 


let numero= parseInt(prompt("Ingrese un numero"))
for(let i=1 ; i <=10; i++){
    let resultado = numero +i;
    alert(`${numero} +${i} = ${resultado}`)
}*/





//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
//var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

//const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

/*


ESTRUCTURA DE FUNCION
function Pedido(){---------definir funcion
    let comida =prompt("Que desean para comer?");------- CODIGO 
    let beber = prompt("Que desean para beber?");
    let orden_final=`Los comensales desean para comer ${comida} y para beber ${beber}`
    alert(orden_final);
}

Pedido(); ---------- EJECUTAR FUNCION
*/

/*FUNCION CON PARAMETROS 
function desayuno (fruta,infusion){
    let pedido =`El pedido de fruta es ${fruta} y para beber${infusion}`;
    alert(pedido);
} 
let fruta = prompt("Que fruta desea ?");
let infusion = prompt("Que infusion le apetece?");

desayuno(fruta,infusion);*/


//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)

/*EJERCICIOS DE CLASE
function verdadero_falso(numero) {
    if(numero % 2 === 1 )
        return alert("false")
    else if (numero %2 ===0) {
        return alert("True")
    } else {
        return alert("Vuelva a ingresar un numero");
    }
} ;
let numero = parseInt(prompt("ingrese un numero"));


verdadero_falso(numero);
*/




/* EJERCICIOS DE CLASE
function Datos(edad,nombre){
    let dato2=`Su edad es  ${edad} y su nombre ${nombre}`;
    return alert(dato2);
} 
let edad = prompt("Que edad tiene ?");
let nombre = prompt("Como es su nombre?");

Datos(edad,nombre); */


/*FUNCION ARROW 
POST FLECHA RETORNA IMPLICITAMENTE SIN TENER QUE USAR EL RETURN  Y LOS {}

const suma = (a, b)=>{
    return a + b;
};

console.log(suma(20,20));*/



/*
Ejercicios primer desafio !
let consulta_p= 400
    let consulta_o = 300
    let consulta_pj = 600
function Consultorio(Consultorio_Fibra,consulta_p, consulta_o, consulta_pj){
    if (  Consultorio_Fibra  === 1){ 
        return alert(`Usted, selecciono, la opcion Consulta presencial, que tiene un costo ${consulta_p}, y consta de 40 min de sesion`);}
    else if (Consultorio_Fibra === 2){ 
        return alert(`Usted, selecciono, la opcion Consulta online, que tiene un costo de ${consulta_o}, y consta de 40 min de sesion`);}
    else if (Consultorio_Fibra  === 3){ 
        return alert(`Usted, selecciono, la opcion Consulta para parejas, que tiene un costo de${consulta_pj}, y consta de 50 min de sesion`);}
    else{ return alert("Esa opcion no esta disponible por favor seleccione unas de las mencionadas");
    }
};


let Consultorio_Fibra = parseInt(prompt("Bienvenido a Espacio Fibra, Ingrese que opcion quiere para su consulta terapeutica, el centro consta de 3 modalidades, Presencial, Online, Parejas. Indique la que desea con 1,2,3 para conocer las respectivas condiciones y valores de las mismas" ));


Consultorio(Consultorio_Fibra,consulta_p, consulta_o, consulta_pj);





let Taller= prompt("Que Taller le interesa cononcer informacion? indique la misma con las letras A,Ñ,E, y para finalizar #");

let resultado = 0

while(Taller !="#")
{

    switch(Taller){
    case "A":
        alert("Usted selecciono informacion sobre el taller de adultos, se trata de trabajar las herramientas sociales, a ser mas expresivo y trabajar las dinamicas en grupo. ");
            break;
    case "Ñ":
        alert("El talle de para niños, cosnta de hacer foco en la inteligencia emocional, trabajar las frustaciones y entender mejor nuestros sentimientos");
            break;

    case "E":
        alert("El taller para empresas, se trata de generar lazos interpesonales, para sacar el mayor rendimiento a un grupo de trabajo, mejorar la comunicacion, limar asperezas y poder generar el mejor ambiente laboral");
            break;



    default:
        alert("ingrese de nuevo alguna de las 3 silabas para solicitar informacion , recuerde que A---ADULTOS,Ñ------NIÑOS,E---EMPRESAS ")
}

    Taller= prompt("Que Taller le interesa cononcer informacion? indique la misma con las letras A,Ñ,E, y para finalizar #"); }*/


// objetos es igual a los diccionarios en python 
/* const Sesion_online = { 
    duracion : "45min", 
    tipo : "online",
    valor:450,
    info :"Se trata de una sesion online, que dura 45 min y tiene costo de 450"
};

const Sesion_presencial = { 
    duracion : "45min", 
    tipo : "presencial",
    valor:500,
    info :"Se trata de una sesion presencial, que dura 45 min y tiene costo de 500"
};
// Maneras de acceder a los diccionarios ------manera mas usada por .
console.log(Sesion_presencial.valor);
console.log(Sesion_online["valor"]);





function mostrar_sesiones(Sesiones ,Sesion_online,Sesion_presencial){
    if(Sesiones  === 1){
        return alert(`Usted solicito ${Sesion_online}`);
    }
    else if( Sesiones  === 2){
        return alert(`Usted solicito ${Sesion_presencial}`);
    }
    else {
        return alert("Esa opcion no es valida");
    }
}


let Sesiones = parseInt(prompt("Indique, que sesion le interesa para conocer su informacion, Sesion presencial-----2, Sesion Online------1"));




mostrar_sesiones(Sesiones ,Sesion_online,Sesion_presencial ); */





// Se puede borrar el paciente y que quede el valor y la clave con el mismo nombre  ej nombre =  nombre, pero me gusta que sea mas especifico 
/*function Paciente(NombrePaciente, EdadPaciente, SesionPaciente,ProblemaPaciente){
    this.NombrePaciente = NombrePaciente ;
    this.EdadPaciente = EdadPaciente ;
    this.SesionPaciente = SesionPaciente ;
    this.ProblemaPaciente = ProblemaPaciente ;
} 
let Nombre_Paciente = prompt("Ingrese su nombre ");
let Edad_Paciente = prompt ("Ingrese su edad ");
let Sesion_Paciente= prompt ("Indique que sesion prefiere Presencial u Online");
let Problema_Paciente = prompt("Describa brevemente su problema")
const Paciente1 = new Paciente(Nombre_Paciente, Edad_Paciente , Sesion_Paciente ,Problema_Paciente);*/



/* class Persona{
    Paciente(informacion_paciente){
    this.nombre = informacion_paciente.nombre ;
    this.edad = informacion_paciente.edad ;
    this.sesionpaciente = informacion_paciente.sesion;
    this.problemapaciente = informacion_paciente.paciente ;}
} 
const nombre_paciente = prompt("Ingrese su nombre ");
const edad_paciente = prompt ("Ingrese su edad ");
const sesion_paciente= prompt ("Indique que sesion prefiere Presencial u Online");
const problema_paciente = prompt("Describa brevemente su problema");

const paciente1 = new Paciente(nombre_paciente, edad_paciente , sesion_paciente ,problema_paciente);


alert(`${Paciente1}`);








const dia = prompt(" Espacio Fibra a tiende de Lunes a Viernes indique que día será más conveniente para usted");

const horario =  parseInt(prompt(" Espacio fibra atiende de 15hs a 20hs indique que franja horaria en términos de una hora le convendría, ej-- 19 "));

const  modalidad = prompt("Que tipo de sesión le convendría espaxio fibra pose dos modalidades Online y presencial");

const confirmar = prompt (`  Desea confirmar la cita para el ${dia} en horario ${horario} y modalidad ${modalidad} ? `);


function calendario (dia , horario , modalidad,confirmar){
    modalidad.toUpperCase();
    dia.toUpperCase();
    if ( dia ==="sabado"|| dia === "domingo"){ 
        return alert("Los fines de semana Espacio Fibra permanece cerrado");}       
    else if ( horario <15 || horario >20 ){
        return alert("El horario disponible para seleccionar una cita es de 15 a 20hs");}
    else if ( modalidad !== "online" && modalidad !== "presencial"){
        return alert("Disculpas, solo ofrecemos dos modalidades: online o presencial.");
    }
    else if(confirmar === "no" ){
        return alert("Si precisa algún tipo de cita personalizada vaya al apartado contacto y un asesor se pondrá en contacto con usted para una atención mas ");}
    else{
            alert( `El dia seleccionado es ${dia}, en el horario ${horario} y la modalidad sera ${modalidad}`);}

}
calendario (dia,horario,modalidad,confirmar); */
//ARRAYS ES LO MISMO QUE LISTA EN PYTHON

const lugares = ["primero", "segundo" , "tercero"];
/*lugares.push("cuarto");
lugares.unshift("soy el nuevo primero");
lugares.pop();//sacar el ultimo elemento del array
lugares.shift();//sacar el primer elemento de un array
lugares.splice(1/*lugar donde me paro 0 cantidad de elementos que quiero eliminar  en este caso 2);*/
console.log(lugares);



/*
tipo_sesion (Pacientes_Online.join(modalidad),Pacientes_Presencial.join(modalidad));{
    if (modalidad ==!"online"){
        return alert("A seleccionado la modalidad online");
    }
    
    else if (modalidad ==!"presencial"){
        return alert("A seleccionado la modalidad presencial");
    }

    else {
        return alert("Disculpas, solo ofrecemos dos modalidades: online o presencial.");
    }
};
*/

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


let boton = document.getElementById("boton");

const respuesta = () => {
    console.log("click");
};

let evento = document.createElement("button");
boton.addEventListener(evento,subir);

const subir = () =>{
    document.body.subir = 0;
    document.documentElement.subir = 0;

}



//MENU CON OPCIONES 

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
    turno = prompt("Espacio Fibra, se encuentra cerrado los dias Sabado y Domingo por favor ingrese, un dia de Lunes a Viernes");
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



// Cancelar turno 
function  cancelacionTurno() {
    let apellido = prompt('Ingrese su apellido, por favor ');
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    indice = pacientes.indexOf(paciente); 
    pacientes.splice(indice, 1); 
    if (paciente){
        let div = document.createElement("div");
        div.innerHTML=`
        <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
        <li class="mensaje">Su turno del dia: ${paciente.turno}</li>
        <li class="mensaje">En la Modalidad: ${paciente.tipoSesion}</li>
        <li class="mensaje">En el horario: ${paciente.horario}</li>
        <li class="mensaje">Fue cancelado,esperamos poder volver a brindarle nuevamente un turno.</li>
        ` 
        contenedorMensaje.append(div);
        };
    console.log(pacientes);
}


//Función para modificar   un turno:

function modificacionTurno() {
    let apellido = prompt('Ingrese su apellido, por favor ');
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    indice = pacientes.indexOf(paciente); 
    let nombre = prompt("Ingrese su nombre?");
    apellido = prompt("Ingrese su apellido?");
    let tipoSesion= prompt("Espacio Fibra, posee dos modalidades de sesion, Presencial y Online, ingrese cual desea");
while ( tipoSesion !== "presencial" && tipoSesion!=="online"(tipoSesion)){
    tipoSesion = prompt("Modalidad no valida. Por favor ingresar presencial u online. ");
}
let  diasDescanso = ['sabado','domingo'];
let turno = prompt("Espacio Fibra, esta abierto de cara al publico de Lunes a Viernes, ingrese el dia que desea");
while( diasDescanso.includes(turno)){
    turno = prompt("Espacio Fibra, se encuentra cerrado los dias Sabado y Domingo por favor ingrese, un dia de Lunes a Viernes ");
}

let horario = parseInt(prompt("Espacio Fibra Tiene una disponibilidad horario de 15 a 21 hs, ingrese el horario que prefiere EJ---19"));
while(horario <15 || horario >20){
    horario = parseInt(prompt("El horario ingresado no es valido, por favor ingresar un horario entre las 15 y las 21 horas por favor")); }

    let pacienteModificado = new Paciente(nombre, apellido, tipoSesion, turno,horario);
    pacientes.splice(indice, 1, pacienteModificado); 
    console.log(pacientes);
    if (pacienteModificado){
        let contenedorMensaje= document.getElementById("contenedorMensaje")

        let div = document.createElement("div");
        div.innerHTML= `
        <h2 class="titulo">Estimad@ ${pacienteModificado.nombre}</h2>
        <li class ="mensaje">Su nuevo turno es el  dia : ${pacienteModificado.turno}</li>
        <li class ="mensaje">En la Modalidad: ${pacienteModificado.tipoSesion}</li>
        <li class ="mensaje">En en el nuevo horario de ${pacienteModificado.horario}</li>
        `;
        contenedorMensaje.append(div)
        };
}


  //Función para consultar un turno:

function consultaTurno() {
    let apellido = prompt('Ingrese su apellido, por favor ');
    let paciente = pacientes.find((paciente) => paciente.apellido === apellido); 
    if (paciente){
        let contenedorMensaje= document.getElementById("contenedorMensaje")

        let div = document.createElement("div");
        div.innerHTML = `
        <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
        <li class ="mensaje">Su turno es el dia :${paciente.turno}</li>
        <li class ="mensaje">En la Modalidad: ${paciente.tipoSesion}</li>
        <li class ="mensaje">En el horario ${paciente.horario}</li>
        `
        contenedorMensaje.append(div)};
}

  //Función para salir del programa:

function finalizar() {
    alert('Gracias por Confiar en Espacio Fibra');
}






//MENU 

let opcion = menu();
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


//BOTON VOLVER A INICIO CON EVENT
/*let boton = document.getElementById("boton");
const subir = () =>{
    document.documentElement.scrollTop = 0;
}
boton.addEventListener("click",subir);*/



let formulario = document.getElementById("formulario");


formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    let inputs = e.target.children;
    let = nombre = inputs.localStorage.getItem("nombre");
    let = apellido = inputs.localStorage.getItem("apellido");
    let = tipoSesion = inputs.localStorage.getItem("tipoSesion");
    let = turno = inputs.localStorage.getItem("turno");
    let = horario= inputs.localStorage.getItem("horario");
    console.log(inputs)
});







/*
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
console.log(pacientes); */




/*
let pacienteGala ={
    nombre :"sofia",
    apellido:"gala",
    tipoSesion :"presencial",
    turno:"miercoles",
    horario :16,
} ;

let pacienteDuro ={
    nombre :"arturo",
    apellido:"duro",
    tipoSesion :"online",
    turno:"jueves",
    horario :17,
};
let pacienteQuito ={
    nombre :"esteban",
    apellido:"quito",
    tipoSesion :"presencial",
    turno:"lunes",
    horario :20,
};

//SUBO PACIENTES A MI ARRAY 
const pacientes =[];
pacientes.push(pacienteGala);
pacientes.push(pacienteDuro);
pacientes.push(pacienteQuito);


//AHORA SUBO CADA OBJETO(PACIENTE) AL LOCALSTORAGE CONVERTIDO EN DATO JSON
localStorage.setItem("pacienteGala", JSON.stringify(pacienteGala));
localStorage.setItem("pacienteDuro", JSON.stringify(pacienteDuro));
localStorage.setItem("pacienteQuito", JSON.stringify(pacienteQuito));
*//*
const turnos =[{
    nombre :"esteban",
    apellido:"quito",
    tipoSesion :"presencial",
    turno:"lunes",
    horario :20,
},
{
    nombre :"sofia",
    apellido:"gala",
    tipoSesion :"presencial",
    turno:"miercoles",
    horario :16,
},
{
    nombre :"arturo",
    apellido:"duro",
    tipoSesion :"online",
    turno:"jueves",
    horario :17,
}
];

//SUMO MI ARRAY DE PACIENTES AL LOCALSTORAGE CONVETIDO EN DATO JSON 
let consultasStorage = localStorage.setItem("pacientes", JSON.stringify(turnos));




let botonModifica = document.getElementById("modificar");
let botonElimina = document.getElementById("botonElimina");
let pacientes = [];
let pacientesStorage = localStorage.getItem("pacientes")

if (pacientesStorage){
    pacientes = JSON.parse(pacientesStorage);
}
else{ 

let div = document.createElement("div");
div.innerHTML = "No hay turnos actualmente, la agenda esta libre"
document.body.append(div)
};



pacientes.forEach(paciente =>{
    let contenedorMensaje= document.getElementById("contenedorMensaje")

    let div = document.createElement("div");
    div.innerHTML = `
    <h2 class="titulo">Estimad@ ${paciente.nombre}</h2>
    <li class ="mensaje">Su turno es el dia :${paciente.turno}</li>
    <li class ="mensaje">En la Modalidad: ${paciente.tipoSesion}</li>
    <li class ="mensaje">En el horario ${paciente.horario}</li>
    `
    contenedorMensaje.append(div)});



    botonElimina.addEventListener("click",() =>{
    localStorage.clear();
    alert("turnos eliminados");
    location.reload();
});




*/

















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

*//*
if (turnoEncontrado) {
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
  
    let contenedorCancelar = document.getElementById("contenedorCancelar");
    let botonElimina = document.getElementById("botonElimina");
  
    let divCancelar = document.createElement("div");
    divCancelar.innerHTML = `
      <label for="cancelar">Cancele su turno !</label>
      <input type="button" id="botonElimina" class="input" value="Cancelar">
    `;
    contenedorCancelar.append(divCancelar);
  
    botonElimina.addEventListener("click", () => {
      localStorage.removeItem(turnoEncontrado);
      let contenedorTurnocancelado = document.getElementById("contenedorTurnocancelado");
      let div = document.createElement("div");
      div.innerHTML = `<p> Turno Cancelado !</p>`;
      contenedorTurnocancelado.append(div);
    });
  } else {
    let contenedorTurnoninexistente = document.getElementById("contenedorTurno");
    let div = document.createElement("div");
    div.innerHTML = `
      <p>No está cargado ese turno, ve a nuestra sección de sesión y solicita el tuyo o envía tu mensaje por la sección de contacto y a la brevedad lo solucionaremos!</p>
    `;
    contenedorTurnoninexistente.append(div);
  }
  */







/*let formulario = document.getElementById("formulario");

const nuevoTurno = (nombre , apellido, date, horario, sesion, email) =>{
let formulariosGuardados = localStorage.getItem("formularios");
let formularios = formulariosGuardados ? JSON.parse(formulariosGuardados):[];


let formularioNuevo = {
    id: formularios.length + 1,
    nombre: nombre,
    apellido: apellido,
    date: date,
    horario: horario,
    sesion:sesion,
    email: email
    };


    formularios.push(formularioNuevo);

};

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputs = e.target.children;
    nuevoTurno(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value)

}
)*/

const { DateTime } = luxon;



// Establece la fecha mínima y máxima permitida
const today = DateTime.now().toISODate(); // Obtiene la fecha actual en formato ISO (YYYY-MM-DD)
date.setAttribute('min', today);

// Función para deshabilitar los días no laborables (sábados y domingos)
function disableNonWorkingDays(event) {
const selectedDate = DateTime.fromISO(date.value);
const dayOfWeek = selectedDate.weekday;

if (dayOfWeek >= 6) {
    event.target.value = ''; // Limpia el valor si se selecciona un día no laborable
    Swal.fire('Por favor, selecciona un dia de Lunes a Viernes');
}
else {
    date.setCustomValidity('');
}
}
// Agrega el evento 'change' al campo de entrada de fecha
date.addEventListener('input', disableNonWorkingDays);


   Swal.fire({
                    title: 'Estas seguro que, quiere cancelar tu turno ?',
                    text: "Si el turno, es menos de 24hs, se solicitara el abono del mismo!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, quiero cancelarlo!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        localStorage.removeItem("formulario")
                    Swal.fire(
                        'Cancelado!',
                        'Esperamos poder volver a brindarle, otro turno, en el futuro!.',
                        'success'
                    )
                    }