

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 m-4">
        <h1 className="font-medium bold">Transcription App</h1>
        <button className="flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-red-400 font-semibold">
            <p>New</p>
            <i className="fa-solid fa-plus"></i>
        </button>
    </header>
  )
}
