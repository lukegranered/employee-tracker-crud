import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AddEmployee } from './AddEmployee';
import { AllEmployees } from './AllEmployees';

export const HomePage = () => {
  const navigate = useNavigate();

  const navigateToAdd = () => {
    navigate('/add');
  };

  const navigateToAll = () => {
    navigate('/all');
  };

  return (
    <div>
        <h1>EMPLOYEE TRACKER</h1>
        <div>
            <button onClick={navigateToAdd}>ADD EMPLOYEE</button>
            <button onClick={navigateToAll}>VIEW ALL EMPLOYEES</button>
        </div>

        <Routes>
          <Route path='/add' element={<AddEmployee />} />
          <Route path='/all' element={<AllEmployees />} />
        </Routes>

    </div>
  )
}
