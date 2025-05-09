// src/pages/Attendance.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Attendance = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      name: "Yamini",
      id: "EMP001",
      department: "Development",
      designation: "Software Engineer",
      attendance: {
        present: 22,
        absent: 1,
        leaves: 2
      }
    },
    {
      name: "Bharathi",
      id: "EMP002",
      department: "Development",
      designation: "Senior Developer",
      attendance: {
        present: 23,
        absent: 0,
        leaves: 2
      }
    },
    {
      name: "Naheda",
      id: "EMP003",
      department: "Development",
      designation: "Software Engineer",
      attendance: {
        present: 22,
        absent: 1,
        leaves: 2,
        "12/12/2023": {
          present: true,
          absent: false,
          leaves: false
        }
        
        }
      } ,
    {
      name: "Madhuri",
      id: "EMP004",
      department: "Development",
      designation: "Software Engineer",
      attendance: {
        present: 22,
        absent: 1,
        leaves: 2
      }
    },
    {
      name: "Akhil",
      id: "EMP005",
      department: "Development",
      designation: "Software Engineer",
      attendance: {
        present: 21,
        absent: 2,
        leaves: 2
      }
    },
    {
      name: "Sirisha",
      id: "EMP006",
      department: "Development",
      designation: "Software Engineer",
      attendance: {
        present: 20,
        absent: 3,
        leaves: 2
      }
    }
  ];

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-800">Attendance Tracker</h2>
        <Link
          to="/"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          ⬅ Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Employee List */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Team Members</h3>
          <ul className="space-y-2">
            {employees.map((employee) => (
              <li 
                key={employee.id} 
                className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors"
                onClick={() => handleEmployeeClick(employee)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{employee.name}</span>
                  <span className="text-sm text-gray-500">{employee.id}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Employee Details */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold mb-4">Employee Details</h3>
          {selectedEmployee ? (
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-purple-800 mb-2">{selectedEmployee.name}</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Employee ID</p>
                    <p className="font-medium">{selectedEmployee.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Department</p>
                    <p className="font-medium">{selectedEmployee.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Designation</p>
                    <p className="font-medium">{selectedEmployee.designation}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-3">Monthly Attendance</h5>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-100 p-2 rounded">
                    <p className="text-green-800 font-bold">{selectedEmployee.attendance.present}</p>
                    <p className="text-sm text-green-600">Present</p>
                  </div>
                  <div className="bg-red-100 p-2 rounded">
                    <p className="text-red-800 font-bold">{selectedEmployee.attendance.absent}</p>
                    <p className="text-sm text-red-600">Absent</p>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded">
                    <p className="text-yellow-800 font-bold">{selectedEmployee.attendance.leaves}</p>
                    <p className="text-sm text-yellow-600">Leaves</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Select an employee to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
