export default function DashboardCard({ icon, title, description, footer, color = "text-purple-600" }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-xs hover:shadow-lg transition">
        <div className={`${color} text-3xl mb-2`}>{icon}</div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <div className="mt-2 text-sm text-purple-600 font-medium">{footer}</div>
      </div>
    );
  }
  