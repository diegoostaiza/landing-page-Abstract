const boton = document.querySelector(".btn")
const nav = document.querySelector(".botones")

boton.addEventListener("click" , ()=>{
    nav.classList.toggle("activo")
})