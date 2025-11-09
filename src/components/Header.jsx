import { User, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header({ name, onNameChange }) {
  const [localName, setLocalName] = useState(name || '')

  useEffect(() => {
    setLocalName(name || '')
  }, [name])

  return (
    <header className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Pathwise</h1>
            <p className="text-sm text-gray-500">Personalized learning that adapts to you</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              onBlur={() => onNameChange(localName.trim())}
              placeholder="Your name"
              className="pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
