
export default function FileDisplay({ file, audioStream, resetAudio }) {
  return (
    <main className="mx-auto flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center pb-20 text-center">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
            Your <span className="text-red-400 bold">File</span>
        </h1>
        <div className="mx-auto flex flex-col text-left mb-4">
            <h3 className="font-semibold">Name</h3>
            <p>{file.name}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
            <button 
                onClick={resetAudio} 
                className="text-slate-400 hover:text-red-600"
            >Reset</button>
            <button 
                className="specialBtn px-3 py-2 rounded-lg text-red-400 flex items-center gap-2"
            >
                <p>Transcribe</p>
                <i className="fa-solid fa-pen-nib"></i>
            </button>
        </div>
    </main>
  )
}
