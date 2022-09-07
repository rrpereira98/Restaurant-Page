function pageLoad() {
    const body = document.querySelector("#content")

    const img = document.createElement("img")
    img.src = "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    const h1 = document.createElement("h1")
    h1.textContent = "The restaurant"
    const p = document.createElement("p")
    p.textContent = "This restaurant is awesome!"

    body.appendChild(img)
    body.appendChild(h1)
    body.appendChild(p)
    console.log("its working")
}

export default pageLoad