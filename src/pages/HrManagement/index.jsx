import React from 'react'
import Dashboard from './Dashboard'
import OnboardingExit from './Onboarding'
import Attendance from './Attendance'
import EmployeeDirectory from './EmployeeDirectory'
import { Route, Routes } from 'react-router-dom'

function HrManagement() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
          <Route path="/onboarding" element={<OnboardingExit  />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employee-directory" element={<EmployeeDirectory />} />
          
          
    </Routes>
  )
}

export default HrManagement