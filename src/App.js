

import React, { useState } from 'react';
import AppRoutes from './routes';

const App = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCreate = (data) => {
    setCars([...cars, data]);
  };

  const handleUpdate = (data) => {
    const updatedCars = cars.map((car) => (car.id === data.id ? data : car));
    setCars(updatedCars);
    setSelectedCar(null);
  };

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  return (
    <div>
      <AppRoutes />
    </div>

  );
};

export default App;
