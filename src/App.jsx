import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'
import photo from '../public/images/photoplaceholder.png'

function App() {
  
  const [currentEmployee, setCurrentEmployee] = useState({
    name: 'FirstName LastName',
    role: 'Job Title',
    img: photo, 
    email : 'placeholder@abbott.edu', 
  })

  function handleUserClick(employeeObject) {
    //SELECTING A USER IN THE LIST
    //UPDATING THE RIGHT SIDE OF THE PAGE FOR THAT INFORMATION
    // console.log(employeeObject)
    setCurrentEmployee(employeeObject)
  }

  return (
   <div className='App'>
    <Homepage handleUserClick = {handleUserClick}/>
    <EmployeePage employee = {currentEmployee}/>
   </div>
  )
}

export default App
