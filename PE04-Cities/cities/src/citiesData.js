let cities = [
    { id: "1", name: "Seattle", country: "USA", population: 744955, description: "Coastal city in Washington State." },
    { id: "2", name: "Tokyo", country: "Japan", population: 13929286, description: "Capital city with advanced technology." },
    { id: "3", name: "Paris", country: "France", population: 2148271, description: "City of art, culture, and cuisine." }
  ];
  
  export function getCities() {
    return [...cities];
  }
  
  export function getCityById(id) {
    return cities.find(c => c.id === id);
  }
  
  export function addCity(city) {
    cities.push(city);
  }
  