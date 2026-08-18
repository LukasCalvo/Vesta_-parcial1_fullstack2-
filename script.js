const menu = document.getElementById("menu-btn");
const lista = document.getElementById("lista");

menu.addEventListener("click",()=>{
    lista.classList.toggle("oculto")
});