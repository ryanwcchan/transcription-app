import { useState } from "react"

export default function Information() {
  const [tab, setTab] = useState('transcription')

  return (
    <div>
      <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center w-full max-w-prose mx-auto">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Your <span className="text-red-400 bold">Transcription</span>
        </h1>

        <div className="grid grid-cols-2 mx-auto shadow rounded-full overflow-hidden items-center">
          <button onClick={() => setTab('transcription')} className={`px-4 py-2 font-medium + 
            ${tab === 'transcription' ? ' bg-red-400 text-white hover:bg-red-500'
              : ' bg-white text-red-400 hover:bg-red-100'
            }`}>Transcription</button>
          <button onClick={() => setTab('translation')} className={`px-4 py-2 font-medium + 
            ${tab === 'translation' ? ' bg-red-400 text-white hover:bg-red-500'
              : ' bg-white text-red-400 hover:bg-red-100'
            }`}>Translation</button>
        </div>
      </main>
    </div>
  )
}
