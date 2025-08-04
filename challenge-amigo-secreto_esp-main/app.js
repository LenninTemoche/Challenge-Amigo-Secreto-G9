// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.Aquí deberás desarrollar la lógica para resolver el problema.

//#5 Creamos un arreglo vacío para almacenar los nombres de los amigos ingresados desde el input
let listaDeAmigos = [];

//Función que se ejecuta al hacer clic en el botón "Añadir" usando el atributo onclick en el index
function agregarAmigo() {
    //#1. Capturar el valor del campo de entrada usando su ID
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim(); // .trim() elimina espacios al principio y al final

    //#2. Validar la entrada: Si el campo está vacío, mostrar un mensaje y salir de la función
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detenemos la ejecución si no hay nombre válido
    }
    //Agregamos validaciones
    //#15 Validar si el nombre ya está en la lista (ignorando mayúsculas/minúsculas)
    const nombreRepetido = listaDeAmigos.some(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase());
    if (nombreRepetido) {
        alert("Este nombre ya fue agregado.");
        return;
    }
    //#16 Validar que el nombre contenga solo letras
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!soloLetras.test(nombreAmigo)) {
        alert("Por favor, ingrese solo texto.");
        return;
    }

    //#3. Si el nombre es válido, lo agregamos al arreglo usando .push()
    listaDeAmigos.push(nombreAmigo);

    //#4. Limpiar el campo de entrada para que el usuario pueda escribir otro nombre
    input.value = "";

    // Llamamos a la función que muestra los amigos en la lista HTML - separamos un poco  la lógica
    mostrarListaDeAmigos();
    
}

// Agregamos la nueva función: mostrarListaDeAmigos
// Esta función se encarga de mostrar todos los nombres en el HTML
function mostrarListaDeAmigos() {
    //#6: Obtenemos el elemento de la lista del HTML
    const listaHTML = document.getElementById("listaAmigos");

    //#7: Limpiamos la lista existente para evitar duplicados
    listaHTML.innerHTML = "";

    //#8: Recorremos el array de amigos usando un bucle for
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const nombre = listaDeAmigos[i];

        //#9: Creamos un nuevo <li> para cada nombre
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombre;

        // Lo agregamos a la lista en el HTML
        listaHTML.appendChild(nuevoItem);
    }
}

// Función para sortear amigo secreto
function sortearAmigo() {
    //#10: Validar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //11: Generar un índice aleatorio válido
    // Math.random() genera un número entre 0 y 1 (no incluye el 1)
    // Multiplicamos por la longitud del array y redondeamos hacia abajo con Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    //#12: Obtener el nombre en esa posición del array
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    //#13: Mostrar el resultado en la lista HTML de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} es tu amigo secreto </li>`;
}

//14 Función para reiniciar la lista de amigos y limpiar resultados
function reiniciarLista() {
    // Vaciar el array
    listaDeAmigos = [];

    // Limpiar la lista visual en el HTML
    document.getElementById("listaAmigos").innerHTML = "";

    // Limpiar el resultado del sorteo si existe
    document.getElementById("resultado").innerHTML = "";
}

//#17 Detectar si se presiona Enter en el campo de entrada
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // Ejecuta la misma función del botón
    }
});