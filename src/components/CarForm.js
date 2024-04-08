import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

// . -> Current Directory (components)
// .. -> One Directory Level Higher (src)
import '../assets/styles/CarForm.css'; // Import CSS file

const CarForm = ({ cars, onSubmit, onUpdate }) => {
  
  const { carId } = useParams();

  const car = cars.filter(car => car.id == carId)
  
  const { register, handleSubmit } = useForm({ defaultValues: car[0] });

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    onSubmit(data);
    navigate('/datatable');
  };

  const onUpdateHandler = (data) => {
    onUpdate(data);
    navigate('/datatable');
  }

  return (
    <div className="car-form">
      <h2>{carId ? 'Update Car' : 'Create Car'}</h2>
      <form onSubmit={carId ? handleSubmit(onUpdateHandler) : handleSubmit(onSubmitHandler)}>
        <div>
          <label>Make:</label>
          <input type="text" {...register('make', { required: true })} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" {...register('model', { required: true })} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" {...register('year', { required: true })} />
        </div>
        <div>
          <label>Color:</label>
          <input type="text" {...register('color', { required: true })} />
        </div>
        <button type="submit">{carId ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CarForm;
