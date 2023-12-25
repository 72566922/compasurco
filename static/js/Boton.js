//accion hacer click 
var buttonEnviar = document.getElementById('btnEnviar');  

//variables para mostrar datos
var nombreCaptado= document.getElementById('nombreCaptado');
var apellidoCaptado= document.getElementById('apellidoCaptado');
var correoCaptado= document.getElementById('correoCaptado');
var dniCaptado= document.getElementById('documentoCaptado');

//variables de formulario
var nombres=document.getElementById('nombres');
var apellido=document.getElementById('apellidos');
var correo=document.getElementById('correo');
var dni=document.getElementById('dni');

//mostrar datos ocultos
var mostrarInfo =document.getElementById('mostrarInfo');


buttonEnviar.addEventListener('click',captarDatosFormulario);
function captarDatosFormulario() {
    nombreCaptado.innerHTML=nombres.value ; 
    apellidoCaptado.innerHTML=apellido.value ; 
    correoCaptado.innerHTML=correo.value ; 
    dniCaptado.innerHTML=dni.value ; 
    mostrarInfo.style.display="block";
}








