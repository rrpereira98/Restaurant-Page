import home from "./home";
import menu from "./menu";
import contact from "./contact";

const content = document.querySelector("#content")
const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")
const contactBtn = document.querySelector(".contact-btn")

//home()
//menu()
contact()

homeBtn.addEventListener("click", () => {
    content.innerHTML = ""
    home()
})

menuBtn.addEventListener("click", () => {
    content.innerHTML = ""
    menu()
})

contactBtn.addEventListener("click", () => {
    content.innerHTML = ""
    contact()
})

