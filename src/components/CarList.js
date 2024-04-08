import React from 'react';
import '../assets/styles/CarList.css';

const CarList = ({ cars }) => {
  return (
    <div>
      <h2>Car Inventory</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <strong>{car.make} {car.model}</strong> - {car.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
