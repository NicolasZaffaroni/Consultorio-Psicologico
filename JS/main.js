
//SUBIR FORMULARIO ONLINE
document.getElementById("confirmar").addEventListener("click", () => {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("apellido").value;
    let date = document.getElementById("date").value;
    let horario = document.getElementById("horario").value;
    let sesion = document.getElementById("sesion").value;
    let email = document.getElementById("email").value;

    // SUBIRLO AL LOCAL STORAGE
    let formulario = {
    nombre: nombre,
    apellido: apellido,
    date: date,
    horario: horario,
    sesion:sesion,
    email: email
    };

    localStorage.setItem("formulario", JSON.stringify(formulario));
    alert("Su turno fue confirmado");
    location.reload();
}); 


















// idea crear lista con funcion para que si elige dia y hora al pero es dificil, arrancar por online o presencial 



//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
//var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

//const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

//metodos()entre parentesis 
//propiedades . punto
