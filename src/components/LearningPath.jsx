import { ArrowRight, Target, Compass } from 'lucide-react'

export default function LearningPath({ steps }) {
  return (
    <section className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Your Adaptive Path</h2>
        <Compass className="h-5 w-5 text-indigo-600" />
      </div>

      <ol className="relative border-s border-gray-200 ms-2">
        {steps.map((step, idx) => (
          <li key={step.id} className="mb-6 ms-4">
            <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -start-1.5 border border-white" />
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Target className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{step.level}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{step.summary}</p>
                <div className="mt-2 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: `${step.progress}%` }} />
                </div>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="ms-12 mt-2 text-gray-400">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
