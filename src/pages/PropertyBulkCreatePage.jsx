// src/pages/PropertyBulkCreatePage.jsx

import React, { useState } from 'react';
import { bulkCreateProperties } from '../services/propertyService';

function PropertyBulkCreatePage() {
  const [properties, setProperties] = useState([]);

  const handleBulkCreate = async () => {
    await bulkCreateProperties(properties);
    // Handle redirection or confirmation
  };

  return (
    <div>
      <h1>Crear propiedades en masa</h1>
      {/* Implement a way to input multiple properties */}
      <button onClick={handleBulkCreate}>Crear propiedades</button>
    </div>
  );
}

export default PropertyBulkCreatePage;
