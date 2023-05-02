



/*
alert("Adivinamos cuantos años Tenes!");
let año_de_nacimiento = parseInt(prompt("Ingresa tu año de nacimiento"));
alert(   2023 - año_de_nacimiento +"ES TU EDAD"); */

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



/*class Persona{
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



class Terapia{
    sesion(informacion_sesion){
    this.tiposesion = informacion_sesion.tiposesion ;
    this.duracion= informacion_sesion.duracion ;
    this.valor= informacion_sesion.valor;
    this.problematicatratar= informacion_sesion.problematicatratar;}
} 


const tipo_sesion = prompt("Que tipo de sesion selecciono el paciente? ");
const duracion = prompt ("Que Tiempo estimado, tiene la sesion ");
const valor= prompt ("Que valor tiene la terapia");
const problematicatratar = prompt("Que problematica tiene el paciente");


const sesion1 = new sesion(tipo_sesion, duracion , valor, problematicatratar);*/





const dia = prompt(" Espacio Fibra a tiende de Lunes a Viernes indique que día será más conveniente para usted");

const horario =  parseInt(prompt(" Espacio fibra atiende de 15hs a 20hs indique que franja horaria en términos de una hora le convendría, ej-- 19 "));

const  modalidad = prompt("Que tipo de sesión le convendría espaxio fibra pose dos modalidades Online y presencial");

const confirmar = prompt (`  Desea confirmar la cita para el ${dia} en horario ${horario} y modalidad ${modalidad} ? `)


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
calendario (dia,horario,modalidad,confirmar);

