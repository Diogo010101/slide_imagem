let proximo = document.querySelector("#next");
let anterior = document.querySelector("#prev");
let slide = document.querySelector("#slide");

proximo.addEventListener("click", () =>{
    let lists = document.querySelectorAll(".item");
    slide.appendChild(lists[0]);
})

anterior.addEventListener("click", () => {
    let lists = document.querySelectorAll(".item");
    slide.prepend(lists[lists.length - 1]);
})