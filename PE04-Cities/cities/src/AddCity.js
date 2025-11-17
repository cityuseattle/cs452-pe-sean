import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCity } from "./citiesData";

export default function AddCity() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    country: "",
    population: "",
    description: ""
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.country) {
      alert("Name and country are required.");
      return;
    }

    addCity({
      id: Date.now().toString(),
      name: form.name,
      country: form.country,
      population: parseInt(form.population || 0, 10),
      description: form.description
    });

    navigate("/");
  }

  return (
    <div className="add-city">
      <h2>Add City</h2>

      <form className="city-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" value={form.name} onChange={handleChange} /></label>
        <label>Country<input name="country" value={form.country} onChange={handleChange} /></label>
        <label>Population<input type="number" name="population" value={form.population} onChange={handleChange} /></label>
        <label>Description<textarea name="description" value={form.description} onChange={handleChange} /></label>
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}
