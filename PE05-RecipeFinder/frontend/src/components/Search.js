import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>

      <div style={{ marginTop: "10px" }}>
        <button type="button" onClick={() => onSearch("chicken")}>Chicken</button>
        <button type="button" onClick={() => onSearch("beef")}>Beef</button>
        <button type="button" onClick={() => onSearch("vegetarian")}>Vegetarian</button>
      </div>
    </form>
  );
}
