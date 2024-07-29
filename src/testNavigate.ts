// src/testNavigate.ts

import { useNavigate } from 'react-router-dom';

const TestComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <button onClick={goToHome}>Go Home</button>
  );
};

export default TestComponent;
