import React, { useState } from 'react';
import '../assets/styles/AddCarForm.css';

const AddCarForm = ({ onAddCar, onDeleteCar }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new car object
    const newCar = {
      make: make,
      model: model,
      year: year,
      color: color
    };
    // Pass the new car object to the parent component
    onAddCar(newCar);
    // Reset form fields
    setMake('');
    setModel('');
    setYear('');
    setColor('');
  };

  const handleDelete = () => {
    onDeleteCar(); // Call the onDeleteCar function provided by the parent component
  };

  return (
    <div>
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
        <button type="submit">Add Car</button>
      </form>
      <div>
        <h2>Delete Car</h2>
        <button onClick={handleDelete}>Delete Car</button>
      </div>
    </div>
  );
};

export default AddCarForm;
