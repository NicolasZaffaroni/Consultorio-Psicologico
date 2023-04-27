
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

    Taller= prompt("Que Taller le interesa cononcer informacion? indique la misma con las letras A,Ñ,E, y para finalizar #"); }
