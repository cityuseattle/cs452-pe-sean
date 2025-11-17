import React from "react";
import { useParams } from "react-router-dom";
import { getCityById } from "./citiesData";

export default function CityDetails() {
  const { id } = useParams();
  const city = getCityById(id);

  if (!city) {
    return <h3>City not found</h3>;
  }

  return (
    <div className="city-details">
      <h2>{city.name}</h2>
      <p><strong>Country:</strong> {city.country}</p>
      <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
      <p><strong>Description:</strong> {city.description}</p>
    </div>
  );
}
