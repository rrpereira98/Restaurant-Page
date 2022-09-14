function contact() {
    const nav = document.querySelector(".nav")
    const content = document.querySelector("#content")

    nav.classList.add("dark-nav")

    const map = document.createElement("iframe")
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4467.321580413154!2d-3.2044969216144157!3d55.95525097243172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c791f42c2e15%3A0x8b92e62331a7438b!2s13%20Heriot%20Row%2C%20Edinburgh%20EH3%206HP!5e0!3m2!1spt-PT!2suk!4v1663191822805!5m2!1spt-PT!2suk"
    map.width = 600
    map.height = 450
    map.style = "border:0;"



    const footer = document.createElement("div")
    footer.classList.add("footer")
    const footerNote = document.createElement("p")
    footerNote.textContent = "Created by Rodrigo Pereira"
    footer.appendChild(footerNote)

    content.appendChild(map)
    content.appendChild(footer)
}

export default contact