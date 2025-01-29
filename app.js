// Sample recipe data
const recipes = [
  {
    title: 'Spaghetti Carbonara',
    ingredients: 'Spaghetti, eggs, pancetta, parmesan cheese, garlic, pepper.',
    instructions: 'Boil the spaghetti. Cook the pancetta. Mix eggs with cheese. Combine everything with pepper.',
  },
  {
    title: 'Chicken Curry',
    ingredients: 'Chicken, curry powder, onions, garlic, coconut milk, rice.',
    instructions: 'Fry onions and garlic, add chicken and curry powder. Add coconut milk and cook until tender.',
  }
];

// Function to display recipes
function displayRecipes() {
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerHTML = ''; // Clear existing recipes

  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <button onclick="editRecipe('${recipe.title}')">Edit</button>
      <button onclick="deleteRecipe('${recipe.title}')">Delete</button>
    `;
    
    recipeContainer.appendChild(recipeCard);
  });
}

// Function to add a new recipe
document.getElementById('recipe-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;

  const newRecipe = { title, ingredients, instructions };
  recipes.push(newRecipe);

  displayRecipes();
  clearForm();
});

// Function to clear form after submission
function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('instructions').value = '';
}

// Function to search recipes
function searchRecipes() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm));
  
  const recipeContainer = document.getElementById('recipe-container');
  recipeContainer.innerHTML = ''; // Clear existing recipes

  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    recipeCard.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <button onclick="editRecipe('${recipe.title}')">Edit</button>
      <button onclick="deleteRecipe('${recipe.title}')">Delete</button>
    `;
    
    recipeContainer.appendChild(recipeCard);
  });
}

// Function to edit recipe (will be implemented later)
function editRecipe(title) {
  alert('Edit functionality is under development!');
}

// Function to delete recipe
function deleteRecipe(title) {
  const index = recipes.findIndex(recipe => recipe.title === title);
  if (index !== -1) {
    recipes.splice(index, 1);
    displayRecipes();
  }
}

// Initialize the recipe platform
displayRecipes();
