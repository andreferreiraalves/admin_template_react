import { ArrowLeft } from "phosphor-react";

function App() {

  return (
    <div className="flex">
      <div className={`w-72 h-screen bg-dark-purple relative`}>
        <img
          src="./src/assets/control.png"
          className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple bg-white" />
      </div>
      <div className="p-7 font-semibold text-2xl flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
