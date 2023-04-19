


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




let numero_mayor=parseInt(prompt("Ingrese su edad "))
if (numero_mayor <18 && numero_mayor >14 ){
    alert("SOS MENOR DE EDAD, PERO MEDIO BOLUDON");
}else if (numero_mayor >1718){
    alert("YA SOS MAYOR ");
}
else if (numero_mayor <14){
    alert("SOS UN BEBE");
}else{
    alert("INGRESA TU EDAD CAPO");
}
