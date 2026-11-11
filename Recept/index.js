// mock-data
let recipes = [
	{
		id: 1,
		name: 'Krämig Pasta',
		category: 'Vegetariskt',
		price: 45,
		icon: '🍝',
		ingredients: ['Pasta', 'Grädde', 'Svamp', 'Vitlök'],
	},
	{
		id: 2,
		name: 'Tacos',
		category: 'Kött',
		price: 60,
		icon: '🌮',
		ingredients: ['Köttfärs', 'Tacobröd', 'Salsa', 'Ost'],
	},
	{
		id: 3,
		name: 'Lax med Potatis',
		category: 'Fisk',
		price: 85,
		icon: '🐟',
		ingredients: ['Lax', 'Potatis', 'Dressing', 'Citron'],
	},
	{
		id: 4,
		name: 'Linssoppa',
		category: 'Vegetariskt',
		price: 30,
		icon: '🥣',
		ingredients: ['Röda linser', 'Lök', 'Tomater', 'Buljong'],
	},
]

let currentPortions = 2

const recipeContainer = document.getElementById('recipe-container')
const filterCategory = document.getElementById('filter-category')
const recipeCount = document.getElementById('recipe-count')
const portionCountSpan = document.getElementById('portions-count')
const btnPlus = document.getElementById('btn-plus')
const btnMinus = document.getElementById('btn-minus')
const addRecipeForm = document.getElementById('add-recipe-form')

const updateList = () => {
	let result = [...recipes]

	result = result.filter(recipe => {
		if (filterCategory.value === recipe.category || filterCategory.value === 'alla') {
			return true
		}
	})

	render(result)
}

const addRecipe = () => {
	const name = document.getElementById('input-name').value
	const category = document.getElementById('input-category').value
	const price = document.getElementById('input-price').value
	const icon = document.getElementById('input-icon').value
	const ingredientsInput = document.getElementById('input-ingredients').value

	const ingredients = ingredientsInput.split(',')

	const newRecipe = {
		id: Date.now(),
		name: name,
		category: category,
		price: price,
		icon: icon,
		ingredients: ingredients,
	}

	recipes.push(newRecipe)
	addRecipeForm.reset()
}

const render = result => {
	recipeCount.textContent = `${result.length} st`
	recipeContainer.innerHTML = ''

	result.forEach(recipe => {
		const card = document.createElement('div')
		card.className = 'recipe-card'

		const totalPrice = recipe.price * currentPortions

		card.innerHTML = `
                     <div>
                        <div class="recipe-header">
                            <span class="recipe-icon">${recipe.icon}</span>
                            <span class="recipe-category-tag">${recipe.category}</span>
                        </div>
                        <div class="recipe-name">${recipe.name}</div>
                        <div class="recipe-ingredients">Ingredienser: ${recipe.ingredients.join(', ')}</div>
                    </div>
                    <div class="recipe-footer">
                        <div>
                            <span class="recipe-price-label">Totalt (${currentPortions} port)</span>
                            <span class="recipe-price-val">${totalPrice} kr</span>
                        </div>
                    </div>
        `

		recipeContainer.appendChild(card)
	})
}

filterCategory.addEventListener('change', updateList)

btnPlus.addEventListener('click', () => {
	currentPortions++
	portionCountSpan.textContent = currentPortions
	updateList()
})

btnMinus.addEventListener('click', () => {
	if (currentPortions > 1) {
		currentPortions--
		portionCountSpan.textContent = currentPortions
		updateList()
	}
})

addRecipeForm.addEventListener('submit', e => {
	e.preventDefault()

	addRecipe()
	updateList()
})

updateList()
