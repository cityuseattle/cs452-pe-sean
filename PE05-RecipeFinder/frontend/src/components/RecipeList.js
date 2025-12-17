import { Link, Outlet } from "react-router-dom";

export default function RecipeList({ recipes = [] }) {
  if (recipes.length === 0) {
    return <p>No recipes found. Try searching above.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
}
