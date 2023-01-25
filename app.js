let button=document.querySelector(".arrow1"),
links=document.querySelector(".nav-links");

button.addEventListener("click",()=>{
    links.classList.toggle("display");
})