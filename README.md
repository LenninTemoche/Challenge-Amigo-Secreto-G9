# Alura-Oracle-Next-Education-G9-Challenge-Amigo-Secreto
# 🎁 Aplicación Amigo Secreto

Aplicación para ingresar nombres en una lista y luego realizar un sorteo aleatorio para elegir al "amigo secreto".  

## 👉 [Ver la aplicación en Vercel](https://challenge-amigo-secreto-g9.vercel.app/)

<p align="center">
  <a href="challenge-amigo-secreto_esp-main/assets/challenge-amigo-secreto.png">
    <img src="challenge-amigo-secreto_esp-main/assets/challenge-amigo-secreto.png" alt="Vista previa del juego" width="500">
  </a>
</p>

---

## ✨ Funcionalidades 

- Agregar participantes a una lista, 3 como mínimo para el sorteo.
- Validación para ingresar sólo texto.
- Validación para evitar nombres duplicados o vacíos.
- Validación para 1 o 2 nombres.
- Agregar nombres presionando la tecla Enter.
- Sorteo aleatorio que asigna a cada participante un "amigo secreto".
- Al realizar sorteo, el nombre ganador se irá tachando de las lista de nombres ingresados.
- Opción para Reiniciar limpiando la lista y los resultados.
- Se adiciona botón para redirigir a página de juego "Correcto".
- Se adiciona archivo vercel.json, según Política de Seguridad de Contenidos (CSP) de Vercel.
- Interfaz simple, intuitiva y responsiva.

---

## ✨ Cómo usar

1. Accede a la <a href="https://challenge-amigo-secreto-g9.vercel.app/">aplicación desplegada</a>
2. Ingresa los nombres de todos los participantes
3. Haz clic en “Realizar sorteo”
4. Descubre quién es el amigo secreto seleccionado por  sorteo 🎉

---

## 🛠️ Tecnologías utilizadas

- HTML5
- JavaScript
- CSS
- Github (para versionamiento)
- Github Codespaces (ambiente de desarrollo)
- Vercel (para el deploy)
- Trello (para gestión y planificación) [ver mi Trello](https://trello.com/b/0ngpC5e2/trello-challenge-amigo-secreto-esp)
---

## 🚀 Despliegue de la aplicación en Vercel

<p align="center">
  <a href="challenge-amigo-secreto_esp-main/assets/new-proyect-vercel.png">
    <img src="challenge-amigo-secreto_esp-main/assets/new-proyect-vercel.png" alt="Vista previa de Vercel" width="500">
  </a>
</p>

### Pasos para el despliegue en Vercel 
- Vercel se integra directamente con GitHub para facilitar el despliegue. Inicia sesión o registrate en  https://vercel.com/new
- Importa tu proyecto en Vercel:
  - Haz clic en el botón "Add New Project" (Agregar nuevo proyecto).
  - Selecciona el repositorio de GitHub que contiene tu proyecto.
  - Configura la implementación.
  - Vercel detectará automáticamente la configuración necesaria para tu proyecto.
- Haz clic en el botón "Deploy" (Implementar).
- Vercel construirá y desplegará tu proyecto en una URL única.
¡Listo! Tu proyecto estará en vivo y accesible a través de la URL proporcionada por Vercel.
- Si prefieres, puedes optar por el despliegue en GitHub Pages: [Paso a Paso para activar tu proyecto en GitHub Pages](https://www.aluracursos.com/blog/github-pages)
- Encuentra más información sobre el despliegue en Vercel en: [Heroku, Vercel y otras opciones de cloud como plataforma](https://www.aluracursos.com/blog/heroku-vercel-y-otras-opciones-de-cloud-como-plataforma)


---
---

## ✨ Resumen de las funcionalidades implementadas en js

| Paso | Acción                         | ¿Dónde se implementa?       | Descripción                                                                 |
| ---- | ------------------------------ | --------------------------- | --------------------------------------------------------------------------- |
| #1   | Capturar nombre                | `agregarAmigo()`            | Se obtiene el valor del campo de entrada con `getElementById`.              |
| #2   | Validar entrada vacía          | `agregarAmigo()`            | Se usa `if` para comprobar si el nombre está vacío y se muestra un `alert`. |
| #3   | Agregar al array               | `agregarAmigo()`            | Se usa `.push()` para añadir el nombre al arreglo `listaDeAmigos`.          |
| #4   | Limpiar campo de entrada       | `agregarAmigo()`            | Se limpia el campo `input` asignando `""` a su `.value`.                    |
| #5   | Declarar el array global       | `app.js`                    | Se crea `let listaDeAmigos = []` para almacenar los nombres.                |
| #6   | Obtener lista del HTML         | `mostrarListaDeAmigos()`    | Se usa `getElementById("listaAmigos")` para acceder a la lista `<ul>`.      |
| #7   | Limpiar las listas existentes  | `mostrarListaDeAmigos()`    | Se usa `.replaceChildren()` para limpiar las listas de forma segura.      |
| #8   | Iterar sobre el array          | `mostrarListaDeAmigos()`    | Se recorre `listaDeAmigos` con un bucle `for`.                              |
| #9   | Agregar elementos `<li>`       | `mostrarListaDeAmigos()`    | Se crea un cada `<li>` con `createElement()` y lo agrega con `.appendChild()`.           |
| #10  | Validar que haya amigos        | `sortearAmigo()`            | Se verifica que `listaDeAmigos` no esté vacío antes de sortear.             |
| #11  | Generar índice aleatorio       | `sortearAmigo()`            | Se usa `Math.random()` y `Math.floor()` para generar un número válido.      |
| #12  | Obtener el nombre sorteado     | `sortearAmigo()`            | Se accede al elemento del array en la posición aleatoria `listaNoSorteados[indiceAleatorio]`.
| #13  | Mostrar el resultado           | `sortearAmigo()`            | Se actualiza resultado del sorteo con `textContent` y `appendChild(mensaje)`.  |
| #14	 | Reiniciar lista	              | `reiniciarLista()`	        | Limpia arrays, HTML y resultado de forma más segura con `replaceChildren()`.                                             |
| #15	 | Validar nombres duplicados	    | `agregarAmigo()`	          | Usa `.some()` para evitar repetidos (ignora mayúsculas).|
| #16	 | Validar solo texto	            | `agregarAmigo()`	          | Usa expresión regular para permitir solo texto `/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/`.|
| #17	 | Activar tecla Enter            | `app.js`                    |	Escucha Enter y ejecuta `agregarAmigo()` con `addEventListener("keydown")`.          |
| #18  | Declarar lista auxiliar        | `app.js`                    | Se declara `listaNoSorteados` para validaciones y gestionar nombres aún no sorteados.|
| #19  | Agregar lista al array aux.    | `agregarAmigo()`            | Se usa también `.push()` para añadir nombres al arreglo `listaNoSorteados`.       |
| #20  | Verificar si el nombre ya fue sorteado | `mostrarListaDeAmigos()` | Usa clase `sorteado` en css a `<li>` tachando los nombres ya sorteados `classList.add("sorteado")`.|
| #21  | Validar si hay un solo nombre  | `sortearAmigo()`            | Muestra `alert` si solo hay un nombre en la lista.                          |
| #22  | Validar si hay dos nombres     | `sortearAmigo()`            | Muestra `alert` si solo quedan dos nombres en la lista.                     |
| #23  | Eliminar nombre sorteado de lista aux.| `sortearAmigo()`     | Se usa `.splice()` para removerlo de `listaNoSorteados`.                    |
| #24  | Verificar si quedan menos de 3 nombres| `sortearAmigo()`     | Muestra `alert` si solo quedan dos nombres en la lista.                     |
| #25  | Agregar eventos de botones desde el DOM   | `DOMContentLoaded`     | Asegura eventos de los botones en cumplimiento con configuración de vercel.json `addEventListener` .                     |


---
### 🔐 Seguridad: Configuración  CSP en vercel.json

Para mejorar la seguridad de esta aplicación desplegada en Vercel, se ha incluido el archivo vercel.json con una configuración personalizada de headers HTTP, según Política de Seguridad de Contenidos de Vercel. Esta configuración ayuda a proteger contra ataques comunes como XSS, clickjacking, sniffing de contenido y asegura que toda la navegación ocurra sobre HTTPS, permitiendo que todo el contenido se cargue únicamente desde el origen del sitio (scripts, imágenes, estilos, etc.). Para más información consulte la [documentación oficial de Vercel](https://vercel.com/docs/project-configuration).

| **Cabecera**                          | **Valor aplicado**                                                                                                                                                                    | **Propósito**                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `Content-Security-Policy`             | `default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; object-src 'none'; base-uri 'self';` | Previene XSS e impone políticas de carga de recursos                     |
| `X-Content-Type-Options`              | `nosniff`                                                                                                                                                                             | Impide que el navegador adivine el tipo de contenido                     |
| `X-Frame-Options`                     | `DENY`                                                                                                                                                                                | Evita que la app se incruste en iframes (protección contra clickjacking) |
| `Referrer-Policy`                     | `no-referrer`                                                                                                                                                                         | Controla la información enviada en el encabezado `Referer`               |
| `X-XSS-Protection`                    | `1; mode=block`                                                                                                                                                                       | Activa protección contra XSS en navegadores antiguos                     |
| `Permissions-Policy`                  | `camera=(), microphone=(), geolocation=()`                                                                                                                                            | Bloquea acceso a APIs sensibles del navegador                            |
| `Strict-Transport-Security`           | `max-age=63072000; includeSubDomains; preload`                                                                                                                                        | Fuerza el uso de HTTPS en todas las conexiones                           |


---

## 🛠️ Instalación local 

Sigue estos pasos para clonar y abrir el proyecto:

```bash

# 1. Clona el repositorio:
git clone https://github.com/LenninTemoche/Challenge-Amigo-Secreto-G9.git

# 2. Entra al directorio del proyecto:
cd challenge-amigo-secreto_esp-main

# 3. Abre el archivo index.html en tu navegador
Haciendo doble click sobre index.html o utilizando una extensión como Live Server desde Visual Studio Code


```

---

## 📁 Estructura del proyecto

```text
challenge-amigo-secreto_esp-main/
├── index.html              # Página principal de la aplicación
├── style.css               # Estilos de la aplicación
├── app.js                  # Lógica de la aplicación en JavaScript
├── vercel.json             # Configuración de seguridad
├── README.md               # Instrucciones de la aplicación
└── assets/                 # Carpeta de imágenes
    ├── amigo-secreto.png   # imágen central
    ├── play-circle-outline.png       # icono botón sorteo
    ├── new-proyect-vercel.png        # Vista previa nuevo proyecto en Vercel
    ├── oracle-one.png                # Vista previa alura latam
    ├── alura-latam.png               # Vista previa oracle one
    ├── gatito-github.png             # Vista previa github
    └── challenge-amigo-secreto.png   # Vista previa del juego en Readme
```
---

🧠 Objetivo del proyecto

Proyecto creado con el objetivo de poner en práctica los conocimientos  adquiridos en la etapa de formación Lógica de Programación con JavaScript, del Programa ONE - Oracle Next Education G9. Comentado en las partes principales para su comprensión, puedes usarlo y modificarlo libremente, ya que está disponible para fines educativos.

---

📝 Notas

La aplicación es completamente funcional, ideal para practicar y aprender lógica de programación y manipulación del DOM con JavaScript. Si la ejecutas en local, asegúrate de que todas las imágenes estén en la carpeta `assets/`. Sólo necesitarás conexión a internet para cargar las fuentes desde Google Fonts.
El despligue en Vercel es opcional, el archivo `vercel.json` no afecta en el funcionamiento de la aplicación en casos desees usar Github Pages u otros servicios similares.

---

✨ Créditos

Desarrollado como ejercicio del Challenge Amigo Secreto, del programa ONE - Oracle Next Education G9.
<br>
<br>

<div align="center" style="text-align: center">
  <img src="challenge-amigo-secreto_esp-main/assets/oracle-alura.png" alt="ONE - Oracle Next Education G9" width="500" height="125"/>  
  <h3>ONE - Oracle Next Education G9 - 2025</h3>
  <p>Sumérgete en la Tecnología!</p>  
  <p>
    <a href="https://www.oracle.com/latam/education/oracle-next-education/">
      <img alt="Oracle One" src="challenge-amigo-secreto_esp-main/assets/oracle-one.png" width="140" height="55"/>
    </a>
    <a href="https://app.aluracursos.com/dashboard">
      <img alt="Alura Latam" src="challenge-amigo-secreto_esp-main/assets/alura-latam.png" width="120" height="55"/>
    </a>
  </p>
</div>


