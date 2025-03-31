// Fitness Quotes data
const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Strive for progress, not perfection.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "The only way to do great work is to love what you do.",
  "Don't wish for it, work for it.",
];

// Healthy Recipes data
const recipes = [
  "Quinoa Salad with Avocado and Chickpeas",
  "Grilled Salmon with Asparagus and Lemon",
  "Vegetable Stir-Fry with Tofu",
  "Greek Yogurt Parfait with Berries and Granola",
  "Mediterranean Chickpea Salad",
];

// Function to rotate fitness quotes
function rotateQuotes() {
  const quoteElement = document.querySelector('.quote');
  let index = 0;
  setInterval(() => {
    quoteElement.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }, 5000); // Rotate every 5 seconds
}

// Function to display healthy recipe of the week
function displayRecipeOfTheWeek() {
  const recipeElement = document.querySelector('.recipe');
  let index = 0;
  setInterval(() => {
    recipeElement.textContent = recipes[index];
    index = (index + 1) % recipes.length;
  }, 86400000); // Change recipe every day (86400000 milliseconds = 1 day)
}

// Call functions
rotateQuotes();
displayRecipeOfTheWeek();
