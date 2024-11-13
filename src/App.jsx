import FileDisplay from "./components/FileDisplay"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Information from './components/Information'
import Loading from './components/Loading'
import { useState, useEffect } from "react"

function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [output, setOutput] = useState(true)
  const [loading, setLoading] = useState(false)

  const isAudioAvailable = file || audioStream

  function resetAudio() {
    setFile(null)
    setAudioStream(null)
  }

  useEffect(() => {
    console.log(audioStream)
  }, [audioStream])

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full">
      <section className="min-h-screen flex flex-col">
        <Header />
        {output ? (
          <Information />
        ) : loading ? (
          <Loading />
        ) : isAudioAvailable ? (
          <FileDisplay 
            file={file} 
            audioStream={audioStream} 
            resetAudio={resetAudio} 
          />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <footer>

      </footer>
    </div>
  )
}

export default App
