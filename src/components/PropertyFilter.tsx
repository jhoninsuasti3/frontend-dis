// src/components/PropertyFilter.jsx

import React, { useState } from 'react';

function PropertyFilter({ onFilter }) {
  const [type, setType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ type, minPrice, maxPrice });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de propiedad:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <label>
        Precio mínimo:
        <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      </label>
      <label>
        Precio máximo:
        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </label>
      <button type="submit">Filtrar</button>
    </form>
  );
}

export default PropertyFilter;
