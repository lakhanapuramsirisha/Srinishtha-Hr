import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import LeaveManagement from './pages/LeaveManagement'
import TimeManagent from './pages/TimeManagement'
import HrManagement from './pages/HrManagement'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="hr-management/*" element={<HrManagement />} />
          <Route path="leave-management/*" element={<LeaveManagement />} />
          <Route path="time-management/*" element={<TimeManagent />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
