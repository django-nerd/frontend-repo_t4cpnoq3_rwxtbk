import { BookOpen, Sparkles } from 'lucide-react'

const Pill = ({ text }) => (
  <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">{text}</span>
)

export default function Recommendations({ items }) {
  return (
    <section className="bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Smart Recommendations</h2>
        <Sparkles className="h-5 w-5 text-amber-500" />
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="p-4 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tags.map((t) => (
                      <Pill key={t} text={t} />
                    ))}
                  </div>
                </div>
              </div>
              <button className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
