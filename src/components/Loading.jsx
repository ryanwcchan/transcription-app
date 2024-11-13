

export default function Loading({ downloading }) {
  return (
    <div className="flex items-center flex-col justify-center gap-10 md:gap-14 pb-24 p-4 text-center flex-1">
        <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
                <span className="text-red-400 bold">Transcribing</span>
            </h1>
            <p className="text-center">{!downloading ? 'Reading audio' : 'Converting audio'}</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 max-w-[400px] mx-auto w-full">
            {[0, 1, 2].map(val => {
                return (
                    <div 
                        key={val} 
                        className={'rounded-full h-2 sm:h-3 bg-slate-400 loading ' +
                        `loading${val}`}>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
