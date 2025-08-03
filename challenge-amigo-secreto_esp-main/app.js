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

    //#3. Si el nombre es válido, lo agregamos al arreglo usando .push()
    listaDeAmigos.push(nombreAmigo);

    //#4. Limpiar el campo de entrada para que el usuario pueda escribir otro nombre
    input.value = "";

    // Llamamos a la función que muestra los amigos en la lista HTML - separamos un poco  la lógica
    mostrarListaDeAmigos();

    //y lo mostramos visualmente en la lista HTML
    //const listaHTML = document.getElementById("listaAmigos"); //cambiamos a mostrarListaDeAmigos()

    // Creamos un nuevo elemento <li> para mostrar el nombre en pantalla
    //const nuevoItem = document.createElement("li");//cambiamos a mostrarListaDeAmigos()
    //nuevoItem.textContent = nombreAmigo;

    // Agregamos ese <li> a la lista existente en el HTML
    //listaHTML.appendChild(nuevoItem);//cambiamos a mostrarListaDeAmigos()

    //#4. Limpiar el campo de entrada para que el usuario pueda escribir otro nombre
    //input.value = "";
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

