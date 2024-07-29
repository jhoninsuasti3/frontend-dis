// src/components/PropertyForm.jsx

import React, { useState } from 'react';

function PropertyForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const [size, setSize] = useState(initialData?.size || '');
  const [propertyType, setPropertyType] = useState(initialData?.propertyType || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, price, size, propertyType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Descripción:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Precio:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Tamaño:
        <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>
      <label>
        Tipo de propiedad:
        <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default PropertyForm;
