import banner from "./banner.jpg"

function home() {
    const content = document.querySelector("#content")
    
    const img = document.createElement("img")
    img.src = banner
    img.classList.add("banner")
    const h1Background = document.createElement("div")
    h1Background.classList.add("name-background")
    const h1 = document.createElement("h1")
    h1.textContent = "Le Restaurant"
    h1.classList.add("restaurant-name")
    h1Background.appendChild(h1)
    const p = document.createElement("p")
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."

    content.appendChild(img)
    content.appendChild(h1Background)
    content.appendChild(p)
}

export default home