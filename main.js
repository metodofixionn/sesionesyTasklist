const sesiones = []

alert ("Es muy importante organizarse cada dia para lograr ser mas producivos. Selecciona las sesiones de tu día. \n\n TIPOS DE SESIONES: \n Trabajo, cada sesión: 60 min \n Estudio, cada sesión: 60 min  \n Deporte, cada sesión: 30 min \n Hogar, cada sesión: 30 min \n Metas, cada sesión: 30 min")

let tipoSesion = [];
let sesion ="";
let tiempo = 0;
let agregarNuevaSesion = false;
let cantidad = 0;
let total = 0;

do{
    sesion = prompt("¿Tu nueva sesión es de: Trabajo, Estudio, Deporte, Hogar, Metas?", "Ej: trabajo").toUpperCase();
    cantidad = parseInt(prompt("Cuantas sesiones querés agregar?",'Ej: 1, 2, 3'));

    switch(sesion){
        case "TRABAJO":
            tiempo = 60;
            break;
        case "ESTUDIO":
            tiempo = 60;
            break;
        case "DEPORTE":
            tiempo = 30;
            break;
        case "METAS":
            tiempo = 30;
            break;
        case "HOGAR":
            tiempo = 30;    
        default :
            alert("Por favor elija una opción válida para agregar una sesión");
            sesion = 0;
            cantidad = 0;

    }
    agregarNuevaSesion = confirm("¿Querés agregar más sesiones?");
    tipoSesion.push({sesion,cantidad,tiempo});

        
}while(agregarNuevaSesion);

let verCarga = prompt("Querés ver el total de tus sesiones de hoy?")
if(verCarga == "si"){
    alert("Es un buen metodo organizarte cada día, segui así");
    tipoSesion.forEach ((totalSesiones)=>{
        alert(`Sesión seleccionada de ${totalSesiones.sesion},Minutos dedicados: ${totalSesiones.cantidad*totalSesiones.tiempo}, cantidad de sesiones: ${totalSesiones.cantidad}`)
    })
}
else{
    alert('Ahora si tenes tu dia organizado')}

    console.log(sesiones); 
    sesiones.push ({tipoSesion});

const totalSesiones = tipoSesion.reduce((acc,todo) => acc + todo.tiempo * todo.cantidad, 0);
console.log (`segun la organización del dia de hoy, tenes un total de: ${totalSesiones} minutos`);