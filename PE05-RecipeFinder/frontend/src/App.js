import React, { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

  async function fetchRecipes(term) {
    if (!term) return;

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );

    const data = await response.json();
    setRecipes(data.meals || []); // meals can be null
  }

  return (
    <div className="container">
      <h1>🍽️ Recipe Finder</h1>

      <Search onSearch={fetchRecipes} />

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
