import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(term);
  }

  return (
    <div className="search-area">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="search-input"
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="quick-buttons">
        <button onClick={() => onSearch("chicken")}>Chicken</button>
        <button onClick={() => onSearch("beef")}>Beef</button>
        <button onClick={() => onSearch("vegetarian")}>Vegetarian</button>
      </div>
    </div>
  );
}
