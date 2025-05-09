import { useState } from "react";

const dummyEmployees = [
  {
    id: "EMP001",
    name: "Yamini",
    designation: "UI Developer",
    department: "Frontend",
    email: "yamini@example.com",
    phone: "+91-9876543210",
    joiningDate: "2022-04-15",
    status: "Active",
    location: "Hyderabad",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Yamini"
  },
  {
    id: "EMP002",
    name: "Bharathi",
    designation: "HR Manager",
    department: "HR",
    email: "bharathi@example.com",
    phone: "+91-9988776655",
    joiningDate: "2021-06-01",
    status: "Active",
    location: "Chennai",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Bharathi"
  },
  {
    id: "EMP003",
    name: "Naheda",
    designation: "Software Engineer",
    department: "Backend",
    email: "naheda1@gmail.com",
    phone: "+91-8877665544",
    joiningDate: "2022-02-10",
    status: "Active",
    location: "Chennai",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Naheda"
  },
  {
    id: "EMP004",
    name: "Madhuri",
    designation: "UI Designer",
    department: "Frontend",
    email: "madhuri@gmail.com",
    phone: "+91-7766554433",
    joiningDate: "2023-01-15",
    status: "Active",
    location: "Hyderabad",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Madhuri"
  },
  {
    id: "EMP005",
    name: "Akhil",
    designation: "Software Engineer",
    department: "Backend",
    email: "akhil@gmail.com",
    phone: "+91-6655443322",
    joiningDate: "2023-03-20",
    status: "Active",
    location: "Chennai",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Akhil"
  },
  {
    id: "EMP006",
    name: "Sirisha",
    designation: "UI Designer",
    department: "Frontend",
    email: "sirisha@gmail.com",
    phone: "+91-8877665544",
    joiningDate: "2023-05-02",
    status: "Active",
    location: "Hyderabad",
    manager: "jp sir",
    photo: "https://ui-avatars.com/api/?name=Sirisha"
  }
];

const EmployeeDirectory = () => {
  const [search, setSearch] = useState("");

  const filteredEmployees = dummyEmployees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">Employee Directory</h2>
      <p className="mb-4 text-gray-600">Access and manage your team members' information</p>

      <input
        type="text"
        placeholder="Search by name or ID..."
        className="input mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((emp) => (
          <div key={emp.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-4 mb-4">
              <img src={emp.photo} alt={emp.name} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-xl font-semibold">{emp.name}</h3>
                <p className="text-sm text-gray-500">{emp.designation}</p>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p><strong>ID:</strong> {emp.id}</p>
              <p><strong>Dept:</strong> {emp.department}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Phone:</strong> {emp.phone}</p>
              <p><strong>Joined:</strong> {emp.joiningDate}</p>
              <p><strong>Manager:</strong> {emp.manager}</p>
              <p><strong>Status:</strong> <span className={`font-bold ${emp.status === "Active" ? "text-green-600" : "text-red-600"}`}>{emp.status}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
