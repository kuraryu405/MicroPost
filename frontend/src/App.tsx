import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          MicroPost
        </h1>
        <p className="text-center text-gray-600 mb-8">
          React + Vite + Tailwind CSS
        </p>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
            <p className="text-sm font-semibold mb-2">カウンター</p>
            <p className="text-5xl font-bold">{count}</p>
          </div>
          
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          >
            クリックしてカウント
          </button>
          
          <button 
            onClick={() => setCount(0)}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out"
          >
            リセット
          </button>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Tailwind CSSが正常に動作しています！ ✨
        </p>
      </div>
    </div>
  )
}

export default App
