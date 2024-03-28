const btnver = document.getElementById("btn-ver-sistema")
const sistemasolar = document.querySelector(".sistema-2d")
const cerrarstm = document.querySelector("#cerrar-stm")
const sistemasolard = document.querySelector(".sistema-solar")

btnver.addEventListener("click", () => {
  sistemasolar.classList.add("visible")
})
cerrarstm.addEventListener("click", () => {
  sistemasolard.classList.add("cerrar-sistema")
  setTimeout(() => {
    sistemasolar.classList.remove("visible")
    sistemasolard.classList.remove("cerrar-sistema")
  }, 400);
})