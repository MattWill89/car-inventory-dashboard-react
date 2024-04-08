import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddCarForm from './components/AddCarForm';
import CarDetails from './components/CarDetails';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import DataTable from './components/DataTable';
import SignOut from './components/SignOut';
import NavBar from './components/NavBar';


// Assuming you have a variable to track whether the user is signed in or not
const isAuthenticated = true; // You need to implement proper logic for this

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     isAuthenticated === true
//       ? <Component {...props} />
//       : <redirect to='/signin' />
//   )} />
// );

// const onSignUp = (user) => {
//   console.log(user)
// }


const AppRoutes = () => {

  // This will be replaced by a DB of Cars
  const inventory = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      year: 2008,
      color: "Red"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2015,
      color: "Blue"
    },
    {
      id: 3,
      make: "Kia",
      model: "Soul",
      year: 2012,
      color: "Yellow"
    }
  ]

  // Temporary User List
  const users = [
    {
      username: "Testing123",
      email: "Testing123@gmail.com",
      password: "Testing123"
    },
    {
      username: "Testing456",
      email: "Testing456@gmail.com",
      password: "Testing456"
    }
  ]

  // Create a State to manage the latest inventory of Cars
  const [carList, setCarList] = useState(inventory)

  // Create a State to manage the latest list of Users
  const [userList, setUserList] = useState(users)

  const [errorMessage, setErrorMessage] = useState("")

  const [signedInUser, setSignedInUser] = useState({})

  const navigate = useNavigate()

  // Add new cars to carList state
  const onSubmit = (carToAdd) => {
    setCarList([...carList, carToAdd])
  }

  const onUpdate = (data) => {

    // Find Car To Be Updated
    let filteredList = carList.filter((car) => car.id == data.id)
    let carToBeUpdated = filteredList[0]

    // Take Form Values To Create a New Car Object
    let updatedCar = {
      id: data.id,
      make: data.make,
      model: data.model,
      year: data.year,
      color: data.color
    }

    // Determine Index of carToBeUpdated inside carList
    const index = carList.findIndex(car => car === carToBeUpdated)

    // Create a Copy of carList State
    const updatedCarList = [...carList]

    // Find / Replace carToBeUpdated with updatedCar
    updatedCarList[index] = updatedCar

    // Update carList State With Latest List That Reflects Updates
    setCarList(updatedCarList)
  }

  // Remove cars from carList state
  const onDeleteCar = (carToDelete) => {
    
    // Filter out all cars whose ids
    // do not match the id of the car
    // to remove
    let result = carList.filter((car) => car.id !== carToDelete.id)

    setCarList(result)
  }

  const onSignIn = (email, password) => {
    const filteredUserList = userList.filter(user => user.email === email)
    
    const foundUser = filteredUserList[0]

    if (foundUser && foundUser.password === password) {
      setSignedInUser(foundUser)
      navigate('/datatable')
    } else {
      const error = "Wrong Username or Password"
      setErrorMessage(error)
    }
  }

  const onSignUp = (userToAdd) => {
    setUserList([...userList, userToAdd]);
    setSignedInUser(userToAdd);
    navigate('/datatable');
  }

  const onSignOut = () => {
    setSignedInUser({})
    navigate('/signin')
  }

  return (
    <>
      <NavBar signedInUser={signedInUser} onSignOut={onSignOut} />
      <Routes>
        <Route exact path="/signin" Component={() => <SignIn onSignIn={onSignIn} errorMessage={errorMessage} />} />
        <Route exact path="/signup" Component={() => <SignUp onSignUp={onSignUp} />} />
        <Route exact path="/addcarform" Component={() => 
          <CarForm cars={carList} onSubmit={onSubmit} />
        }/>
        <Route exact path="/update/:carId" Component={() =>
          <CarForm cars={carList} onUpdate={onUpdate} />
        }/>

        <Route exact path="/datatable" Component={() => 
          <DataTable data={carList} onDeleteCar={onDeleteCar} signedInUser={signedInUser}/>
        } />
        <Route exact path="/signout" Component={SignOut} />
      </Routes>
    </>
  );
};

export default AppRoutes;
