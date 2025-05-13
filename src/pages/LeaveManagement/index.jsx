import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplicationFlow from './ApplicationFlow'
import LeaveApplicationForm from './LeaveApplicationForm'
import ApprovalFlow from './ApprovalFlow'
import LeaveReport from './LeaveReport' 
import LeaveStatus from './LeaveStatus'
import LeavePolicy from './LeavePolicy'
// import LeaveReport from './LeaveReport'
function LeaveManagement() {
  return (
    <Routes>
          <Route path="/applicationflow" element={<ApplicationFlow  />} />
          <Route path="/approvalflow" element={<ApprovalFlow />} />
          <Route path="/leave-application-form" element={<LeaveApplicationForm />} />
          {/* <Route path='/leavereport' element={<LeaveReport />} /> */}
          <Route path='/leavestatus' element={<LeaveStatus />} />
          <Route path='/leavepolicy' element={<LeavePolicy />} />
          
          
          
    </Routes>
  )
}

export default LeaveManagement