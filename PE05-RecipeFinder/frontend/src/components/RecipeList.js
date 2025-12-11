import React from "react";
import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="no-results">Search for a recipe above!</p>;
  }

  return (
    <div className="recipe-grid">
      {recipes.map((meal) => (
        <RecipeItem key={meal.idMeal} recipe={meal} />
      ))}
    </div>
  );
}
