//  mock-data
// börja med att skriva mockdata om vi inte har tillgång till databasen
const products = [
    { name: "Hörlurar", category: "elektronik", price: 1000, icon: '🎧'},
    { name: "Hoodie", category: "kläder", price: 500, icon: '👕'},
    { name: "Tangentbord", category: "elektronik", price: 1500, icon: '⌨️'},
    { name: "Keps", category: "kläder", price: 200, icon: '🧢'},
    { name: "Gamingmus", category: "elektronik", price: 600, icon: '🖱️'},
]

const productsContainer = document.getElementById("product-container")
const categorySelect = document.getElementById("filter-category")
const sortSelect = document.getElementById("sort-price")
const discountBtn = document.getElementById("btn-discount")

let hasDiscount = false

const updateList = () => {// gör en kopia av arrayen products så man inte ändrar i originalarrayen  
    let result = [...products]

    // filterfunktion
    result = result.filter(item => {
        if (categorySelect.value === item.category || categorySelect.value === "alla") {
            return true
        }
    })
    // sort array funktion
     if (sortSelect.value === "low-high") {
        result.sort((a, b) => a.price - b.price)
    } else if (sortSelect.value === "high-low") {
        result.sort((a, b ) => b.price - a.price)
    }

    if (hasDiscount) {
        result = result.map(item => {
            return {
                name: item.name,
                category: item.category,
                price: item.price * 0.8,
                icon: item.icon
            }
        })
    }

    render(result)
}


    
const render = result => {
    productsContainer.innerHTML = ""

    result.forEach(product => {
        const card = document.createElement("div")
        card.className = "product-card"

        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">${product.price}</div>
        `
        productsContainer.appendChild(card)
    })
}

// lyssnare för att kunnna göra funktioner för dem
categorySelect.addEventListener("change", updateList)
sortSelect.addEventListener("change", updateList)
discountBtn.addEventListener("click", () => {
    hasDiscount = !hasDiscount
    discountBtn.textContent = hasDiscount ? "Utan rabatt" : "Ge 20% rabatt"

    updateList()
})

updateList()