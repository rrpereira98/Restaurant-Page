function menu() {
    const nav = document.querySelector(".nav")
    const content = document.querySelector("#content")

    nav.classList.add("dark-nav")

    const usableSpace = document.createElement("div")
    usableSpace.classList.add("usable-space")

    const menuTitle = document.createElement("h1")
    menuTitle.classList.add("menu-title")
    menuTitle.textContent = "The Menu"

    const menuList = document.createElement("div")
    menuList.classList.add("menu-list")
    const item1 = document.createElement("p")
    item1.textContent = "Croque monsieur ............................................................................................... £20"
    const item2 = document.createElement("p")
    item2.textContent = "Boeuf bourguignon .......................................................................................... £20"
    const item3 = document.createElement("p")
    item3.textContent = "Lamb shank navarin .......................................................................................... £20"
    const item4 = document.createElement("p")
    item4.textContent = "Quiche Lorraine .................................................................................................. £20"
    const item5 = document.createElement("p")
    item5.textContent = "Cassoulet ............................................................................................................... £20"
    const item6 = document.createElement("p")
    item6.textContent = "Salmon en papillote .......................................................................................... £20"
    const item7 = document.createElement("p")
    item7.textContent = "Bouillabaisse ......................................................................................................... £20"
    const item8 = document.createElement("p")
    item8.textContent = "French onion soup ............................................................................................. £20"
    const item9 = document.createElement("p")
    item9.textContent = "Chicken confit ...................................................................................................... £20"
    const item10 = document.createElement("p")
    item10.textContent = "Steak frites ............................................................................................................. £20"
    menuList.appendChild(item1)
    menuList.appendChild(item2)
    menuList.appendChild(item3)
    menuList.appendChild(item4)
    menuList.appendChild(item5)
    menuList.appendChild(item6)
    menuList.appendChild(item7)
    menuList.appendChild(item8)
    menuList.appendChild(item9)
    menuList.appendChild(item10)

    content.appendChild(usableSpace)
    usableSpace.appendChild(menuTitle)
    usableSpace.appendChild(menuList)
}

export default menu