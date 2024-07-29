// src/services/propertyService.ts

import axios from 'axios';

const API_URL = 'http://localhost:80/api/'; // Cambia esta URL según la configuración de tu API

interface Property {
  id?: number;
  property_type?: string;
  price?: number;
  size?: number;
  [key: string]: any; // Para permitir otros campos
}

export const fetchProperties = async (filters: any = {}, page: number = 1) => {
  const response = await axios.get(`${API_URL}properties/`, {
    params: { ...filters, page },
  });
  return response.data;
};

export const fetchPropertyById = async (id: number) => {
  const response = await axios.get(`${API_URL}properties/${id}/`);
  return response.data;
};

export const createProperty = async (property: Property) => {
  const response = await axios.post(`${API_URL}properties/`, property);
  return response.data;
};

export const updateProperty = async (id: number, property: Property) => {
  const response = await axios.put(`${API_URL}properties/${id}/`, property);
  return response.data;
};

export const bulkCreateProperties = async (properties: Property[]) => {
  const response = await axios.post(`${API_URL}bulk_create/`, properties);
  return response.data;
};
