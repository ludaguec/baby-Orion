export default function InsightCards() {
  const insights = [
    {
      title: 'Total Revenue',
      value: '$487,234',
      change: '-12.3%',
      trend: 'down',
      icon: '💰',
      description: 'vs last quarter',
    },
    {
      title: 'Customer Growth',
      value: '12,847',
      change: '+23.1%',
      trend: 'up',
      icon: '👥',
      description: 'active customers',
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.5%',
      trend: 'up',
      icon: '📈',
      description: 'above industry avg',
    },
    {
      title: 'Avg Deal Size',
      value: '$12,400',
      change: '+8.2%',
      trend: 'up',
      icon: '💼',
      description: 'month over month',
    },
    {
      title: 'Churn Rate',
      value: '5.2%',
      change: '+1.1%',
      trend: 'down',
      icon: '⚠️',
      description: 'needs attention',
    },
    {
      title: 'Marketing ROI',
      value: '280%',
      change: '+15%',
      trend: 'up',
      icon: '📊',
      description: 'quarter over quarter',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Key Performance Indicators</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{insight.icon}</span>
                <h3 className="text-sm font-medium text-slate-400">{insight.title}</h3>
              </div>
            </div>

            <div className="mb-2">
              <p className="text-3xl font-bold text-white">{insight.value}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{insight.description}</span>
              <span
                className={`text-sm font-semibold ${
                  insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {insight.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
