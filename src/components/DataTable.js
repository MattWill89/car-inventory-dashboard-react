import React from 'react';
import '../assets/styles/DataTable.css'; 

import { Link } from 'react-router-dom';

const DataTable = ({ data, onDeleteCar, onUpdateCar, signedInUser }) => {
 
  return (
    <div className="data-table">
      <h1>Welcome, {signedInUser.username}!</h1>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Actions</th>
            {/* more column headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((car, index) => (
            <tr key={index}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
              <td>
                <button onClick={() => onDeleteCar(car)}>Delete</button>
                <br />
                <button>
                  <Link to={"/update/" + car.id}>Edit</Link>
                </button>
              </td>
              {/* more cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/addcarform">Add New Car</Link>
    </div>
  );
};

export default DataTable;
