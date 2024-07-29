import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Verifica que `useNavigate` esté importado correctamente
import { createProperty } from '../services/propertyService';

const PropertyCreatePage: React.FC = () => {
  const [property, setProperty] = useState<Property>({
    // Inicializa los campos según tus necesidades
  });
  const navigate = useNavigate();

  const handleCreate = async (newProperty: Property) => {
    try {
      await createProperty(newProperty);
      navigate('/properties'); // Redirige a la lista de propiedades u otra página
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Create Property</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreate(property);
      }}>
        <input type="text" name="property_type" onChange={handleChange} />
        <input type="number" name="price" onChange={handleChange} />
        <input type="number" name="size" onChange={handleChange} />
        <button type="submit">Create Property</button>
      </form>
    </div>
  );
};

export default PropertyCreatePage;
