

export default function HomePage({ setFile, setAudioStream }) {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center pb-20 text-center">
        <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
            Voice <span className="text-red-400 bold">Transcription</span>
        </h1>
        <div className="flex items-center justify-center">
            <h1 className="font-medium">Record</h1>
            <span className="text-red-400 h-[2rem]">&rarr;</span>
            <h1 className="font-medium">Transcribe</h1>
            <span className="text-red-400 h-[2rem]">&rarr;</span>
            <h1 className="font-medium">Translate</h1>
        </div>
        <button 
            className="flex items-center text-base justify-between 
            gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-3 py-2 rounded-xl"
        >
            <p className="text-red-400">Record</p>
            <i className="fa-solid fa-microphone"></i>
        </button>
        <p className="text-base pt-2 font-semibold">Or <label className="text-red-400 cursor-pointer 
        hover:text-red-600 duration-200">upload 
        <input
            onChange={(e) => {
                const tempFile = e.target.files[0]
                setFile(tempFile)
            }}
            className="hidden" type="file" accept=".png,.jpg,.jpeg,.webp,.svg" /></label> a mp3 file</p>
    </main>
  )
}
