import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPropertyById, updateProperty } from '../services/propertyService';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (id) {
        try {
          const data = await fetchPropertyById(parseInt(id));
          setProperty(data);
        } catch (error) {
          console.error('Error fetching property:', error);
        }
      }
    };

    fetchProperty();
  }, [id]);

  const handleUpdate = async (updatedProperty: Property) => {
    if (id) {
      try {
        await updateProperty(parseInt(id), updatedProperty);
        navigate('/properties'); // Redirige a la lista de propiedades u otra página
      } catch (error) {
        console.error('Error updating property:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (property) {
      setProperty({
        ...property,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <h1>Property Details</h1>
      {property ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          if (property) handleUpdate(property);
        }}>
          <input type="text" name="property_type" value={property.property_type} onChange={handleChange} />
          <input type="number" name="price" value={property.price} onChange={handleChange} />
          <input type="number" name="size" value={property.size} onChange={handleChange} />
          <button type="submit">Update Property</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyDetailPage;
