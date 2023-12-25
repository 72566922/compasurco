document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);


//declaración de variables 
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");



function iniciarSesion() {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display= "block";
    caja_trasera_register.style.opacity ="1";
    caja_trasera_login.style.opacity ="0";
}

function register() {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display= "none";
    caja_trasera_register.style.opacity ="0";
    caja_trasera_login.style.opacity ="1";
}

document.addEventListener('DOMContentLoaded', function() {
    const formularioInicioSesion = document.querySelector('.formulario__login');

    formularioInicioSesion.addEventListener('submit', async function(event) {
        event.preventDefault();
        const correoElectronico = formularioInicioSesion.querySelector('input[name="usuario"]').value;
        const contrasena = formularioInicioSesion.querySelector('input[name="password"]').value;

        if (correoElectronico.trim() === '') {
            alert('Por favor, ingrese su correo electrónico');
            return;
        }

        if (contrasena.trim() === '') {
            alert('Por favor, ingrese su contraseña');
            return;
        }

        

        try {
            const response = await fetch(`http://localhost:5000/api/usuarioOK/?usuario=${correoElectronico}&contrasenia=${contrasena}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }

            const responseData = await response.json();
            alert('Inicio de sesión exitoso');
            formularioInicioSesion.reset();
            console.log('Bienvenido', responseData);

            // Realizar acciones adicionales después de iniciar sesión (redirección, actualización de UI, etc.)
        } catch (error) {
            alert('Usuario no encontrado');
            formularioInicioSesion.reset();
            console.error('Error al enviar la solicitud:', error.message);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById('formularioRegistro');

    formularioRegistro.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombreCompleto = formularioRegistro.querySelector('input[name="nombre"]').value;
        const correoElectronico = formularioRegistro.querySelector('input[name="email"]').value;
        const usuario = formularioRegistro.querySelector('input[name="usuario"]').value;
        const contrasena = formularioRegistro.querySelector('input[name="password"]').value;

        // Construir el cuerpo de la solicitud
        const requestBody = {
            usuario: usuario,
            contrasenia: contrasena,
            correo: correoElectronico,
            nombres: nombreCompleto
        };
 
        // Validar campos del formulario
        if (nombreCompleto.trim() === '' || correoElectronico.trim() === '' || usuario.trim() === '' || contrasena.trim() === '') {
            alert('Por favor, complete todos los campos del formulario');
            return;
        }

        // Alerta de registro exitoso (podrías considerar mostrar un mensaje más informativo o redirigir al usuario)
        alert('Datos validos');
        formularioRegistro.reset();
        try {
            // Enviar solicitud POST al servidor
            const response = await fetch('http://localhost:5000/api/usua', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            // Manejar la respuesta del servidor
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
            console.log('Datos ingresados:', requestBody)

            alert('Registro exitoso');
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    });
});

