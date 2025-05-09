export default function Header() {
    return (
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <h2 className="text-2xl font-bold">HR Hub Dashboard</h2>
          <p className="text-gray-500">Welcome to Srinishtha Human Hub</p>
        </div>
        <div className="text-sm text-gray-500">
          Last updated: <span className="bg-gray-100 px-2 py-1 rounded">Today, 9:41 AM</span>
        </div>
      </div>
    );
  }
  