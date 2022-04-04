import './App.css'
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./components/EmployeePage"
import { useState } from "react";
// import employeeArr from "./data";
import EmployeeHomePage from './pages/EmployeeList';
import Show from './pages/EmployeeList'
export default function App (){
  const [employeeInfo, setEmployeeInfo] = useState({})

  const getEmployee = (data) => {
    setEmployeeInfo(data)
  }
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<EmployeeHomePage getInfo = {getEmployee} />}/>
              <Route path="/:id" element={<EmployeePage info={employeeInfo}/>}/>
          </Routes>
      </div>
  )
}