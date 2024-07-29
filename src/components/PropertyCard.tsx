// src/components/PropertyCard.jsx

import React from 'react';

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p>${property.price}</p>
    </div>
  );
}

export default PropertyCard;
