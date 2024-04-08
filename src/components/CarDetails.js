import React from 'react';
import '../assets/styles/CarDetails.css';

const CarDetails = ({ car }) => {
  return (
    <div>
      <h2>Car Details</h2>
      <p><strong>Make:</strong> {car.make}</p>
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Color:</strong> {car.color}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CarDetails;
