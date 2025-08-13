// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.Aquí deberás desarrollar la lógica para resolver el problema.

//#5 Creamos un arreglo vacío para almacenar los nombres de los amigos ingresados desde el input
let listaDeAmigos = [];
//#18 Agregamos array auxiliar para continuar con validaciones
let listaNoSorteados = []; // Lista para los que faltan por sortear, se eliminarán los ya sorteados.

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
    //#19 también agregamos los nombres a la lista del arreglo auxiliar
    listaNoSorteados.push(nombreAmigo);

    //#4. Limpiar el campo de entrada para que el usuario pueda escribir otro nombre
    input.value = "";
    //Limpiamos mensaje de resultados de forma segura 
    const resultado = document.getElementById("resultado");
    resultado.replaceChildren();  // elimina todos los hijos <li>
    //y mostramos un mensaje neutro ...
    const mensaje = document.createElement("li");
    mensaje.textContent = ".....";
    resultado.appendChild(mensaje);

    // Llamamos a la función que muestra los amigos en la lista HTML - separamos un poco  la lógica
    //mostrará la lista de nombres ingresados
    mostrarListaDeAmigos();
    
}

// Agregamos la nueva función: mostrarListaDeAmigos
// Esta función se encarga de mostrar todos los nombres en el HTML
function mostrarListaDeAmigos() {
    //#6: Obtenemos el elemento de la lista del HTML
    const listaHTML = document.getElementById("listaAmigos");

    //#7: Limpiamos la lista existente para evitar duplicados
    //listaHTML.innerHTML = "";
    //Limpiamos la lista de manera más segura
    listaHTML.replaceChildren();

    //#8: Recorremos el array de amigos usando un bucle for
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const nombre = listaDeAmigos[i];

        //#9: Creamos un nuevo <li> para cada nombre
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = nombre;
        // Lo agregamos a la lista en el HTML
        listaHTML.appendChild(nuevoItem);

        //#20 Verificamos si este nombre ya fue sorteado
        if (!listaNoSorteados.includes(nombre)) {
            nuevoItem.classList.add("sorteado"); // le aplica estilo tachado con el css
        }
    }
}

//agregamos más validaciones con el array auxiliar
// Función para sortear amigo secreto
function sortearAmigo() {
    //Eliminaremos los innerHTML para hacerlo mas seguro
    const resultado = document.getElementById("resultado");
    resultado.replaceChildren(); // Limpiar de forma segura
    //#10: Validar lista vacía en los dos array
    if ((listaDeAmigos.length === 0) || (listaNoSorteados.length === 0)) {
        alert("No hay nombres de amigos para sortear.");
        const mensaje = document.createElement("li");
        mensaje.textContent = "Ingrese nombres a la lista para Iniciar sorteo!";
        resultado.appendChild(mensaje);
        return;
    };
    //#21 Validar cuando hay 1 nombre en las listas
    if ((listaDeAmigos.length === 1) || (listaNoSorteados.length === 1)) {
        alert("Sólo hay 1 nombre en la lista para sortear.");
        const mensaje = document.createElement("li");
        mensaje.textContent = "Ingrese más nombres a la lista para Iniciar sorteo!";
        resultado.appendChild(mensaje);
        return;
    };
    //#22 Validar cuando hay 2 nombres en las listas
    if ((listaDeAmigos.length === 2) || (listaNoSorteados.length === 2)) {
        alert("¡Agregue más nombres a la lista para sortear!");
        const mensaje = document.createElement("li");
        mensaje.textContent = "Agregue más nombres o reinicie para volver a sortear";
        resultado.appendChild(mensaje);
        return;
    }

    //11: Generar un índice aleatorio válido con el array auxiliar validado
    // Multiplicamos por la longitud del array aux y redondeamos hacia abajo con Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * listaNoSorteados.length);

    //#12: Obtener el nombre en esa posición del array aux.
    const amigoSorteado = listaNoSorteados[indiceAleatorio];

    //#13: Mostrar el resultado en la lista HTML de resultado
    const mensaje = document.createElement("li");
    mensaje.textContent = `${amigoSorteado} es tu amigo secreto 🎉`;
    resultado.appendChild(mensaje);    

    //#23 Eliminamos el nombre sorteado de la lista de No sorteados
    listaNoSorteados.splice(indiceAleatorio, 1);

    //mostramos la lista de los nombres agregados
    mostrarListaDeAmigos();

    //#24 Si quedan menos de 3 nombres en la lista, mostramos un mensaje final
    if ((listaNoSorteados.length === 2) || (listaDeAmigos.length === 2)) {
        setTimeout(() => {
            alert("¡Atento sólo quedan 2 nombres por sortear!");
            // Limpiar y mostrar mensaje adicional
            resultado.replaceChildren();
            const advertencia = document.createElement("li");
            advertencia.textContent = "Agregue más nombres a la lista para sortear!!!";
            resultado.appendChild(advertencia);
        }, 500); // breve delay para mostrar el último nombre antes del mensaje final
    }

}

//14 Función para reiniciar la lista de amigos y limpiar resultados
function reiniciarLista() {
    // Verificar si las listas tienen elementos antes de vaciarlas, para poder mostrar mensajes
    const listaConNombres = (listaDeAmigos.length > 0 || listaNoSorteados.length > 0);

    // Vaciar las listas
    listaDeAmigos = [];
    listaNoSorteados = [];

    // Limpiar el contenido visual del HTML de forma segura- reemplazamos los innerHTML
    //document.getElementById("listaAmigos").innerHTML = "";
    //document.getElementById("resultado").innerHTML = "";
    const listaAmigosHTML = document.getElementById("listaAmigos");
    const resultadoHTML = document.getElementById("resultado");
    //Limpiar la lista de manera más segura
    listaAmigosHTML.replaceChildren();    
    resultadoHTML.replaceChildren();

    // Mostrar el mensaje seguro, al reiniciar o con lista vacía
    const mensaje = document.createElement("li");

    if (listaConNombres) {
        mensaje.textContent = "Juego reiniciado, ingrese nombres para nuevo sorteo!";
    } else {
        mensaje.textContent = "Lista vacía, por favor agregue nombres.";
    }
    resultadoHTML.appendChild(mensaje);
}

//#17 Detectar si se presiona Enter en el campo de entrada
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // Ejecuta la misma función del botón
    }
});

//#25 Asegurar los botones en el DOM para cumplir con capa de seguridad en vercel.json: (script-src 'self')
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botonAgregar").addEventListener("click", agregarAmigo);
    document.getElementById("botonSortear").addEventListener("click", sortearAmigo);
    document.getElementById("botonReiniciar").addEventListener("click", reiniciarLista);
});