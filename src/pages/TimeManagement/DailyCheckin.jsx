import React, { useState } from 'react';

const DailyCheckin = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [checkin, setCheckin] = useState({
    focus: '',
    blockers: ''
  });

  // Sample historical data for the past month
  const [checkinHistory, setCheckinHistory] = useState([
    // Week of March 18-22 (2 weeks ahead)
    {
      date: '2024-03-22',
      checkins: [
        {
          id: 301,
          name: 'You',
          time: '09:00 AM',
          status: 'Planning sprint retrospective and next sprint goals.',
          project: 'Project Planning'
        },
        {
          id: 302,
          name: 'Sarah Chen',
          time: '09:15 AM',
          status: 'Finalizing deployment pipeline improvements.',
          project: 'DevOps'
        }
      ]
    },
    {
      date: '2024-03-21',
      checkins: [
        {
          id: 303,
          name: 'You',
          time: '08:45 AM',
          status: 'Implementing analytics dashboard enhancements.',
          project: 'Frontend Development'
        },
        {
          id: 304,
          name: 'Mike Johnson',
          time: '09:00 AM',
          status: 'Conducting performance testing on new features.',
          project: 'QA Testing'
        }
      ]
    },
    // Week of March 11-15 (1 week ahead)
    {
      date: '2024-03-15',
      checkins: [
        {
          id: 305,
          name: 'You',
          time: '09:00 AM',
          status: 'Working on data visualization components.',
          project: 'Frontend Development'
        },
        {
          id: 306,
          name: 'Raj Patel',
          time: '09:30 AM',
          status: 'Updating system architecture documentation.',
          project: 'Documentation'
        }
      ]
    },
    {
      date: '2024-03-14',
      checkins: [
        {
          id: 307,
          name: 'You',
          time: '08:30 AM',
          status: 'Implementing real-time data updates.',
          project: 'Frontend Development'
        },
        {
          id: 308,
          name: 'Anika Kumar',
          time: '09:00 AM',
          status: 'Optimizing database queries for analytics.',
          project: 'Backend Development'
        }
      ]
    },
    // Current Week (March 4-8)
    {
      date: '2024-02-29',
      checkins: [
        {
          id: 201,
          name: 'You',
          time: '09:00 AM',
          status: 'Working on the timesheet feature implementation and UI improvements.',
          project: 'Frontend Development'
        },
        {
          id: 202,
          name: 'Sarah Chen',
          time: '09:15 AM',
          status: 'Implementing authentication service and API endpoints.',
          project: 'Backend Development'
        },
        {
          id: 203,
          name: 'Mike Johnson',
          time: '08:45 AM',
          status: 'Running integration tests and fixing reported issues.',
          project: 'QA Testing'
        }
      ]
    },
    {
      date: '2024-02-28',
      checkins: [
        {
          id: 204,
          name: 'You',
          time: '09:30 AM',
          status: 'Implementing daily check-in feature and navigation controls.',
          project: 'Frontend Development'
        },
        {
          id: 205,
          name: 'Raj Patel',
          time: '09:00 AM',
          status: 'Updating API documentation and sequence diagrams.',
          project: 'Documentation'
        }
      ]
    },
    // Last Week
    {
      date: '2024-02-22',
      checkins: [
        {
          id: 206,
          name: 'You',
          time: '08:30 AM',
          status: 'Setting up project structure and implementing base components.',
          project: 'Frontend Development'
        },
        {
          id: 207,
          name: 'Anika Kumar',
          time: '09:00 AM',
          status: 'Working on data visualization components and charts.',
          project: 'UI Development'
        },
        {
          id: 208,
          name: 'Sarah Chen',
          time: '09:15 AM',
          status: 'Implementing data models and database schema.',
          project: 'Backend Development'
        }
      ]
    },
    {
      date: '2024-02-21',
      checkins: [
        {
          id: 209,
          name: 'You',
          time: '09:00 AM',
          status: 'Sprint planning and task breakdown for new features.',
          project: 'Project Planning'
        },
        {
          id: 210,
          name: 'Mike Johnson',
          time: '09:30 AM',
          status: 'Setting up test environment and writing test cases.',
          project: 'QA Testing'
        }
      ]
    },
    {
      date: '2024-02-20',
      checkins: [
        {
          id: 211,
          name: 'You',
          time: '08:45 AM',
          status: 'Code review and addressing feedback from team.',
          project: 'Code Review'
        },
        {
          id: 212,
          name: 'Raj Patel',
          time: '09:00 AM',
          status: 'Creating user guides and technical documentation.',
          project: 'Documentation'
        },
        {
          id: 213,
          name: 'Anika Kumar',
          time: '09:15 AM',
          status: 'Implementing responsive design and mobile optimizations.',
          project: 'UI Development'
        }
      ]
    },
    // Week of February 26-March 1 (1 week back)
    {
      date: '2024-03-01',
      checkins: [
        {
          id: 309,
          name: 'You',
          time: '09:00 AM',
          status: 'Implementing user feedback from beta testing.',
          project: 'Frontend Development'
        },
        {
          id: 310,
          name: 'Sarah Chen',
          time: '09:15 AM',
          status: 'Setting up monitoring for new services.',
          project: 'DevOps'
        }
      ]
    },
    {
      date: '2024-02-28',
      checkins: [
        {
          id: 311,
          name: 'You',
          time: '08:45 AM',
          status: 'Code review and bug fixes for release.',
          project: 'Code Review'
        },
        {
          id: 312,
          name: 'Mike Johnson',
          time: '09:00 AM',
          status: 'Running integration tests for new features.',
          project: 'QA Testing'
        }
      ]
    },
    // Week of February 19-23 (2 weeks back)
    {
      date: '2024-02-23',
      checkins: [
        {
          id: 313,
          name: 'You',
          time: '09:00 AM',
          status: 'Sprint planning and task breakdown.',
          project: 'Project Planning'
        },
        {
          id: 314,
          name: 'Raj Patel',
          time: '09:30 AM',
          status: 'Creating user documentation for new features.',
          project: 'Documentation'
        }
      ]
    },
    {
      date: '2024-02-22',
      checkins: [
        {
          id: 315,
          name: 'You',
          time: '08:30 AM',
          status: 'Implementing authentication improvements.',
          project: 'Frontend Development'
        },
        {
          id: 316,
          name: 'Anika Kumar',
          time: '09:00 AM',
          status: 'Optimizing API response times.',
          project: 'Backend Development'
        }
      ]
    }
  ]);

  const [teamCheckins, setTeamCheckins] = useState([
    {
      id: 1,
      name: 'Anika Kumar',
      time: '09:15 AM',
      status: 'Working on the new dashboard interface. Planning to finish the analytics components by EOD.',
      project: 'UI Development'
    },
    {
      id: 2,
      name: 'Raj Patel',
      time: '08:45 AM',
      status: 'Reviewing client requirements and preparing documentation for the next sprint planning session.',
      project: 'Documentation'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      time: '09:30 AM',
      status: 'Implementing API endpoints for the new feature set. Working on authentication flow.',
      project: 'Backend Development'
    },
    {
      id: 4,
      name: 'Mike Johnson',
      time: '08:30 AM',
      status: 'Testing the latest deployment and fixing reported bugs from QA team.',
      project: 'QA Testing'
    }
  ]);

  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Navigate through dates
  const navigateDate = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction);

    // Limit to past month
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (newDate >= oneMonthAgo && newDate <= new Date()) {
      setCurrentDate(newDate);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    const newCheckin = {
      id: Date.now(),
      name: 'You',
      time: timeString,
      status: checkin.focus + (checkin.blockers ? '\nBlockers: ' + checkin.blockers : ''),
      project: 'Current Project'
    };

    // Add to today's checkins
    setTeamCheckins([newCheckin, ...teamCheckins]);

    // Add to history
    const today = now.toISOString().split('T')[0];
    const historyEntry = checkinHistory.find(h => h.date === today);

    if (historyEntry) {
      historyEntry.checkins.unshift(newCheckin);
      setCheckinHistory([...checkinHistory]);
    } else {
      setCheckinHistory([
        { date: today, checkins: [newCheckin] },
        ...checkinHistory
      ]);
    }

    setCheckin({ focus: '', blockers: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Date Navigation */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
        <button
          onClick={() => navigateDate(-1)}
          className="px-3 py-1 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
        >
          Previous Day
        </button>
        <span className="font-medium text-gray-900">{formatDate(currentDate)}</span>
        <button
          onClick={() => navigateDate(1)}
          className="px-3 py-1 rounded-md text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
          disabled={currentDate >= new Date()}
        >
          Next Day
        </button>
      </div>

      {/* Daily Check-in Form - Only show for today */}
      {currentDate.toDateString() === new Date().toDateString() && (
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Daily Check-in</h1>
              <p className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <span className="text-sm text-gray-500">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-base font-medium text-gray-900 mb-3">
                  What are you working on today?
                </label>
                <textarea
                  value={checkin.focus}
                  onChange={(e) => setCheckin({ ...checkin, focus: e.target.value })}
                  placeholder="Share your focus for the day..."
                  rows={4}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-900 mb-3">
                  Any blockers or challenges?
                </label>
                <textarea
                  value={checkin.blockers}
                  onChange={(e) => setCheckin({ ...checkin, blockers: e.target.value })}
                  placeholder="Anything blocking your progress? (Optional)"
                  rows={4}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Check-in
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Historical Check-ins */}
      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Check-ins for {formatDate(currentDate)}</h2>
          <p className="text-sm text-gray-600 mt-1">Team activity and updates</p>
        </div>
        
        <div className="space-y-8">
          {(currentDate.toDateString() === new Date().toDateString() ? teamCheckins :
            checkinHistory.find(h => h.date === currentDate.toISOString().split('T')[0])?.checkins || []
          ).map((checkin) => (
            <div key={checkin.id} className="border-b border-gray-200 last:border-0 pb-8 last:pb-0">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{checkin.name}</h3>
                    <span className="text-sm text-gray-500">{checkin.time}</span>
                  </div>
                  <p className="mt-2 text-gray-900 whitespace-pre-line">{checkin.status}</p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                      {checkin.project}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {(!currentDate.toDateString() === new Date().toDateString() && 
            !checkinHistory.find(h => h.date === currentDate.toISOString().split('T')[0])) && (
            <p className="text-gray-500 text-center py-4">No check-ins for this date</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyCheckin;