import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import RecipeItem from "./components/RecipeItem";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (query) => {
    const mockRecipes = [
      {
        id: "1",
        name: "Chicken Alfredo",
        category: "Chicken",
        details: "Creamy chicken pasta.",
      },
      {
        id: "2",
        name: "Beef Tacos",
        category: "Beef",
        details: "Spicy beef tacos.",
      },
      {
        id: "3",
        name: "Vegetable Stir Fry",
        category: "Vegetarian",
        details: "Mixed veggies with sauce.",
      },
    ];

    const filtered = mockRecipes.filter(
      (r) =>
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.category.toLowerCase().includes(query.toLowerCase())
    );

    setRecipes(filtered);
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <Search onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<RecipeList recipes={recipes} />}>
          <Route
            path="recipes/:id"
            element={<RecipeItem recipes={recipes} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
