const informacion = [
    info1 = [
        { pregunta: "¿Cuál es el planeta mas rápido del sistema solar?" },
        { respuesta: "Mercurio" },
        { respuesta: "Jupiter" },
        { respuesta: "Urano" },
        { respuesta: "Pluton" },
        { preguntasCuenta: "1/10" }
    ],
    info2 = [
        { pregunta: " ¿Cuales fueron los primeros humanos en pisar la superficie lunar?" },
        { respuesta: "Neil Armstrong y Buzz Aldrin" },
        { respuesta: "MercurioCharles Conrad y Alan Bean" },
        { respuesta: "Elon Musk y Jeff Bezos" },
        { respuesta: "Tom y Jerry" },
        { preguntasCuenta: "2/10" }
    ],
    info3 = [
        { pregunta: "¿Cuantos Programas de exploración espacial se an echo?" },
        { respuesta: "6" },
        { respuesta: "2" },
        { respuesta: "7" },
        { respuesta: "100" },
        { preguntasCuenta: "3/10" }
    ],
    info4 = [
        { pregunta: "¿Cuál es el planeta que tiene anillos prominentes?" },
        { respuesta: "Saturno" },
        { respuesta: "Jupiter" },
        { respuesta: "Urano" },
        { respuesta: "La Tierra" },
        { preguntasCuenta: "4/10" }
    ],
    info5 = [
        { pregunta: '¿Cuál es el planeta conocido como el "planeta rojo"?' },
        { respuesta: "Marte" },
        { respuesta: "Jupiter" },
        { respuesta: "Venus" },
        { respuesta: "Mercurio" },
        { preguntasCuenta: "5/10" }
    ],
    info6 = [
        { pregunta: " ¿Cuántos planetas en nuestro sistema solar tienen anillos visibles desde la Tierra?" },
        { respuesta: "1" },
        { respuesta: "3" },
        { respuesta: "5" },
        { respuesta: "7" },
        { preguntasCuenta: "6/10" }
    ],
    info7 = [
        { pregunta: "¿Cuál es el planeta con mas satelites del sistema solar?" },
        { respuesta: "Saturno" },
        { respuesta: "Jupiter" },
        { respuesta: "Urano" },
        { respuesta: "Venus" },
        { preguntasCuenta: "7/10" }
    ],
    info8 = [
        { pregunta: '¿Cuanto mide la superficie terrestre del planeta mas grade del sistema solar?' },
        { respuesta: "139,820 km" },
        { respuesta: "139,820 m" },
        { respuesta: "139,000 km" },
        { respuesta: "139 km" },
        { preguntasCuenta: "8/10" }
    ],
    info9 = [
        { pregunta: "¿Cuales son los 3 planetas por orden mas grandes?" },
        { respuesta: "Jupiter,Saturno,Urano" },
        { respuesta: "Urano,Saturno,Jupiter" },
        { respuesta: "Mercurio,Venus,La Tierra" },
        { respuesta: "Jupiter,Saturno" },
        { preguntasCuenta: "9/10" }
    ],
    info10 = [
        { pregunta: '¿Cuantos satélites tiene Saturno?' },
        { respuesta: "83" },
        { respuesta: "2" },
        { respuesta: "79" },
        { respuesta: "27" },
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
