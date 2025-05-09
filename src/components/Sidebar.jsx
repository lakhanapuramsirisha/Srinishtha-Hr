import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: '🏠', label: 'Dashboard' },
    { path: '/employee-directory', icon: '👥', label: 'Employee Directory' },
    { path: '/onboarding', icon: '➕', label: 'Onboarding & Exit' },
    { path: '/attendance', icon: '📅', label: 'Attendance' }
  ];

  return (
    <div className="bg-purple-900 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Srinishtha HR</h1>
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-purple-700 text-white' : 'hover:bg-purple-800'}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="text-sm text-purple-200">
        <div className="mb-1">HR Admin</div>
        <div>admin@srinishtha.com</div>
      </div>
    </div>
  );
}
  