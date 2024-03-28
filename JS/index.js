
  const btnvermenu = document.querySelector(".btn-menu")
  const btncerrarmenu = document.querySelector(".btn-cerrar-menu")
  const menu = document.querySelector(".content-menu")

  btnvermenu.addEventListener("click", () =>{
    menu.classList.add("content-menu-visible")
    document.querySelector("main").style.opacity = "0.4"
  })
  btncerrarmenu.addEventListener("click", () =>{
    document.querySelector("main").style.opacity = "1"
    menu.classList.add("cerrar-menu")
    setTimeout(() => {
      menu.classList.remove("cerrar-menu")
      menu.classList.remove("content-menu-visible")
    }, 500);
  })
  document.addEventListener("DOMContentLoaded", function () {
    const planetas = document.querySelectorAll(".planeta");

    planetas.forEach(planeta => {
        const modal = planeta.querySelector(".modal");
        const btnmasinfo = planeta.querySelector("#btn-mas-info");
        const cerrar = planeta.querySelector(".cerrar");

        btnmasinfo.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        cerrar.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", event => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
const btnback = document.querySelector("#btn-back")
const btnnext = document.querySelector("#btn-next")
const slider = document.querySelector(".slider")

let isDragging = false;
let startX, scrollLeft;



