import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5050/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal || recipe.name}</h2>

      {recipe.strMealThumb && (
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ width: "300px" }}
        />
      )}

      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Area:</strong> {recipe.strArea}</p>

      <p>
        <strong>Instructions:</strong><br />
        {recipe.strInstructions}
      </p>
    </div>
  );
}
