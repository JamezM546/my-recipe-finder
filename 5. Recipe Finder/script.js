// 1st we get the references to our HTML elements 
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const recipeList = document.getElementById('recipe-list');
const noRecipesFoundMessage = document.querySelector('.no-recipes-found');

const recipeModal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

// This space is for our recipe information
const recipes = [
    {
        id: '1',
        name: 'Chocolate Chip Pancakes',
        category: 'breakfast',
        image: './pictures/chocopancakes.webp', 
        ingredients: [
            '1 ½ cups all-purpose flour',
            '1 tbsp white sugar',
            '2 tsp baking powder',
            '½ tsp salt',
            '1 ¼ cups milk',
            '1 egg',
            '2 tbsp melted butter'
        ],
        instructions: [
            'In a large bowl, sift together the flour, sugar, baking powder, and salt.',
            'In a separate bowl, beat the egg and stir in the milk and melted butter.',
            'Pour the milk mixture into the flour mixture; mix until just combined (lumps are okay).',
            'Heat a lightly oiled griddle or frying pan over medium-high heat.',
            'Pour ¼ cup of batter per pancake onto the griddle. Cook until bubbles appear on the surface and the edges are cooked; flip and cook until golden brown.'
        ]
    },
    {
        id: '2',
        name: 'Spicy Chicken Stir-Fry',
        category: 'lunch',
        image: './pictures/stirfry.webp', 
        ingredients: [
            '1 lb boneless, skinless chicken breast, cut into strips',
            '2 tbsp soy sauce',
            '1 tbsp sesame oil',
            '1 tbsp cornstarch',
            '1 red bell pepper, sliced',
            '1 green bell pepper, sliced',
            '1 onion, sliced',
            '2 cloves garlic, minced',
            '1 tbsp ginger, grated',
            '1-2 red chilies, sliced (optional)',
            '2 tbsp vegetable oil',
            'Cooked rice, for serving'
        ],
        instructions: [
            'In a bowl, combine chicken, soy sauce, sesame oil, and cornstarch. Marinate for 15 minutes.',
            'Heat vegetable oil in a large skillet or wok over high heat. Add chicken and stir-fry until cooked through and lightly browned. Remove chicken from pan.',
            'Add bell peppers, onion, garlic, ginger, and chilies (if using) to the same pan. Stir-fry for 3-5 minutes until vegetables are tender-crisp.',
            'Return chicken to the pan. Toss everything together. Serve immediately with cooked rice.'
        ]
    },
    {
        id: '3',
        name: 'Vegetable Lasagna',
        category: 'dinner',
        image: './pictures/veggielasg.jpg', 
        ingredients: [
            '9 lasagna noodles, cooked al dente',
            '1 tbsp olive oil',
            '1 onion, chopped',
            '2 cloves garlic, minced',
            '1 zucchini, diced',
            '1 bell pepper, diced',
            '1 can (28 oz) crushed tomatoes',
            '1 tsp dried basil',
            '½ tsp dried oregano',
            'Salt and pepper to taste',
            '15 oz ricotta cheese',
            '1 egg',
            '½ cup grated Parmesan cheese',
            '2 cups shredded mozzarella cheese'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C).',
            'Heat olive oil in a large skillet. Add onion and garlic; cook until softened. Stir in zucchini, bell pepper, crushed tomatoes, basil, and oregano. Simmer for 15 minutes, seasoning with salt and pepper.',
            'In a bowl, mix ricotta cheese, egg, and ¼ cup Parmesan cheese.',
            'Spread a thin layer of sauce in a 9x13 inch baking dish. Layer with 3 noodles, half of the ricotta mixture, a third of the remaining sauce, and a third of the mozzarella. Repeat layers. Top with remaining noodles, sauce, and mozzarella.',
            'Bake for 30-35 minutes, or until bubbly and cheese is golden. Let stand 10 minutes before serving.'
        ]
    },
    {
        id: '4',
        name: 'Fruit Smoothie Bowl (Or Playa Bowl)',
        category: 'breakfast',
        image: './pictures/playabowl.jpg', 
        ingredients: [
            '1 frozen banana',
            '½ cup frozen mixed berries',
            '½ cup unsweetened almond milk',
            '1 tbsp chia seeds',
            'Optional toppings: granola, fresh fruit, coconut flakes'
        ],
        instructions: [
            'Combine frozen banana, mixed berries, almond milk, and chia seeds in a blender.',
            'Blend until smooth and creamy. If too thick, add a little more almond milk.',
            'Pour into a bowl and top with your favorite toppings.'
        ]
    },
    {
        id: '5',
        name: 'White Chocolate Chip Cookies',
        category: 'dessert',
        image: './pictures/cookieswhite.webp', 
        ingredients: [
            '1 cup (2 sticks) unsalted butter, softened',
            '¾ cup granulated sugar',
            '¾ cup packed light brown sugar',
            '2 large eggs',
            '1 tsp vanilla extract',
            '2 ¼ cups all-purpose flour',
            '1 tsp baking soda',
            '½ tsp salt',
            '1 ½ cups white chocolate chips'
        ],
        instructions: [
            'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
            'In a large bowl, cream together butter, granulated sugar, and brown sugar until light and fluffy.',
            'Beat in the eggs one at a time, then stir in the vanilla extract.',
            'In a separate bowl, whisk together flour, baking soda, and salt. Gradually add to the wet ingredients, mixing until just combined.',
            'Stir in the chocolate chips.',
            'Drop rounded spoonfuls of dough onto the prepared baking sheets.',
            'Bake for 9-11 minutes, or until the edges are golden brown and the centers are still soft. Let cool on the baking sheets for a few minutes before transferring to a wire rack to cool completely.'
        ]
    },
    {
        id: '6',
        name: 'Pernil (Pulled Pork)',
        category: 'dinner',
        image: './pictures/pernil.jpg', 
        ingredients: [
            '1 (8-10 pound) pork shoulder (pernil), skin on, bone-in',
            '1 head garlic, peeled (about 10-12 cloves)',
            '2 tablespoons olive oil',
            '1 tablespoon dried oregano',
            '1 tablespoon ground cumin',
            '1 tablespoon salt',
            '1 teaspoon black pepper',
            '½ cup white vinegar',
            '¼ cup water',
            'Optional: Adobo seasoning (replace some salt/pepper with adobo to taste)'
        ],
        instructions: [
            'Halve the avocados, remove the pit, and scoop the flesh into a medium bowl.',
            'Mash the avocado with a fork until desired consistency.',
            'Stir in red onion, jalapeño (if using), cilantro, and lime juice. Season with salt.',
            'Serve immediately with tortilla chips or as a topping.'
        ]
    }
];




//  Helper functions are below here like creating, rendering etc..


function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.dataset.id = recipe.id; // have an ID to store for easy lookup

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-card-content">
            <h3>${recipe.name}</h3>
            <button class="view-recipe-btn">View Recipe</button>
        </div>
    `;

   
    card.querySelector('.view-recipe-btn').addEventListener('click', () => {
        showRecipeDetails(recipe);
    });

    return card;
}

// this function will render recipes to the DOM
function renderRecipes(filteredRecipes) {
    recipeList.innerHTML = ''; // just to empty out the previous recipe 

    if (filteredRecipes.length === 0) {
        noRecipesFoundMessage.style.display = 'block'; 
    } else {
        noRecipesFoundMessage.style.display = 'none'; 
        filteredRecipes.forEach(recipe => {
            const card = createRecipeCard(recipe);
            recipeList.appendChild(card);
        });
    }
}

// function to filter recipes based on search term and category
function filterAndSearchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategoryBtn = document.querySelector('.filter-btn.active');
    const selectedCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : 'all'; 

    let filtered = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchTerm) ||
                              recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderRecipes(filtered);
}

// function to show recipe details in the modal
function showRecipeDetails(recipe) {
    modalTitle.textContent = recipe.name;
    modalImage.src = recipe.image;
    modalImage.alt = recipe.name;

    modalIngredients.innerHTML = ''; // same as before, just to clear previous ingredients
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
    });

    modalInstructions.innerHTML = ''; 
    recipe.instructions.forEach((instruction, index) => {
        const li = document.createElement('li');
        li.textContent = instruction;
        modalInstructions.appendChild(li);
    });

    recipeModal.style.display = 'block'; // shows the modal
}

// closing modal
function closeRecipeModal() {
    recipeModal.style.display = 'none';
}

//Event Listeners 

// search input listener 
searchInput.addEventListener('input', filterAndSearchRecipes);

// search button listener 
searchBtn.addEventListener('click', filterAndSearchRecipes);

// category filter buttons listener
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from previous button
        const currentActive = document.querySelector('.filter-btn.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        
        button.classList.add('active');
        filterAndSearchRecipes(); // re-filter recipes
    });
});

closeBtn.addEventListener('click', closeRecipeModal);

// closes modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === recipeModal) {
        closeRecipeModal();
    }
});

//Initially Loaded 
// Render all recipes when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(recipes); 
});