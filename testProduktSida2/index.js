const products = [
    {name: "Hörlurar", category: "Elektronik", price: 1000, icon: "🎧"},
    {name: "Hoodie", category: "Kläder", price: 500, icon: "👕"},
    {name: "Tangentbord", category: "Elektronik", price: 1500, icon: "⌨️"},
    {name: "Keps", category: "Kläder", price: 200, icon: "🧢"},
    {name: "Gamingmus", category: "Elektronik", price: 600, icon: "🖱️"}
]

const productContainer = document.getElementById("product-container")
const categorySelect = document.getElementById("filter-category")
const sortSelect = document.getElementById("sort-price")
const discountBtn = document.getElementById("btn-discount")

let hasDiscount = false

const updateList = () => {
    let result = [...products]
    
    result = result.filter(item => {
        if (categorySelect.value === item.category || categorySelect.value === "Alla"){
            return true
        }
    })
    if(sortSelect.value === "low-high"){
        result.sort((a, b) => a.price - b.price)
    }else if(sortSelect.value === "high-low"){
        result.sort((a, b) => b.price - a.price)
    }
    if(hasDiscount){
        result = result.map(item => {
            return{
                name: item.name,
                category: item.category,
                price: item.price,
                icon: item.icon
            }
        })
    }
    render(result)
}

const render = result => {
    productContainer.innerHTML = ""

    result.forEach(product =>  {
        const card = document.createElement("div")
        card.className = "product-card"

        card.innerHTML = `
            <div class="product-icon">${product.icon}</div>
            <div class="product-icon">${product.name}</div>
            <div class="product-icon">${product.category}</div>
            <div class="product-icon">${product.price}</div>
        `
        productContainer.appendChild(card)
    })

}

// categorySelect.addEventListener("change", updateList)
categorySelect.addEventListener("change", updateList)
sortSelect.addEventListener("change", updateList)
discountBtn.addEventListener("click", () => {
    hasDiscount = !hasDiscount
    discountBtn.textContent = hasDiscount ? "Utan rabatt" : "Ge 20% rabatt"

    updateList()
})

updateList()