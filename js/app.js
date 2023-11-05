//Función solicita y valida el nombre
let validarNombre = () => {
    let nombre = prompt("Por favor ingresar su nombre");
    nombre = nombre.trim();
    let regExp = /\d/; //La expresión regular /\d/ verifica si una cadena contiene al menos un dígito (0-9).
    let tieneNumeros = regExp.test(nombre);
    while (nombre === "" || tieneNumeros ){
        if(nombre === ""){ alert("Nombre no ingresado");}else{ alert("Nombre ingresado con numeros");}
        nombre = prompt("Por favor ingresar su nombre correctamente y sin numeros");
        nombre = nombre.trim();
        tieneNumeros = regExp.test(nombre);
    } 
    return nombre;
};

//Función solicita y valida la edad
let validarEdad = () => {
    let edad = parseInt(prompt("Por favor ingresar su edad"));

    while (isNaN(edad) || edad < 18){
        if(edad < 18) {alert("Debe ser mayor a 18 años");} else {alert("Edad no ingresada correctamente");}
        edad = parseInt(prompt('Por favor ingresar su edad "solo numeros" y debe ser mayor de 18 años'));
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