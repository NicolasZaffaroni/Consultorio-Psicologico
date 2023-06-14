

//DATOS INPUT USUARIO 
document.getElementById("confirmar").addEventListener("click", () => {

    const nombre = document.getElementById("name").value;

    const apellido = document.getElementById("apellido").value;

    
    const  date = document.getElementById("date").value;

    const  horario = document.getElementById("horario").value;

    const  sesion = document.getElementById("sesion").value;

    const  email = document.getElementById("email").value;


//GUARDAR FORMULARIO 
    let formulariosGuardados = localStorage.getItem("formularios");

//COMPROBAR SI HAY FORMULARIOS GUARDADOS CON OPERADOR TERNARIO Y CARGAR EN UN ARRAY 
    let formularios = formulariosGuardados ? JSON.parse(formulariosGuardados):[];

// SUBIRLO AL LOCAL STORAGE
let formularioNuevo = {
            id : formularios.length + 1,
            nombre: nombre,
            apellido: apellido,
            date: date,
            horario: horario,
            sesion:sesion,
            email: email
            };
    
// PUSH A UN ARRAY 

formularios.push(formularioNuevo);

localStorage.setItem("formularios", JSON.stringify(formularios));
    localStorage.setItem("formularioNuevo", JSON.stringify(formularioNuevo));
    
    if(document.getElementById("sesion").value=="Presencial"||"Online"){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su turno fue confirmado',
            showConfirmButton: false,
            timer: 5000,
            
        })
        setInterval("location.reload()",3000);};
        //AGREGAR PROMESA DE TIEMPO PARA QUE SE RECARGE 5 SEGUNDOS DESPUES Y SE PUEDA VER EL MENSAJE
        



//COMPROBAR SI TODOS LOS FORMULARIOS ESTAN CARGADOS CORRECTAMENTE EN ARRAY
console.log(formularios);

});    





















// idea crear lista con funcion para que si elige dia y hora al pero es dificil, arrancar por online o presencial 



//comandos  alt+1=||    fn+{=`` &&(y) ||(o) 5>4--mayor  5<6---menor  != (diferente)
//var definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//let definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.

//const definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable, el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

//metodos()entre parentesis 
//propiedades . punto
