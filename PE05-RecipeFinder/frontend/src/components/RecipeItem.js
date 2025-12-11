import React from "react";

export default function RecipeItem({ recipe }) {
  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb}
        className="recipe-img"
        alt={recipe.strMeal}
      />

      <h3>{recipe.strMeal}</h3>

      <p>Category: {recipe.strCategory}</p>

      <a
        href={recipe.strSource || recipe.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
        className="recipe-link"
      >
        View Full Recipe
      </a>
    </div>
  );
}
