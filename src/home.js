import banner from "./banner.jpg"

function home() {
    const content = document.querySelector("#content")
    
    const img = document.createElement("img")
    img.src = banner
    img.classList.add("banner")

    const logoBackground = document.createElement("div")
    logoBackground.classList.add("name-background")

    const logo = document.createElement("h1")
    logo.textContent = "Le Restaurant"
    logo.classList.add("restaurant-name")
    logoBackground.appendChild(logo)

    const title = document.createElement("h2")
    title.textContent = "Our Story"
    title.classList.add("title")

    const story = document.createElement("p")
    story.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
    story.classList.add("story")

    content.appendChild(img)
    content.appendChild(logoBackground)
    content.appendChild(title)
    content.appendChild(story)
}

export default home