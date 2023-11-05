//Función solicita y valida el nombre
let validarNombre = () => {
    let nombre = prompt("Por favor ingresar su nombre");
    nombre = nombre.trim();
    
    while (nombre === ""){
        alert("Nombre no ingresado");
        nombre = prompt("Por favor ingresar su nombre");
        nombre = nombre.trim();
    } 
    return nombre;
};

//Función solicita y valida la edad
let validarEdad = () => {
    let edad = parseInt(prompt("Por favor ingresar su edad"));

    while (isNaN(edad)){
        alert("Edad no ingresada");
        edad = parseInt(prompt("Por favor ingresar su edad"));
    } 
    return edad;
};

//Función con 3 Valor Ingresado por el cliente, "id" elemento HTML donde agregar el texto y mensaje.
let agregarTexto = (datoCliente, idElemento, mensaje)=>{
    let elemento = document.getElementById(idElemento);
    elemento.innerHTML += mensaje+datoCliente;
}

//Llamando a las funciones
let nombre = validarNombre();
let edad = validarEdad();
//
agregarTexto(nombre,"login","Bienvenido/a ");
agregarTexto(edad,"mensaje", "No hay mejor edad para vivir que los ");