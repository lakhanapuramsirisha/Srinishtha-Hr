import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const WorklogAnalytics = () => {
  const [timeRange, setTimeRange] = useState('weekly'); // 'weekly', 'monthly', or 'yearly'

  // Sample data for weekly view
  const weeklyData = [
    { day: 'Mon', hours: 7.5 },
    { day: 'Tue', hours: 8.0 },
    { day: 'Wed', hours: 6.5 },
    { day: 'Thu', hours: 7.0 },
    { day: 'Fri', hours: 5.5 }
  ];

  // Sample data for monthly view
  const monthlyData = [
    { day: 'Week 1', hours: 35.5 },
    { day: 'Week 2', hours: 38.0 },
    { day: 'Week 3', hours: 32.5 },
    { day: 'Week 4', hours: 34.0 }
  ];

  // Sample data for yearly view (all months, but data only up to June)
  const yearlyData = [
    { day: 'Jan', hours: 140 },
    { day: 'Feb', hours: 132 },
    { day: 'Mar', hours: 145 },
    { day: 'Apr', hours: 138 },
    { day: 'May', hours: 142 },
    { day: 'Jun', hours: 0 },
    { day: 'Jul', hours: 0 },
    { day: 'Aug', hours: 0 },
    { day: 'Sep', hours: 0 },
    { day: 'Oct', hours: 0 },
    { day: 'Nov', hours: 0 },
    { day: 'Dec', hours: 0 }
  ];

  // Project distribution data
  const projectData = useMemo(() => {
    if (timeRange === 'weekly') {
      return [
        { name: 'Project Alpha', hours: 22.5 },
        { name: 'Internal Work', hours: 8.0 },
        { name: 'Client Beta', hours: 4.0 }
      ];
    } else if (timeRange === 'monthly') {
      return [
        { name: 'Project Alpha', hours: 85.0 },
        { name: 'Internal Work', hours: 32.0 },
        { name: 'Client Beta', hours: 23.0 }
      ];
    } else {
      // Total hours from Jan to May: 697 (140 + 132 + 145 + 138 + 142)
      return [
        { name: 'Project Alpha', hours: 320 },  // ~46% of total hours
        { name: 'Internal Work', hours: 180 },   // ~26% of total hours
        { name: 'Client Beta', hours: 140 },     // ~20% of total hours
        { name: 'Documentation', hours: 57 }     // ~8% of total hours
      ];
    }
  }, [timeRange]);

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  // Get current data based on time range
  const currentData = timeRange === 'weekly' ? weeklyData : timeRange === 'monthly' ? monthlyData : yearlyData;

  // Calculate statistics based on current time range
  const totalHours = currentData.reduce((sum, day) => sum + day.hours, 0);
  
  // Period-specific calculations
  const getStatistics = () => {
    if (timeRange === 'weekly') {
      return {
        averageLabel: 'Daily Average',
        average: (totalHours / 5).toFixed(1), // 5 working days
        periodLabel: 'Most Productive Day',
        targetLabel: 'Weekly Target',
        target: '40.0',
        completion: ((totalHours / 40) * 100).toFixed(1)
      };
    } else if (timeRange === 'monthly') {
      return {
        averageLabel: 'Weekly Average',
        average: (totalHours / 4).toFixed(1), // 4 weeks
        periodLabel: 'Most Productive Week',
        targetLabel: 'Monthly Target',
        target: '160.0',
        completion: ((totalHours / 160) * 100).toFixed(1)
      };
    } else {
      const currentMonth = 6; // June
      return {
        averageLabel: 'Monthly Average',
        average: (totalHours / currentMonth).toFixed(1), // divide by number of months so far
        periodLabel: 'Most Productive Month',
        targetLabel: 'Year-to-Date Target',
        target: (160 * currentMonth).toFixed(1), // 160 hours * months elapsed
        completion: ((totalHours / (160 * currentMonth)) * 100).toFixed(1)
      };
    }
  };

  const stats = getStatistics();
  const mostActiveDay = currentData.reduce((max, day) => day.hours > max.hours ? day : max);
  const primaryProject = projectData.reduce((max, project) => project.hours > max.hours ? project : max);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Time Range Selection */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setTimeRange('weekly')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Weekly Report
        </button>
        <button
          onClick={() => setTimeRange('monthly')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Monthly Report
        </button>
        <button
          onClick={() => setTimeRange('yearly')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${timeRange === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Yearly Report
        </button>
      </div>

      {/* Hours Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          {timeRange === 'weekly' ? 'Weekly' : timeRange === 'monthly' ? 'Monthly' : 'Yearly'} Hours
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Your logged hours for the {timeRange === 'weekly' ? 'current week' : timeRange === 'monthly' ? 'current month' : 'current year'}
        </p>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis domain={[0, timeRange === 'weekly' ? 8 : timeRange === 'monthly' ? 40 : 160]} />
              <Tooltip />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Project Distribution</h2>
          <p className="text-sm text-gray-500 mb-4">Hours by project</p>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="hours"
                  label={({ name, hours }) => `${name} (${hours}h)`}
                >
                  {projectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Summary Statistics</h2>
          <p className="text-sm text-gray-500 mb-4">
            Key metrics for the {timeRange === 'weekly' ? 'week' : timeRange === 'monthly' ? 'month' : 'year'}
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Total Hours</span>
              <span className="text-lg font-semibold">{totalHours.toFixed(1)} hrs</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">{stats.averageLabel}</span>
              <span className="text-lg font-semibold">{stats.average} hrs</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">{stats.periodLabel}</span>
              <span className="text-lg font-semibold">{`${mostActiveDay.day} (${mostActiveDay.hours} hrs)`}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">{stats.targetLabel}</span>
              <span className="text-lg font-semibold">{stats.target} hrs</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Target Completion</span>
              <span className="text-lg font-semibold">{stats.completion}%</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Primary Project</span>
              <span className="text-lg font-semibold">{primaryProject.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorklogAnalytics;