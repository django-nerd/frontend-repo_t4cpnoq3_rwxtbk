import { TrendingUp, CheckCircle, Clock } from 'lucide-react'

export default function ProgressOverview({ stats }) {
  const { streakDays, modulesCompleted, timeSpentMin, mastery } = stats

  return (
    <section className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>
        <TrendingUp className="h-5 w-5 text-indigo-600" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3 rounded-xl bg-indigo-50">
          <p className="text-xs text-indigo-700">Streak</p>
          <p className="text-xl font-bold text-indigo-900">{streakDays}d</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50">
          <p className="text-xs text-emerald-700">Completed</p>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
            <p className="text-xl font-bold text-emerald-900">{modulesCompleted}</p>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-amber-50">
          <p className="text-xs text-amber-700">Time Spent</p>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-amber-600" />
            <p className="text-xl font-bold text-amber-900">{timeSpentMin}m</p>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-purple-50">
          <p className="text-xs text-purple-700">Mastery</p>
          <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
              style={{ width: `${mastery}%` }}
            />
          </div>
          <p className="text-sm font-medium text-purple-900 mt-1">{mastery}%</p>
        </div>
      </div>
    </section>
  )
}
