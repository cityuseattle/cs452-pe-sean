import { useParams } from "react-router-dom";

export default function RecipeItem({ recipes }) {
  const { id } = useParams();

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <p>Select a recipe to see details.</p>;
  }

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h3>{recipe.name}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p>{recipe.details}</p>
    </div>
  );
}
