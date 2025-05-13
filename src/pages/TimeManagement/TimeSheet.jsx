import React, { useState, useEffect } from 'react';

const TimeSheet = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  
  const [entries, setEntries] = useState([
    // Current Week (March 4-8)
    {
      id: 31,
      date: '2024-03-04',
      project: 'Frontend Development',
      hours: 4.5,
      description: 'Implemented new dashboard widgets and data visualization components'
    },
    {
      id: 32,
      date: '2024-03-04',
      project: 'API Integration',
      hours: 3.5,
      description: 'Connected dashboard widgets to backend API endpoints'
    },
    {
      id: 33,
      date: '2024-03-05',
      project: 'Documentation',
      hours: 2.0,
      description: 'Updated technical documentation for new dashboard features'
    },
    {
      id: 34,
      date: '2024-03-05',
      project: 'Code Review',
      hours: 1.5,
      description: 'Reviewed pull requests for dashboard components'
    },
    {
      id: 35,
      date: '2024-03-05',
      project: 'Frontend Development',
      hours: 4.0,
      description: 'Fixed responsive layout issues in dashboard'
    },
    {
      id: 36,
      date: '2024-03-06',
      project: 'API Integration',
      hours: 6.0,
      description: 'Implemented real-time data updates for dashboard'
    },
    {
      id: 37,
      date: '2024-03-06',
      project: 'Documentation',
      hours: 2.0,
      description: 'Created user guide for dashboard features'
    },
    {
      id: 38,
      date: '2024-03-07',
      project: 'Frontend Development',
      hours: 5.5,
      description: 'Added data export functionality to dashboard'
    },
    {
      id: 39,
      date: '2024-03-07',
      project: 'Code Review',
      hours: 2.5,
      description: 'Team code review session for new features'
    },
    {
      id: 40,
      date: '2024-03-08',
      project: 'Frontend Development',
      hours: 4.0,
      description: 'Implemented user feedback and UI improvements'
    },
    {
      id: 41,
      date: '2024-03-08',
      project: 'API Integration',
      hours: 3.5,
      description: 'Optimized API performance and caching'
    },
    // Previous entries
    {
      id: 1,
      date: '2024-02-05',
      project: 'Frontend Development',
      hours: 6.0,
      description: 'Initial setup of React components and project structure'
    },
    {
      id: 2,
      date: '2024-02-06',
      project: 'API Integration',
      hours: 5.5,
      description: 'Setup API client and basic endpoint integration'
    },
    {
      id: 3,
      date: '2024-02-07',
      project: 'Frontend Development',
      hours: 7.0,
      description: 'Implemented user authentication flow and forms'
    },
    {
      id: 4,
      date: '2024-02-08',
      project: 'Code Review',
      hours: 4.0,
      description: 'Team code review session and documentation updates'
    },
    {
      id: 5,
      date: '2024-02-09',
      project: 'Documentation',
      hours: 5.5,
      description: 'Created initial project documentation and setup guides'
    },
    // Week of February 12-16
    {
      id: 6,
      date: '2024-02-12',
      project: 'Frontend Development',
      hours: 6.5,
      description: 'Built dashboard layout and navigation components'
    },
    {
      id: 7,
      date: '2024-02-13',
      project: 'API Integration',
      hours: 7.0,
      description: 'Implemented data fetching and state management'
    },
    {
      id: 8,
      date: '2024-02-14',
      project: 'Code Review',
      hours: 3.5,
      description: 'Code review and pair programming session'
    },
    {
      id: 9,
      date: '2024-02-15',
      project: 'Documentation',
      hours: 4.0,
      description: 'Updated API documentation and component guides'
    },
    {
      id: 10,
      date: '2024-02-16',
      project: 'Frontend Development',
      hours: 6.0,
      description: 'Implemented responsive design and mobile optimizations'
    },
    // Week of February 19-23
    {
      id: 11,
      date: '2024-02-19',
      project: 'Code Review',
      hours: 2.5,
      description: 'Reviewed pull requests and provided feedback to team members'
    },
    {
      id: 12,
      date: '2024-02-20',
      project: 'Frontend Development',
      hours: 6.5,
      description: 'Implemented new dashboard components and fixed responsive layout issues'
    },
    {
      id: 13,
      date: '2024-02-21',
      project: 'API Integration',
      hours: 7.0,
      description: 'Added new API endpoints and error handling'
    },
    {
      id: 14,
      date: '2024-02-22',
      project: 'Documentation',
      hours: 4.5,
      description: 'Updated technical documentation and created user guides'
    },
    {
      id: 15,
      date: '2024-02-23',
      project: 'Code Review',
      hours: 3.0,
      description: 'Team code review and architecture discussion'
    },
    // Week of February 26-March 1
    {
      id: 16,
      date: '2024-02-26',
      project: 'API Integration',
      hours: 6.0,
      description: 'Implemented new API features and optimizations'
    },
    {
      id: 17,
      date: '2024-02-27',
      project: 'Frontend Development',
      hours: 5.5,
      description: 'Enhanced UI components and fixed bugs'
    },
    {
      id: 18,
      date: '2024-02-28',
      project: 'Documentation',
      hours: 3.5,
      description: 'Created release documentation and updated guides'
    },
    {
      id: 19,
      date: '2024-02-29',
      project: 'Code Review',
      hours: 4.0,
      description: 'Final code review and deployment preparation'
    },
    {
      id: 20,
      date: '2024-03-01',
      project: 'Frontend Development',
      hours: 6.5,
      description: 'Implemented final features and deployment support'
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    date: '',
    project: '',
    hours: '',
    description: ''
  });

  // Get week dates
  const getWeekDates = (date) => {
    const week = [];
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // Start from Sunday

    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      week.push(day);
    }
    return week;
  };

  // Format date for display
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Navigate weeks
  const navigateWeek = (direction) => {
    const newDate = new Date(currentWeek);
    newDate.setDate(newDate.getDate() + (direction * 7));

    // Check if the new date is within allowed range
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

    if (newDate <= oneMonthFromNow) {
      setCurrentWeek(newDate);
    }
  };

  // Filter entries for current week
  const weeklyEntries = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const weekDates = getWeekDates(currentWeek);
    return entryDate >= weekDates[0] && entryDate <= weekDates[6];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.date && newEntry.project && newEntry.hours && newEntry.description) {
      // Validate date is not more than one month in future
      const entryDate = new Date(newEntry.date);
      const oneMonthFromNow = new Date();
      oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

      if (entryDate > oneMonthFromNow) {
        alert('Cannot add entries more than one month in advance');
        return;
      }

      const entry = {
        id: Date.now(),
        ...newEntry,
        hours: parseFloat(newEntry.hours)
      };
      setEntries([entry, ...entries]);
      setNewEntry({ date: '', project: '', hours: '', description: '' });
    }
  };

  const handleCancel = () => {
    setNewEntry({ date: '', project: '', hours: '', description: '' });
  };

  // Get current week range for display
  const weekDates = getWeekDates(currentWeek);
  const weekRange = `${formatDate(weekDates[0])} - ${formatDate(weekDates[6])}`;

  // Calculate weekly statistics
  const calculateWeeklyStats = (entries) => {
    return {
      totalHours: entries.reduce((sum, entry) => sum + entry.hours, 0),
      totalEntries: entries.length,
      projectBreakdown: entries.reduce((acc, entry) => {
        acc[entry.project] = (acc[entry.project] || 0) + entry.hours;
        return acc;
      }, {})
    };
  };

  // Get weekly statistics
  const weeklyStats = calculateWeeklyStats(weeklyEntries);

  return (
    <div className="space-y-6">
      {/* Week Navigation */}
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4">
        <button
          onClick={() => navigateWeek(-1)}
          className="px-3 py-1 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          Previous Week
        </button>
        <span className="font-medium text-gray-900">{weekRange}</span>
        <button
          onClick={() => navigateWeek(1)}
          className="px-3 py-1 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          Next Week
        </button>
      </div>

      {/* New Time Entry Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">New Time Entry</h2>
          <p className="text-gray-600 mt-1">Log your time spent on projects and tasks.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={newEntry.date}
                onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
                max={formatDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project</label>
              <select
                value={newEntry.project}
                onChange={(e) => setNewEntry({ ...newEntry, project: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a project</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="API Integration">API Integration</option>
                <option value="Code Review">Code Review</option>
                <option value="Documentation">Documentation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hours</label>
            <input
              type="number"
              step="0.5"
              min="0.5"
              max="24"
              placeholder="Number of hours"
              value={newEntry.hours}
              onChange={(e) => setNewEntry({ ...newEntry, hours: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Describe the work you did..."
              value={newEntry.description}
              onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Entry
            </button>
          </div>
        </form>
      </div>

     

        

      {/* Weekly Entries */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Weekly Entries</h2>
          <span className="text-sm text-gray-500">{weeklyEntries.length} entries</span>
        </div>
        <div className="space-y-4">
          {weeklyEntries.map(entry => (
            <div key={entry.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{entry.project}</h3>
                  <p className="text-sm text-gray-500">{entry.date}</p>
                </div>
                <span className="text-sm font-medium text-blue-600">{entry.hours} hours</span>
              </div>
              <p className="text-gray-600">{entry.description}</p>
            </div>
          ))}
          {weeklyEntries.length === 0 && (
            <p className="text-gray-500 text-center py-4">No entries for this week</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeSheet;