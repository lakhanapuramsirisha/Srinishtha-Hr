import { useState } from "react";

const OnboardingExit = () => {
  const [activeTab, setActiveTab] = useState("onboarding");
  const [onboardingData, setOnboardingData] = useState({
    name: "",
    email: "",
    contact: "",
    department: "",
    designation: "",
    joiningDate: "",
    employeeId: "",
    address: ""
  });

  const [exitData, setExitData] = useState({
    employeeId: "",
    name: "",
    department: "",
    lastDay: "",
    reason: "",
    notes: ""
  });

  const [savedOnboarded, setSavedOnboarded] = useState([]);
  const [savedExited, setSavedExited] = useState([]);

  const handleOnboardingSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    for (const key in onboardingData) {
      if (!onboardingData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }
    setSavedOnboarded([...savedOnboarded, onboardingData]);
    alert("Onboarding submitted!");
    setOnboardingData({
      name: "",
      email: "",
      contact: "",
      department: "",
      designation: "",
      joiningDate: "",
      employeeId: "",
      address: ""
    });
  };

  const handleExitSubmit = (e) => {
    e.preventDefault();
    for (const key in exitData) {
      if (!exitData[key]) {
        alert(`Please fill in ${key}`);
        return;
      }
    }
    setSavedExited([...savedExited, exitData]);
    alert("Exit submitted!");
    setExitData({
      employeeId: "",
      name: "",
      department: "",
      lastDay: "",
      reason: "",
      notes: ""
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Onboarding & Exit</h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("onboarding")}
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "onboarding" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          🟢 Onboarding
        </button>
        <button
          onClick={() => setActiveTab("exit")}
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "exit" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          🔴 Exit
        </button>
      </div>

      {/* ONBOARDING FORM */}
      {activeTab === "onboarding" && (
        <form onSubmit={handleOnboardingSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">New Employee Details</h3>
          <input className="input" placeholder="Full Name" value={onboardingData.name} onChange={(e) => setOnboardingData({ ...onboardingData, name: e.target.value })} />
          <input className="input" placeholder="Email Address" type="email" value={onboardingData.email} onChange={(e) => setOnboardingData({ ...onboardingData, email: e.target.value })} />
          <input className="input" placeholder="Contact Number" value={onboardingData.contact} onChange={(e) => setOnboardingData({ ...onboardingData, contact: e.target.value })} />
          <input className="input" placeholder="Department" value={onboardingData.department} onChange={(e) => setOnboardingData({ ...onboardingData, department: e.target.value })} />
          <input className="input" placeholder="Designation" value={onboardingData.designation} onChange={(e) => setOnboardingData({ ...onboardingData, designation: e.target.value })} />
          <input className="input" type="date" value={onboardingData.joiningDate} onChange={(e) => setOnboardingData({ ...onboardingData, joiningDate: e.target.value })} />
          <input className="input" placeholder="Employee ID" value={onboardingData.employeeId} onChange={(e) => setOnboardingData({ ...onboardingData, employeeId: e.target.value })} />
          <textarea className="input" placeholder="Address" value={onboardingData.address} onChange={(e) => setOnboardingData({ ...onboardingData, address: e.target.value })}></textarea>
          <button type="submit" className="btn-primary">Submit Onboarding</button>
        </form>
      )}

      {/* EXIT FORM */}
      {activeTab === "exit" && (
        <form onSubmit={handleExitSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Exit Details</h3>
          <input className="input" placeholder="Employee ID" value={exitData.employeeId} onChange={(e) => setExitData({ ...exitData, employeeId: e.target.value })} />
          <input className="input" placeholder="Full Name" value={exitData.name} onChange={(e) => setExitData({ ...exitData, name: e.target.value })} />
          <input className="input" placeholder="Department" value={exitData.department} onChange={(e) => setExitData({ ...exitData, department: e.target.value })} />
          <input className="input" type="date" value={exitData.lastDay} onChange={(e) => setExitData({ ...exitData, lastDay: e.target.value })} />
          <select className="input" value={exitData.reason} onChange={(e) => setExitData({ ...exitData, reason: e.target.value })}>
            <option value="">Select Exit Reason</option>
            <option>Voluntary</option>
            <option>Termination</option>
            <option>Retirement</option>
          </select>
          <textarea className="input" placeholder="Exit Feedback / Notes" value={exitData.notes} onChange={(e) => setExitData({ ...exitData, notes: e.target.value })}></textarea>
          <button type="submit" className="btn-primary">Submit Exit</button>
        </form>
      )}
    </div>
  );
};

export default OnboardingExit;
