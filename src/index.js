import home from "./home";
import menu from "./menu"

const content = document.querySelector("#content")
const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")

//home()
menu()

homeBtn.addEventListener("click", () => {
    content.innerHTML = ""
    home()
})

menuBtn.addEventListener("click", () => {
    content.innerHTML = ""
    menu()
})

