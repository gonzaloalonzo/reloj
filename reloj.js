
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

function despliegaHora(){
    let hoy = new Date();
    let hrs = hoy.getHours();
    let mins= hoy.getMinutes();
    let sec = hoy.getSeconds();

    var cadena = String((hrs>12)? hrs-12 : hrs);
    cadena += ((mins<10)? ":0" : ":")+mins;
    cadena += ((sec<10)? ":0" : ":")+sec;
    cadena += ((hrs>12)? " PM" : " AM");

     document.reloj.hora.value = cadena;

     idTiempo = setTimeout("despliegaHora()",1000);
     bandera = true;
}