/* ============================================================
   CAMBIO DE COLOR DEL BANNER
=============================================================== */

const banner = document.getElementById("banner");
banner.classList.remove("bg-danger");
banner.classList.add("bg-warning");

/* ============================================================
   TESTIMONIOS Y PÁRRAFOS
=============================================================== */

const testimoniosVip = document.getElementsByClassName("testimonio-vip");

for (let vip of testimoniosVip) {
    vip.classList.add("text-primary"); // texto azul
}

const parrafos = document.getElementsByTagName("p");

for (let p of parrafos) {
    p.classList.add("text-danger");
}

/* ============================================================
   QUERYSELECTOR
=============================================================== */

const primerInput = document.querySelector("input");
primerInput.classList.add("bg-success", "text-white");

const botones = document.querySelectorAll("button");
botones.forEach(boton => boton.classList.add("btn-danger"));

/* ============================================================
   EVENTO onclick
=============================================================== */

function saludar() {
    document.getElementById("mensajeOnclick").innerText =
        "¡Gracias por hacer clic! Así funcionan las promociones.";
}

/* ============================================================
   EVENTOS onmouseover / onmouseout
=============================================================== */

function CambiaColor() {
    document.getElementById("cuadroColor").style.background = "#ffd966";
}

function RestablecerColor() {
    document.getElementById("cuadroColor").style.background = "#eee";
}

/* ============================================================
   EVENTO onchange
=============================================================== */

function mostrarSeleccion() {
    const pais = document.getElementById("seleccionPais").value;
    const texto = document.getElementById("textoOnchange");

    texto.innerText = pais ? "Elegiste: " + pais : "";
}

/* ============================================================
   EVENTO addEventListener
=============================================================== */

document.getElementById("btnCambiarcard").addEventListener("click", () => {
    document.getElementById("cardImagen").src = "IMG/casco.jpeg";
});

/* ============================================================
   AGREGAR IMÁGENES DINÁMICAS
=============================================================== */

const inputImagen = document.getElementById("InputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const contenedorImagenes = document.getElementById("contenedorImagenes");

btnAgregarImagen.addEventListener("click", () => {

    const url = inputImagen.value.trim();

    if (url === "") {
        alert("Por favor ingresa una URL válida.");
        return;
    }

    const img = document.createElement("img");
    img.src = url;
    img.classList.add("img-fluid", "mt-3", "rounded", "shadow");

    contenedorImagenes.appendChild(img);

    inputImagen.value = "";
});
/* ============================================================
   ACTIVIDAD LISTA DE TAREAS WARRIOR
============================================================ */

// 1. Seleccionar elementos principales
const listaTareas = document.getElementById("listaTareas");
const btnEliminarPrimero = document.getElementById("btnEliminarPrimero");
const inputNuevaTarea = document.getElementById("inputNuevaTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

// 2. Eliminar el primer elemento de la lista usando remove()
btnEliminarPrimero.addEventListener("click", () => {
  const primeraTarea = listaTareas.firstElementChild;

  if (primeraTarea) {
    primeraTarea.remove(); // elimina el nodo directamente
  } else {
    alert("No hay tareas para eliminar.");
  }
});

// 3. Agregar nuevas tareas a la lista
btnAgregarTarea.addEventListener("click", () => {
  const textoTarea = inputNuevaTarea.value.trim();

  if (textoTarea === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  // Crear nueva tarea (li)
  const nuevaTarea = document.createElement("li");
  nuevaTarea.classList.add("list-group-item");
  nuevaTarea.innerText = textoTarea;

  // Insertar en la lista
  listaTareas.appendChild(nuevaTarea);

  inputNuevaTarea.value = ""; // limpiar input
});

