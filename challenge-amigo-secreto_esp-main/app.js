// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.Aquí deberás desarrollar la lógica para resolver el problema.

// Creamos un arreglo vacío para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función que se ejecuta al hacer clic en el botón "Añadir"
function agregarAmigo() {
    //#1. Capturar el valor del campo de entrada usando su ID
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim(); // .trim() elimina espacios al principio y al final

    //#2. Validar la entrada: Si el campo está vacío, mostrar un mensaje y salir de la función
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detenemos la ejecución si no hay nombre válido
    }

    //#3. Si el nombre es válido, lo agregamos al arreglo usando .push()
    listaDeAmigos.push(nombreAmigo);

    //#3También lo mostramos visualmente en la lista HTML
    const listaHTML = document.getElementById("listaAmigos");

    // Creamos un nuevo elemento <li> para mostrar el nombre en pantalla
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombreAmigo;

    // Agregamos ese <li> a la lista existente en el HTML
    listaHTML.appendChild(nuevoItem);

    //#4. Limpiar el campo de entrada para que el usuario pueda escribir otro nombre
    input.value = "";
}

