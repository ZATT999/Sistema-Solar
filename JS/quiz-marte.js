const informacion = [
    info1 = [
        { pregunta: "¿Cuál es el diámetro de Marte?" },
        { respuesta: "6,792 km" },
        { respuesta: "12,742 km" },
        { respuesta: "4,212 km" },
        { respuesta: "9,192 km" },
        { preguntasCuenta: "1/10" }
    ],
    info2 = [
        { pregunta: " ¿Cuál es la temperatura promedio en la superficie de Marte?" },
        { respuesta: "-63 °C" },
        { respuesta: " 17 °C" },
        { respuesta: "-153 °C" },
        { respuesta: "98 °C" },
        { preguntasCuenta: "2/10" }
    ],
    info3 = [
        { pregunta: "¿Qué famoso rover de la NASA exploró la superficie de Marte?" },
        { respuesta: "Curiosity" },
        { respuesta: "Spirit" },
        { respuesta: "Voyager" },
        { respuesta: "Pathfinder" },
        { preguntasCuenta: "3/10" }
    ],
    info4 = [
        { pregunta: "¿Cuál es el nombre del volcán más grande del sistema solar, que se encuentra en Marte?" },
        { respuesta: "Monte Olimpo" },
        { respuesta: "Monte Everest" },
        { respuesta: "Monte Fuji" },
        { respuesta: "Monte Kilimanjaro" },
        { preguntasCuenta: "4/10" }
    ],
    info5 = [
        { pregunta: " ¿Cuál es el nombre del cañón gigante en Marte que es mucho más largo y profundo que el Gran Cañón de la Tierra?" },
        { respuesta: "Valles Marineris" },
        { respuesta: "Cañón del Colorado" },
        { respuesta: "Cañón de Marte" },
        { respuesta: "Cañón de Olympus" },
        { preguntasCuenta: "5/10" }
    ],
    info6 = [
        { pregunta: " ¿Qué gas forma la mayor parte de la atmósfera marciana?" },
        { respuesta: "Dióxido de carbono" },
        { respuesta: "Oxígeno" },
        { respuesta: "Nitrógeno" },
        { respuesta: "Helio" },
        { preguntasCuenta: "6/10" }
    ],
    info7 = [
        { pregunta: "¿Cuál es la luna más grande de Marte?" },
        { respuesta: "Fobos" },
        { respuesta: "Deimos" },
        { respuesta: "Europa" },
        { respuesta: "Ganímedes" },
        { preguntasCuenta: "7/10" }
    ],
    info8 = [
        { pregunta: '¿Qué famoso escritor de ciencia ficción escribió una novela llamada "Crónicas marcianas" que se inspira en Marte?' },
        { respuesta: "Ray Bradbury" },
        { respuesta: "Isaac Asimov" },
        { respuesta: "Arthur C. Clarke" },
        { respuesta: "Philip K. Dick" },
        { preguntasCuenta: "8/10" }
    ],
    info9 = [
        { pregunta: "¿Cuál es el nombre de la sonda espacial que aterrizó exitosamente en Marte en febrero de 2021?" },
        { respuesta: "Perseverance" },
        { respuesta: "Curiosity" },
        { respuesta: "Viking" },
        { respuesta: "Opportunity" },
        { preguntasCuenta: "9/10" }
    ],
    info10 = [
        { pregunta: '¿Cuál es el nombre del fenómeno en Marte que da la apariencia de "canales" en la superficie, que históricamente se malinterpretó como evidencia de agua?' },
        { respuesta: "Canales de Marte" },
        { respuesta: "Llanuras de Marte" },
        { respuesta: " Ríos de Marte" },
        { respuesta: "Valles de Marte" },
        { preguntasCuenta: "10/10" }
    ],
];

const respuestas = document.querySelectorAll(".respuesta");
const quiz = document.querySelector(".quiz");
const siguiente = document.getElementById("btn-next-pregunta");
const preguntaElement = document.getElementById("pregunta");
const cuentaDePreguntas = document.getElementById("preguntas-amount");


document.querySelector("#cerrar-quiz").addEventListener("click", () =>{
    quiz.classList.add("cerrar-quiz")
    setTimeout(() => {
      quiz.style.display = "none"
      quiz.classList.remove("cerrar-quiz")
    }, 400);
})

let currentQuestion = 0;


function mezclarRespuestas(respuestas) {
    for (let i = respuestas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [respuestas[i], respuestas[j]] = [respuestas[j], respuestas[i]];
    }
    return respuestas;
}


function manejarClic(respuestaClic) {
    respuestas.forEach((respuesta) => {
        if (respuesta === respuestaClic) {
            respuesta.classList.add("activada");
        } else {
            respuesta.classList.remove("activada");
        }
    });
}

respuestas.forEach((respuesta) => {
    respuesta.addEventListener("click", function () {
        manejarClic(respuesta);
    });
});

function manejarClic(respuestaClic) {
    const respuestas = document.querySelectorAll(".respuesta");
    respuestas.forEach((respuesta) => {
        if (respuesta === respuestaClic) {
            respuesta.classList.add("activada");
        } else {
            respuesta.classList.remove("activada");
        }
    });
}

document.getElementById("btn-quiz").addEventListener("click", () => {
    quiz.style.display = "flex";
    mostrarPregunta();
});

siguiente.addEventListener("click", function () {
    const respuestaSeleccionada = document.querySelector(".activada");

    if (respuestaSeleccionada) {
        const esCorrecta = respuestaSeleccionada.innerHTML === informacion[currentQuestion][1].respuesta;
        mostrarResultado(esCorrecta);
    }
});

function mostrarPregunta() {
    const infoActual = informacion[currentQuestion];
    const respuestasMezcladas = mezclarRespuestas(infoActual.slice(1, 5));

    preguntaElement.innerHTML = infoActual[0].pregunta;
    for (let i = 0; i < 4; i++) {
        respuestas[i].innerHTML = respuestasMezcladas[i].respuesta;
    }
    cuentaDePreguntas.innerHTML = infoActual[5].preguntasCuenta;
}


function mostrarResultado(esCorrecta) {
    const mensajeElement = document.querySelector(`#si-no-${currentQuestion + 1}`);
    const respuestaSeleccionada = document.querySelector(".activada");

    if (esCorrecta) {
        mensajeElement.classList.add("correcto")
        mensajeElement.innerHTML = "Correcto";
        Swal.fire({
            icon: "success",
            title:"Correcto",
            timer: 1900,
            background: "rgba(18, 18, 18)",
            color: "#fff",
            width: 600,
            showConfirmButton:false,
          });
    } else {
        mensajeElement.classList.add("incorrecto")
        Swal.fire({
            icon: "error",
            title:"Incorrecto",
            color:"#fff",
            timer: 1900,
            background: "rgb(18, 18, 18)",
            color: "#fff",
            width: 600,
            showConfirmButton:false,
          });
        mensajeElement.innerHTML = "Incorrecto";
    }

    setTimeout(() => {
        reiniciarEstilo();
        siguientePregunta();
    }, 2000);

    function reiniciarEstilo() {
        quiz.style.borderColor = "black";
        respuestaSeleccionada.classList.remove("activada");
    }
}

function siguientePregunta() {
    currentQuestion++;

    if (currentQuestion < informacion.length) {
        mostrarPregunta();
    } else {
        finalizarQuiz();
    }
}
const jsConfetti = new JSConfetti()
function finalizarQuiz() {
    document.querySelector(".content-quiz").style.display = "none";
    document.querySelector(".tabla").style.display = "flex";
    jsConfetti.addConfetti()
}

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});