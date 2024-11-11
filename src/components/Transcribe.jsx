

export default function Transcribe({ downloading }) {
  return (
    <div className="flex items-center flex-col justify-center gap-10 md:gap-14 py-24">
        <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
                <span className="text-red-400 bold">Transcribing</span>
            </h1>
            <p>{!downloading ? 'Reading audio' : 'Converting audio'}</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full">
            {[0,1,2].map(val => {
                <div 
                    key={val} 
                    className={'rounded-full h02 sm:h-3 bg-slate-400 loading ' +
                    `loading${val}`}>
                    
                </div>
            })}
        </div>
    </div>
  )
}
