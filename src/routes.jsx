// src/routes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropertyListPage from './pages/PropertyListPage';
import PropertyDetailPage from './pages/PropertyDetailPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/properties" element={<PropertyListPage />} />
      <Route path="/properties/:id" element={<PropertyDetailPage />} />
    </Routes>
  );
}

export default AppRoutes;
