import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Dashboard from './pages/Hr/Dashboard'
// Update the import path for Onboarding
import Onboarding from './pages/Hr/Onboarding'
import Attendance from './pages/Hr/Attendance'
import EmployeeDirectory from './pages/Hr/EmployeeDirectory'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
