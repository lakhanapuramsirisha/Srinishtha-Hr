import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const handleEmployeeClick = (name) => {
    console.log(`Clicked on employee: ${name}`);
    // Add your click handling logic here
  };

  return (
    <div className="card">
  <h3>Employee Directory</h3>
  <p>Access and manage your team members' information</p>


    <div className="org-chart">
      <div className="manager">
        <h2>Sriniskhtha Technology</h2>
      </div>
      <div className="employees">
        {['Bharathi', 'Yamini', 'Naheda', 'Madhuri', 'Akhil', 'Sirisha'].map((name) => (
          <div 
            key={name} 
            className="employee"
            onClick={() => handleEmployeeClick(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Dashboard;