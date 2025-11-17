import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import CitiesList from "./CitiesList";
import CityDetails from "./CityDetails";
import AddCity from "./AddCity";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CitiesList />} />
        <Route path="cities/:id" element={<CityDetails />} />
        <Route path="add" element={<AddCity />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
