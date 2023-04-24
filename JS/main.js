


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








