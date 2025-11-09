import { useMemo, useState } from 'react'
import Header from './components/Header'
import ProgressOverview from './components/ProgressOverview'
import Recommendations from './components/Recommendations'
import LearningPath from './components/LearningPath'

function App() {
  const [name, setName] = useState('Alex')

  // Mocked profile-driven data (would come from backend in a full app)
  const stats = useMemo(() => ({
    streakDays: 5,
    modulesCompleted: 14,
    timeSpentMin: 320,
    mastery: 68,
  }), [])

  const recommendations = useMemo(() => ([
    {
      id: 'rec-1',
      title: 'Algebra II: Quadratic Functions',
      description: 'Based on your strong linear algebra skills and recent performance in polynomials.',
      tags: ['Math', 'Algebra', 'Recommended']
    },
    {
      id: 'rec-2',
      title: 'Essay Structure: Crafting Strong Thesis',
      description: 'You excel at analysis. Level up by tightening your thesis statements.',
      tags: ['Writing', 'English', 'Skill Focus']
    },
    {
      id: 'rec-3',
      title: 'Newtonian Mechanics: Forces & Motion',
      description: 'Follow-up to last week’s kinematics module with spaced repetition.',
      tags: ['Physics', 'Spaced Repetition']
    }
  ]), [])

  const learningPath = useMemo(() => ([
    { id: 's1', title: 'Review: Linear Equations', level: 'Mastered', summary: 'Quick refresh to keep fundamentals sharp.', progress: 100 },
    { id: 's2', title: 'Polynomials & Factoring', level: 'Proficient', summary: 'Focused drills where you lost points previously.', progress: 75 },
    { id: 's3', title: 'Quadratics: Graphs & Roots', level: 'Next Up', summary: 'Adaptive lessons with interactive challenges.', progress: 20 },
  ]), [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <Header name={name} onNameChange={setName} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ProgressOverview stats={stats} />
            <Recommendations items={recommendations} />
          </div>
          <div className="lg:col-span-1">
            <LearningPath steps={learningPath} />
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          {name ? (
            <p>
              Welcome back, <span className="font-medium text-gray-700">{name}</span>. Your dashboard updates based on your recent activity.
            </p>
          ) : (
            <p>Enter your name to personalize recommendations.</p>
          )}
        </footer>
      </div>
    </div>
  )
}

export default App
