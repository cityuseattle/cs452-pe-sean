import React from "react";
import { Link } from "react-router-dom";
import { getCities } from "./citiesData";

export default function CitiesList() {
  const cities = getCities();

  return (
    <div className="cities-container">
      <section className="list-section">
        <h2>Cities List</h2>
        <ul className="cities-list">
          {cities.map(city => (
            <li key={city.id}>
              <Link to={`/cities/${city.id}`}>
                {city.name} — {city.country}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="details-section">
        <h2>City Details</h2>
        <p>Select a city from the list to view its details here.</p>
      </section>
    </div>
  );
}
