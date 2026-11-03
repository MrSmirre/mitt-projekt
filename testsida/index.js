//mock-data
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
const discountBtn = document.getElementById("discount-btn")

const updateList = () => {
    //logic for updating list
    let result = [...products]

    result = result.filter(item => {
        if (categorySelect.value === item.category || categorySelect.value === "alla") {
            return true
        }
    })
    // sort
    if (sortSelect.value === "low-high") {
        result.sort((a, b) => a.price - b.price)
    } else if (sortSelect.value === "high-low") {
        result.sort((a, b ) => b.price - a.price)
    }
    console.log(categorySelect.value);
    
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

//lyssnare till ändringar i fältet
categorySelect.addEventListener("change", updateList)
sortSelect.addEventListener("change", updateList)

updateList()


