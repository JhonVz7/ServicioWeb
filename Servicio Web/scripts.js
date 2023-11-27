function guardarUsuario() {
    const nuevoUsuario = document.getElementById("newUsername").value;
    const nuevaContraseña = document.getElementById("newPassword").value;

    // Almacenar datos en el almacenamiento local del navegador
    localStorage.setItem("username", nuevoUsuario);
    localStorage.setItem("password", nuevaContraseña);

    alert("¡Usuario registrado con éxito!");
}

function iniciarSesion() {
    const usuarioAlmacenado = localStorage.getItem("username");
    const contraseñaAlmacenada = localStorage.getItem("password");

    const usuarioIngresado = document.getElementById("username").value;
    const contraseñaIngresada = document.getElementById("password").value;

    if (usuarioIngresado === usuarioAlmacenado && contraseñaIngresada === contraseñaAlmacenada) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "welcome.html";
        return false; // Evitar el envío del formulario
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
        return false; // Evitar el envío del formulario
    }
}


function cerrarSesion() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "index.html";
}
