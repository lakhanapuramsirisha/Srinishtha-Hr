import React from 'react'

import TimeSheet from './TimeSheet'
import WorklogAnalytics from './WorkLogAnalytics'
import DailyCheckin from './DailyCheckin'
import { Route, Routes } from 'react-router-dom'


function TimeManagent() {
  return (
    <Routes>
          <Route path="/dailycheckin" element={<DailyCheckin  />} />
          <Route path="/timesheet" element={<TimeSheet/>} />
          {/* <Route path="/worklog-analystics" element={<WorklogAnalytics/>} /> */}
          
          
          
    </Routes>
  )
}

export default TimeManagent