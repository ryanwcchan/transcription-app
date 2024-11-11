import { useState, useEffect, useRef } from "react"

export default function HomePage({ setFile, setAudioStream }) {

  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [audioChunks, setAudioChunks] = useState([])
  const [duration, setDuration] = useState(0)

  const mediaRecorder = useRef(null)

  const mimeType = 'audio/webm'

  async function startRecording() {
    let tempStream

    console.log('Start recording')

    try {
        const streamData = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        })
        tempStream = streamData
    } catch (err) {
        console.log(err.message)
        return
    }
    setRecordingStatus('recording')

    // Create new media recorder instance using the stream
    const media = new MediaRecorder(tempStream, { type: mimeType })

    mediaRecorder.current = media
    let localAudioChunks = []
    mediaRecorder.current.ondataavilable = (event) => {
        if (typeof event.data === 'undefined') { return }
        if (event.data.size === 0) { return }
        localAudioChunks.push(event.data)

    }
    setAudioChunks(localAudioChunks)
  }

  async function stopRecording() {
    setRecordingStatus('inactive')
    console.log('Stop recording')

    mediaRecorder.current.stop()
    mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, {type: mimeType})
        setAudioStream(audioBlob)
        setAudioChunks([])
    }
  }

  useEffect(() => {
    if (recordingStatus === 'inactive') { return }

    const interval = setInterval(() => {
        setDuration(curr => curr + 1)
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center pb-20 text-center">
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
            onClick={recordingStatus === 'recording' ? stopRecording : startRecording}
            className="flex items-center text-base justify-between 
            gap-4 mx-auto w-72 max-w-full my-4 specialBtn px-3 py-2 rounded-xl"
        >
            <p className="text-red-400">{recordingStatus === 'inactive' ? 'Record' : `Stop recording`}</p>
            <div className="flex items-center gap-2">
                {duration !== 0 && (
                    <p className={"text-sm " + 
                    (recordingStatus === 'recording' ? ' text-red-600 font-semibold' : "")
                    }>{duration}</p>
                )}
                <i className={"fa-solid fa-microphone duration-200 " + 
                (recordingStatus === 'recording' ? ' text-red-600' : "")} ></i>
            </div>
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
