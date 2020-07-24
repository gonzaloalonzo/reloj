
let idTiempo;
let bandera;

detieneReloj();
despliegaFecha();
despliegaHora();

function detieneReloj(){
    if(bandera) clearTimeout(idTiempo);
    bandera = false;
}
function despliegaFecha(){
    let hoy = new Date();
    let miFecha = ""+hoy.getDate()+"/";
    miFecha += ( hoy.getMonth()+1)+"/";
    miFecha += hoy.getFullYear()+"";
    document.reloj.fecha.value = miFecha;
}