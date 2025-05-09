import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Sidebar() {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState([]);

  const menuItems = [
    {
      label: 'HR',
      icon: '👥',
      submenu: [
        { label: 'Dashboard', path: '/' },
        { label: 'Employee Directory', path: '/employee-directory' },
        { label: 'Onboarding & Exit', path: '/onboarding' },
        { label: 'Attendance', path: '/attendance' }
      ]
    },
    {
      label: 'Time Management',
      icon: '⏰',
      path: '/time-management'
    },
    {
      label: 'Leave Management',
      icon: '📅',
      path: '/leave-management'
    },
    {
      label: 'Performance',
      icon: '📈',
      submenu: [
        { label: 'Reviews', path: '/performance/reviews' },
        { label: 'Goals', path: '/performance/goals' },
      ]
    }
  ];

  const toggleMenu = (label) => {
    setExpandedMenus(prev =>
      prev.includes(label)
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderMenuItem = (item) => {
    const isExpanded = expandedMenus.includes(item.label);
    const isActive = item.path === location.pathname;
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    if (hasSubmenu) {
      return (
        <div key={item.label} className="space-y-2">
          <button
            onClick={() => toggleMenu(item.label)}
            className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors hover:bg-purple-800`}
          >
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <span className="transform transition-transform">
              {isExpanded ? '▼' : '▶'}
            </span>
          </button>
          {isExpanded && (
            <div className="ml-6 space-y-2">
              {item.submenu.map(subItem => (
                <Link
                  key={subItem.path}
                  to={subItem.path}
                  className={`block p-2 rounded-lg transition-colors ${location.pathname === subItem.path ? 'bg-purple-700 text-white' : 'hover:bg-purple-800'}`}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${isActive ? 'bg-purple-700 text-white' : 'hover:bg-purple-800'}`}
      >
        <span>{item.icon}</span>
        {item.label}
      </Link>
    );
  };

  return (
    <div className="bg-purple-900 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-10">Srinishtha HR</h1>
        <nav className="space-y-4">
          {menuItems.map(renderMenuItem)}
        </nav>
      </div>
      <div className="text-sm text-purple-200">
        <div className="mb-1">HR Admin</div>
        <div>admin@srinishtha.com</div>
      </div>
    </div>
  );
}
  