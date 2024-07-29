import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../services/propertyService';

const PropertyListPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: any }>({});
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties(filters, page);
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    loadProperties();
  }, [filters, page]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <h1>Property List</h1>
      <div>
        <input
          type="text"
          name="property_type"
          placeholder="Filter by type"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="min_price"
          placeholder="Min price"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="max_price"
          placeholder="Max price"
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="size"
          placeholder="Size"
          onChange={handleFilterChange}
        />
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => handlePageChange(page + 1)}>
          Next
        </button>
      </div>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <Link to={`/properties/${property.id}`}>
              {property.property_type} - ${property.price} - {property.size} sq ft
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyListPage;
